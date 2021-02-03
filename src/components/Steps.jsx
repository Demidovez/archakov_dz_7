import React from "react";
import * as Redux from "react-redux";
import Button from "@material-ui/core/Button";
import { Actions } from "../redux";

function Steps({ children }) {
  const dispatch = Redux.useDispatch();
  const steps = Redux.useSelector((state) => state.allSteps);
  const currentStepIndex = Redux.useSelector((state) => state.currentStepIndex);

  React.useEffect(
    () => dispatch(Actions.setAllSteps(React.Children.map(children, ({ props }) => props.title))),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  const onNextStep = () => {
    dispatch(Actions.setCurrentStep(currentStepIndex + 1));
  };

  const onPrevStep = () => {
    dispatch(Actions.setCurrentStep(currentStepIndex - 1));
  };

  return (
    <div>
      {React.Children.toArray(children).find((_, index) => index === currentStepIndex)}
      <div className="wrapper-control-steps">
        {currentStepIndex !== 0 && (
          <Button onClick={onPrevStep} variant="contained">
            Назад
          </Button>
        )}
        <Button
          fullWidth
          variant="contained"
          color={currentStepIndex === steps.length - 1 ? "primary" : "secondary"}
          onClick={onNextStep}>
          {currentStepIndex === steps.length - 1 ? "Оплатить" : "Далее"}
        </Button>
      </div>
    </div>
  );
}

export default Steps;
