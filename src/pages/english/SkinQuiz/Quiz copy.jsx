import React, { useState, useEffect } from 'react';
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
    label: 'Enter Your Name',
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
    title: (<div>Your gender: <br/>Hormones play a big role behind the scenes in your skin</div>),
    type: 'gender',
    questionOptions: ['Male', 'Female', 'Other', 'Prefer not to say'],
  },
  {
    title: (<div>What's your age?<br/>Your age will remain confidential with us</div>),
    type: 'age',
    questionOptions: ['Under 14', '15-18', '19-25', '26-35', '36-50', '50+'],
  },
  {
    title: 'Enter Your Email',
    label: 'Email',
    type: 'input', // Type of step
  },
  // ... Add more steps with different types as needed
];

export default function Quiz() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const [prevActiveStep, setPrevActiveStep] = useState(-1);
  const maxSteps = steps.length;

  const [filledSteps, setFilledSteps] = useState(new Array(maxSteps).fill(false));

  const [selectedImage, setSelectedImage] = useState(null);

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
    if (
      filledSteps[activeStep] ||
      (activeStep === 1 && selectedImage !== null) ||
      (activeStep === 2 && selectedImage !== null) ||
      (activeStep === 3 && selectedImage !== null) ||
      (activeStep === 4 && filledSteps[4]) || // Add this line
      (activeStep === 5 && selectedImage !== null) ||
      (activeStep === 6 && selectedImage !== null)
    ) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);

    const newFilledSteps = new Array(maxSteps).fill(false);
    setFilledSteps(newFilledSteps);
  };

  const handleInputChange = (stepIndex, value) => {
    const newFilledSteps = [...filledSteps];
    newFilledSteps[stepIndex] = !!value.trim();
    setFilledSteps(newFilledSteps);
  };

  const handleImageSelect = (option) => {
    setSelectedImage(option);
    const newFilledSteps = [...filledSteps];
    newFilledSteps[activeStep] = true; // Mark the current step as filled
    setFilledSteps(newFilledSteps);
    
    handleNext(); // Automatically move to the next step
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
          />
        );
      case 'images':
      case 'skinTone':
      case 'skinType':
        return (
          <div className='flex flex-col items-center mx-auto'>
            <div className='flex justify-between w-full'>
              {step.images.map((image, index) => (
                <div key={index} className={`flex flex-col items-center w-48 ${selectedImage === image ? 'border-4 border-blue-500' : ''}`}>
                  <img
                    className='w-full'
                    src={image}
                    alt=""
                    onClick={() => handleImageSelect(image)}
                  />
                  <p className='mt-2 text-center'>{step.type === 'skinTone' ? skinToneLabels[index] : (step.type === 'skinType' ? skinTypeLabels[index] : '')}</p>
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


  return (
    <AppLayout>
      <div className='h-screen mt-16 w-1/2 mx-auto'>
        <Box sx={{ flexGrow: 1 }}>
          <h3 className='text-2xl font-semibold text-center mb-8'>{steps[activeStep].title}</h3>

          <Box sx={{ height: 'auto', marginBottom: '60px', width: '100%', p: 2 }}>
            {renderStepContent(steps[activeStep])}
          </Box>
          <MobileStepper
            sx={{ width: '70%', mx: 'auto' }}
            variant="text"
            steps={maxSteps}
            position="static"
            activeStep={activeStep}
            nextButton={
              steps[activeStep].type === 'input' && ( // Render the Next button only for 'input' type steps
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
              )
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
        </Box>
      </div>
    </AppLayout>
  );
}
