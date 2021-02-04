import React from "react";
import * as Redux from "react-redux";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";

function StepStatusBar() {
  const steps = Redux.useSelector((state) => state.allSteps);
  const currentStepIndex = Redux.useSelector((state) => state.currentStepIndex);

  return (
    <Stepper activeStep={currentStepIndex} alternativeLabel>
      {steps.map((step) => (
        <Step key={step.title}>
          <StepLabel>{step.title}</StepLabel>
        </Step>
      ))}
    </Stepper>
  );
}

export default StepStatusBar;
