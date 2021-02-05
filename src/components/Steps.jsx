import React from "react";
import * as Redux from "react-redux";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Actions } from "../redux";
import DoneOrder from "../steps/DoneOrder";

function Steps({ children }) {
  const dispatch = Redux.useDispatch();
  const {
    allSteps,
    currentStepIndex,
    orderInfo,
    isSendedOrder,
    isSendingOrder,
  } = Redux.useSelector((state) => state);

  // определяем список шагов для <StepStatusBar />
  React.useEffect(
    () => {
      const steps = React.Children.map(
        children,
        (child, index) => child.props.title || `Шаг ${index + 1}`
      );

      dispatch(Actions.setAllSteps(steps));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const onNextStep = () => {
    dispatch(Actions.setCurrentStep(currentStepIndex + 1));
  };

  const onPrevStep = () => {
    dispatch(Actions.setCurrentStep(currentStepIndex - 1));
  };

  const onOrder = () =>
    dispatch(Actions.sendOrder(orderInfo, currentStepIndex));

  // находим текущий шаг и отображаем его с кнопками внизу
  return currentStepIndex !== allSteps.length || !allSteps.length ? (
    <div>
      <div className="wrapper-step">
        {React.Children.toArray(children).find(
          (_, index) => index === currentStepIndex
        )}
      </div>
      <div className="wrapper-control-steps">
        {currentStepIndex !== 0 && (
          <Button onClick={onPrevStep} variant="contained" disableElevation>
            Назад
          </Button>
        )}
        {currentStepIndex === allSteps.length - 1 ? (
          <Button
            fullWidth
            disableElevation
            variant="contained"
            color="primary"
            onClick={onOrder}
          >
            {isSendingOrder && (
              <CircularProgress size={20} color="inherit" className="loader" />
            )}{" "}
            Оплатить
          </Button>
        ) : (
          <Button
            fullWidth
            disableElevation
            disabled={
              allSteps.length ? !allSteps[currentStepIndex].isValid : true
            }
            variant="contained"
            color="secondary"
            onClick={onNextStep}
          >
            Далее
          </Button>
        )}
      </div>
    </div>
  ) : (
    <DoneOrder isSuccess={isSendedOrder} />
  );
}

export default Steps;
