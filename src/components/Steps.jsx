import React from "react";
import * as Redux from "react-redux";
import Button from "@material-ui/core/Button";
import axios from "axios";
import { Actions } from "../redux";

function Steps({ children }) {
  const dispatch = Redux.useDispatch();
  const steps = Redux.useSelector((state) => state.allSteps);
  const currentStepIndex = Redux.useSelector((state) => state.currentStepIndex);
  const orderInfo = Redux.useSelector((state) => state.orderInfo);

  // определяем список шагов для <StepStatusBar />
  React.useEffect(
    () => {
      const steps = React.Children.map(
        children,
        (child, index) => child.props.title || `Шаг ${index + 1}`,
      );

      dispatch(Actions.setAllSteps(steps));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  const onNextStep = () => {
    dispatch(Actions.setCurrentStep(currentStepIndex + 1));
  };

  const onPrevStep = () => {
    dispatch(Actions.setCurrentStep(currentStepIndex - 1));
  };

  const onOrder = async () => {
    try {
      const result = await axios.post(
        "https://5c3755177820ff0014d92711.mockapi.io/orders",
        orderInfo,
      );

      dispatch(Actions.setIsSendOrder(result));
    } catch {
      dispatch(Actions.setIsSendOrder(false));
    }
  };

  // находим текущий шаг и отображаем его с кнопками внизу
  return (
    <div>
      <div className="wrapper-step">
        {React.Children.toArray(children).find((_, index) => index === currentStepIndex)}
      </div>
      <div className="wrapper-control-steps">
        {currentStepIndex !== 0 && (
          <Button onClick={onPrevStep} variant="contained" disableElevation>
            Назад
          </Button>
        )}
        {currentStepIndex === steps.length - 1 ? (
          <Button fullWidth disableElevation variant="contained" color="primary" onClick={onOrder}>
            Оплатить
          </Button>
        ) : (
          <Button
            fullWidth
            disableElevation
            disabled={steps.length ? !steps[currentStepIndex].isValid : true}
            variant="contained"
            color="secondary"
            onClick={onNextStep}>
            Далее
          </Button>
        )}
      </div>
    </div>
  );
}

export default Steps;
