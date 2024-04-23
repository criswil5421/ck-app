import * as React from 'react';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import imagen1 from './img/imagen1.jpg'
import imagen2 from './img/imagen2.jpg'
import imagen3 from './img/imagen3.jpg'
import imagen4 from './img/imagen4.jpg'
import imagen5 from './img/imagen5.jpg'
import imagen6 from './img/imagen6.jpg'
import imagen7 from './img/imagen7.jpg'
import imagen8 from './img/imagen8.jpg'
import imagen9 from './img/imagen9.jpg'

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    imgPath:
        imagen1,
  },
  {
    imgPath:
        imagen2,
  },
  {
    imgPath:
        imagen3,
  },
  {
    imgPath:
        imagen4,
  },
  {
    imgPath:
        imagen5,
  },
  {
    imgPath:
        imagen6,
  },
  {
    imgPath:
        imagen7,
  },
  {
    imgPath:
        imagen8,
  },
  {
    imgPath:
        imagen9,
  },
];

const Carrusel = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ maxWidth: 600 }} >
      <AutoPlaySwipeableViews
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
            Math.abs(activeStep - index) <= 2 ? (
              <Box
                key={step.label}
                component="img"
                sx={{
                  height: 550,
                  maxWidth: 600,
                  objectFit: 'cover',
                  display: 'flex',
                  alignItems: 'center',
                  margin: 'auto'
                }}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Adelante
              <KeyboardArrowRight />
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
              <KeyboardArrowLeft />
            Atras
          </Button>
        }
      />
    </Box>
  );

}
export default Carrusel;