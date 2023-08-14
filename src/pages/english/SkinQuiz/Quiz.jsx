import React, { useState, useEffect } from 'react';
import jsPDF from 'jspdf';
import emailjs from 'emailjs-com';
import 'jspdf-autotable';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import { BsArrowRight, BsArrowLeft } from 'react-icons/bs';
import TextField from '@mui/material/TextField';
import AppLayout from '../../../components/AppLayout/AppLayout';
import { Button } from '@material-tailwind/react';
import IMAGES from '../../../assets/images';
import QuestionOptions from './Questions';

const skinTone = [
  IMAGES.SKIN_TONE_1,
  IMAGES.SKIN_TONE_2,
  IMAGES.SKIN_TONE_3,
  IMAGES.SKIN_TONE_4,
  IMAGES.SKIN_TONE_5,
  IMAGES.SKIN_TONE_6,
];
const skinToneLabels = ['Light', 'Fair', 'Medium', 'Olive', 'Tan', 'Dark'];

const skinType = [
  IMAGES.SKIN_TYPE_1,
  IMAGES.SKIN_TYPE_2,
  IMAGES.SKIN_TYPE_3,
  IMAGES.SKIN_TYPE_4,
  IMAGES.SKIN_TYPE_5,
];
const skinTypeLabels = ['Dry', 'Oily', 'Normal', 'Combination', 'Sensitive'];

const steps = [
  {
    title: "Hey! Let's start with your name",
    label: 'Name',
    type: 'input', // Type of step
  },
  {
    title: 'What is your Skin Tone?',
    type: 'skinTone', // Use a unique key for the step type
    images: skinTone,
  },
  {
    title: 'What is your Skin Type?',
    type: 'skinType', // Use a unique key for the step type
    images: skinType,
  },
  {
    title: 'Do you have skin allergies?',
    type: 'skinAllergy',
    questionOptions: ['Yes', 'No'],
  },
  {
    title: 'What are you allergic to?',
    label: 'Allergy',
    type: 'input', // Type of step
  },
  {
    title: 'How frequently do you use facial masks?',
    type: 'facialMask',
    questionOptions: ['Twice or more a week', 'Once a week', 'Once every 2 weeks', 'Once a month', 'Never really'],
  },
  {
    title: 'Your gender ? Hormones play a big role behind the scenes in your skin',
    type: 'gender',
    questionOptions: ['Male', 'Female', 'Other', 'Prefer not to say'],
  },
  {
    title: "What's your age? It will remain confidential",
    type: 'age',
    questionOptions: ['Under 14', '15-18', '19-25', '26-35', '36-50', '50+'],
  },
  {
    title: 'Enter Your Email',
    label: 'Email',
    type: 'input', // Type of step
  }
];

export default function Quiz() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const [prevActiveStep, setPrevActiveStep] = useState(-1);

  // Define maxSteps here
  const maxSteps = steps.length;

  const [filledSteps, setFilledSteps] = useState(new Array(maxSteps).fill(false));
  const [selectedImage, setSelectedImage] = useState(null);
  const [userResponses, setUserResponses] = useState(new Array(maxSteps).fill(null));
  const [showResultsTable, setShowResultsTable] = useState(false);
  const [emailError, setEmailError] = useState(''); 

  useEffect(() => {
    const handleEnterKey = (event) => {
      if (event.key === 'Enter' && filledSteps[activeStep]) {
        handleNext();
      }
    };

    document.addEventListener('keydown', handleEnterKey);

    return () => {
      document.removeEventListener('keydown', handleEnterKey);
    };
  }, [activeStep, filledSteps]);

  const handleNext = () => {
    const currentStep = steps[activeStep];
  
    // Check if the step requires validation
    if (currentStep.type === 'input') {
      const value = userResponses[activeStep] || '';
  
      if (value.trim() === '') {
        alert(`${currentStep.label} is required`);
        return;
      }
  
      // Additional validation based on the step type
      if (currentStep.label === 'Email') {
        if (!isValidEmail(value)) {
          setEmailError('Please enter a valid email');
          return;
        } else {
          setEmailError('');
        }
      }
    }
  
    // Continue with moving to the next step
    if (
      filledSteps[activeStep] ||
      (activeStep === 1 && selectedImage !== null) ||
      (activeStep === 2 && selectedImage !== null) ||
      (activeStep === 3 && selectedImage !== null) ||
      (activeStep === 4 && filledSteps[4]) ||
      (activeStep === 5 && selectedImage !== null) ||
      (activeStep === 6 && selectedImage !== null) ||
      (activeStep === 7 && selectedImage !== null) ||
      (activeStep === 8 && userResponses[8] && isValidEmail(userResponses[8])) // Include email validation
    ) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };
  
  

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };


  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);

    const newFilledSteps = new Array(maxSteps).fill(false);
    setFilledSteps(newFilledSteps);
  };

  const handleImageSelect = (option) => {
    setSelectedImage(option);
    const newResponses = [...userResponses];
    newResponses[activeStep] = option;
    setUserResponses(newResponses);

    if (activeStep === 7 || activeStep === 8) {
      handleNext();
    } else {
      handleNext(); // Automatically move to the next step
    }
  };


  const handleInputChange = (stepIndex, value) => {
    const newResponses = [...userResponses];
    newResponses[stepIndex] = value.trim();
    setUserResponses(newResponses);

    const newFilledSteps = [...filledSteps];
    newFilledSteps[stepIndex] = !!value.trim();
    setFilledSteps(newFilledSteps);
  };


  const renderStepContent = (step) => {
    switch (step.type) {
      case 'input':
        return (
          <TextField
            label={step.label}
            variant="outlined"
            fullWidth
            value={filledSteps[activeStep] ? undefined : ''}
            onChange={(e) => handleInputChange(activeStep, e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault();
                if (filledSteps[activeStep]) {
                  handleNext();
                }
              }
            }}
            error={step.label === 'Email' && emailError !== ''}
            helperText={step.label === 'Email' ? emailError : ''}
            sx={{
              '& .MuiInputLabel-root': {
                color: '#ee8bb9', // Label color
              },
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: 'rgb(209 213 219)', // Default color
                },
                '&:hover fieldset': {
                  borderColor: '#ee8bb9', // Hover color
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#ee8bb9', // Focus color
                },
              },
            }}
          />

        );
      case 'images':
      case 'skinTone':
      case 'skinType':
        return (
          <div className='flex flex-col items-center mx-auto'>
            <div className='flex sm:justify-between justify-center flex-wrap h-full w-full'>
              {step.images.map((image, index) => (
                <div key={index} className={`flex flex-col cursor-pointer border-2 pb-2 border-transparent hover:border-[#ee8bb9] items-center w-48 ${selectedImage === image ? 'border-2 border-[#ee8bb9]' : ''}`}>
                  <img
                    className='w-full'
                    src={image}
                    alt=""
                    onClick={() => handleImageSelect(image)}
                  />
                  <p className='mt-2 text-lg text-center'>{step.type === 'skinTone' ? skinToneLabels[index] : (step.type === 'skinType' ? skinTypeLabels[index] : '')}</p>
                </div>
              ))}
            </div>
          </div>
        );
      case 'skinAllergy':
        return (
          <>
            {/* <h3 className='text-2xl font-semibold text-center mb-4'>{step.title}</h3> */}
            <QuestionOptions
              questionOptions={step.questionOptions || []}
              selectedQuestion={selectedImage}
              onSelect={handleImageSelect}
            />
          </>
        );
      case 'facialMask':
        return (
          <>
            {/* <h3 className='text-2xl font-semibold text-center mb-4'>{step.title}</h3> */}
            <QuestionOptions
              questionOptions={step.questionOptions || []}
              selectedQuestion={selectedImage}
              onSelect={handleImageSelect}
            />
          </>
        );
      case 'gender':
        return (
          <>
            {/* <h3 className='text-2xl font-semibold text-center mb-4'>{step.title}</h3> */}
            <QuestionOptions
              questionOptions={step.questionOptions || []}
              selectedQuestion={selectedImage}
              onSelect={handleImageSelect}
            />
          </>
        );
      case 'age':
        return (
          <>
            {/* <h3 className='text-2xl font-semibold text-center mb-4'>{step.title}</h3> */}
            <QuestionOptions
              questionOptions={step.questionOptions || []}
              selectedQuestion={selectedImage}
              onSelect={handleImageSelect}
            />
          </>
        );
      // Add more cases for different step types
      default:
        return null;
    }
  };


  const generatePDF = () => {
    const doc = new jsPDF();

    // Define the table headers
    const headers = ['Query', 'Response'];

    // Create a data array for the table
    const tableData = steps.map((step, index) => [
      step.title,
      step.type === 'images' ||
        step.type === 'skinTone' ||
        step.type === 'skinType' ||
        step.type === 'gender'
        ? step.type === 'skinTone'
          ? skinToneLabels[skinTone.indexOf(userResponses[index])]
          : step.type === 'skinType'
            ? skinTypeLabels[skinType.indexOf(userResponses[index])]
            : step.type === 'gender'
              ? userResponses[index]
              : ''
        : userResponses[index]
    ]);

    // Add the headers and data to the PDF
    doc.setFontSize(15);
    doc.text('User Responses', 10, 10);
    doc.autoTable({
      head: [headers],
      body: tableData,
      startY: 20,
      showHead: 'firstPage',
    });

    // Save the PDF
    doc.save('user_responses.pdf');
  };

  const renderViewResultsButton = () => {
    if (activeStep === maxSteps - 1) {
      const isEmailValid = steps[8].label === 'Email' && isValidEmail(userResponses[8]);
  
      return (
        <div className='px-3'>
          <Button
            variant="contained"
            color="primary"
            size="lg"
            onClick={() => {
              setShowResultsTable(true);
              generatePDF();
            }}
            className={`mt-4 md:w-48 w-full bg-[#e78956] hover:bg-[#74322c] focus:bg-[#74322c] ${!isEmailValid ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={!isEmailValid}
          >
            View Results
          </Button>
        </div>
      );
    }
    return null;
  };
  

  const handleViewResults = () => {
    // Generate the PDF content
    const doc = new jsPDF();
    const resultsTable = document.getElementById('resultsTable'); // Assuming you have a table with id 'resultsTable' where the results table is rendered
    doc.text('User Responses', 10, 10);
    doc.autoTable({ html: resultsTable });
  
    // Save the PDF
    doc.save('user_responses.pdf');
  
    // Send email with attachment
    const pdfData = doc.output('datauristring');
    sendEmailWithAttachment('numankhalil27@gmail.com', pdfData);
  
    // Clear email error
    setEmailError('');
  
    // Reset email field and filled step
    const resetResponses = [...userResponses];
    resetResponses[8] = null; // Reset the email response
    setUserResponses(resetResponses);
  
    const resetFilledSteps = [...filledSteps];
    resetFilledSteps[8] = false; // Mark email step as not filled
    setFilledSteps(resetFilledSteps);
  
    // Move to the next step (if needed)
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };


  const sendEmailWithAttachment = (recipientEmail, pdfData) => {
    const serviceId = 'service_a2uv6oz'; // Replace with your Email.js service ID
    const templateId = 'template_8g5y0du'; // Replace with your Email.js template ID
    const userId = 'x4gGU7RWLSWidWqG6'; // Replace with your Email.js user ID

    const emailParams = {
      to_email: recipientEmail,
      subject: 'Quiz Results',
      message: 'Here are your quiz results.',
    };

    const emailAttachments = [
      {
        name: 'user_responses.pdf',
        data: pdfData,
      },
    ];

    // Send the email with attachment
    emailjs.send(serviceId, templateId, emailParams, userId)
      .then((response) => {
        console.log('Email sent successfully:', response);
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      });
  };




  return (
    <AppLayout>
      <div className='min-h-content pb-10 mt-16 xl:w-1/2 lg:2/3 w-full mx-auto'>
        <Box sx={{ flexGrow: 1 }}>
          <h3 className='text-2xl font-semibold text-center mb-8'>{steps[activeStep].title}</h3>

          <Box sx={{ height: 'auto', marginBottom: '60px', width: '100%', p: 2 }}>
            {renderStepContent(steps[activeStep])}
          </Box>
          <MobileStepper
            className='custom-mobile-stepper'
            sx={{
              width: '100%',
              px: '15px',
              md: {
                width: '70%',
                mx: 'auto',
                px: 0
              },
            }}
            variant="text"
            steps={maxSteps}
            position="static"
            activeStep={activeStep}
            nextButton={
              (steps[activeStep].type === 'input' && activeStep !== 8) ? (
                <Button
                  className='flex items-center gap-3 bg-[#e78956] hover:bg-[#74322c] focus:bg-[#74322c]'
                  size="lg"
                  onClick={handleNext}
                  disabled={activeStep === maxSteps - 1}
                >
                  Next
                  {theme.direction === 'rtl' ? (
                    <BsArrowLeft className='text-xl' />
                  ) : (
                    <BsArrowRight className='text-xl' />
                  )}
                </Button>
              ) : null
            }
            backButton={
              <Button
                variant='text'
                color='pink'
                className='flex items-center gap-2 focus:shadow-0'
                size="lg"
                onClick={handleBack}
                disabled={activeStep === 0}
              >
                {theme.direction === 'rtl' ? (
                  <BsArrowRight />
                ) : (
                  <BsArrowLeft />
                )}
                Back
              </Button>
            }
          />

          {renderViewResultsButton()}
          {/* {renderResultsTable()} */}
        </Box>
      </div>
    </AppLayout>
  );
}
