import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import { Container, Typography } from "@mui/material";
import CustomerInfo from "./CustomerInfo";
import BankCardInfo from "./BankCardInfo";
import AddressInfo from "./AddressInfo";

const steps = ['Customer Info', 'Bank Card', 'Address'];
const stepComponents = [ <CustomerInfo />, <BankCardInfo />, <AddressInfo /> ];

const Order = () => {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  // TODO: form validation

  return (
    <Container>
        <Typography variant="h2" component="h1" marginTop="40px" marginBottom="40px">Order</Typography>
      <Stepper activeStep={activeStep}>
        {steps.map(label => {
          const stepProps: { completed?: boolean } = {};
          const labelProps: {
            optional?: React.ReactNode;
          } = {};
          return (
            <Step sx={{
                '& .MuiStepLabel-root .Mui-completed': {
                  color: 'secondary.dark',
                },
                '& .MuiStepLabel-root .Mui-active': {
                    color: 'secondary.dark',
                },
            }}
                key={label}
                {...stepProps}
            >
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <Box display="flex" flexDirection="column" marginY="40px" marginX="10px">
          <Typography fontWeight="bold" variant="h3" component="h2" marginBottom="40px" textAlign="center">Thank you for your order!</Typography>
          <Button variant="contained" color="secondary" href='/' sx={{ margin: 'auto' }} size="large">Return to the store</Button>
        </Box>
      ) : (
        <>
          {
            stepComponents[activeStep]
          }

          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
                <Button type="submit" onClick={handleNext} color="secondary" variant="contained">
                    {activeStep === steps.length - 1 ? 'Confirm Order' : 'Next Step'}
                </Button>
          </Box>
        </>
      )}
    </Container>
  );
}

export default Order;