import React from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import { BsArrowRight, BsArrowLeft } from 'react-icons/bs';
import TextField from '@mui/material/TextField';
import AppLayout from "../../components/AppLayout/AppLayout"
import { Button } from '@material-tailwind/react';
import ImageSelector from './ImageSelector';
import IMAGES from '../../assets/images';

const imagesSet1 = [
  { path: IMAGES.SKIN_TONE_1, label: 'Image 1' },
  { path: IMAGES.SKIN_TONE_2, label: 'Image 2' },
  { path: IMAGES.SKIN_TONE_3, label: 'Image 3' },
  { path: IMAGES.SKIN_TONE_4, label: 'Image 4' },
  { path: IMAGES.SKIN_TONE_5, label: 'Image 5' },
  { path: IMAGES.SKIN_TONE_6, label: 'Image 6' },
];

const imagesSet2 = [
  { path: IMAGES.SKIN_TYPE_1, label: 'Image 1' },
  { path: IMAGES.SKIN_TYPE_2, label: 'Image 2' },
  { path: IMAGES.SKIN_TYPE_3, label: 'Image 3' },
  { path: IMAGES.SKIN_TYPE_4, label: 'Image 4' },
  { path: IMAGES.SKIN_TYPE_5, label: 'Image 5' },
];

const steps = [
  {
    label: 'First thing first, whose skin are we talking about?',
    content: (
      <div>
        <TextField label="Enter Your Name" variant="outlined" fullWidth  />
      </div>
    ),
  },
  {
    label: 'Enter Your Email',
    content: (
      <div>
        <TextField label="Email" variant="outlined" fullWidth />
      </div>
    ),
  },
  {
    label: 'Step 3: Answer MCQs',
    content: (
      <div>
        <p>Choose an image:</p>
        <ImageSelector images={imagesSet1} />
      </div>
    ),
  },
  {
    label: 'Step 3: Answer MCQs',
    content: (
      <div>
        <p>Choose an image:</p>
        <ImageSelector images={imagesSet2} />
      </div>
    ),
  },
  // ... remaining steps ...
];


export default function Quiz() {

  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = steps.length;

  const handleNext = () => {
    // Check if an image is selected before proceeding
    if (activeStep === 2) {
      return;
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <AppLayout>
      
      <div className='h-screen mt-16 w-1/2 mx-auto'>
        <Box sx={{ flexGrow: 1 }}>
        <h3 className='text-2xl font-semibold text-center mb-8'>{steps[activeStep].label}</h3>

          <Box sx={{ height: 'auto', marginBottom: '60px', width: '100%', p: 2 }}>
            {steps[activeStep].content}
          </Box>
          <MobileStepper sx={{ width: '70%', mx: 'auto' }}
            variant="text"
            steps={maxSteps}
            position="static"
            activeStep={activeStep}
            nextButton={
              <Button
                className='flex items-center gap-3 bg-[#e78956] hover:bg-[#74322c] focus:bg-[#74322c]'
                size="lg"
                onClick={handleNext}
                disabled={(activeStep === 2) || activeStep === maxSteps - 1}
              >
                Next
                {theme.direction === 'rtl' ? (
                  <BsArrowLeft className='text-xl' />
                ) : (
                  <BsArrowRight className='text-xl' />
                )}
              </Button>
            }
            backButton={
              <Button
                variant='text'
                color='pink'
                className='flex items-center gap-2 focus:shadow-0'
                size="lg" onClick={handleBack} disabled={activeStep === 0}>
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
