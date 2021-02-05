import Lottie from "react-lottie";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import * as Redux from "react-redux";
import { Actions } from "../redux";
import successOrderAnim from "../assets/successOrderAnim.json";
import errorOrderAnim from "../assets/errorOrderAnim.json";

function DoneOrder({ isSuccess }) {
  const dispatch = Redux.useDispatch();

  const animOptions = {
    loop: false,
    autoplay: true,
    animationData: isSuccess ? successOrderAnim : errorOrderAnim,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="done-order">
      <Lottie options={animOptions} height={400} width={400} />
      <Typography variant="h5">
        {isSuccess
          ? "Спасибо! Заказ оформлен!"
          : "К сожалению произошла ошибка..."}
      </Typography>
      <Button
        variant="contained"
        color={isSuccess ? "primary" : "secondary"}
        disableElevation
        onClick={() => dispatch(Actions.setResetSteps())}
      >
        {isSuccess ? "На главную" : "Попробовать еще раз"}
      </Button>
    </div>
  );
}

export default DoneOrder;
