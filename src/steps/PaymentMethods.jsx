import * as Redux from "react-redux";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import RadioCard from "../components/RadioCard";
import { Actions } from "../redux";

function PaymentMethods() {
  const allMethods = Redux.useSelector((state) => state.paymentMethodsList);
  const currentMethod = Redux.useSelector(
    ({ orderInfo }) => orderInfo.paymentMethod
  );
  const dispatch = Redux.useDispatch();

  const onSelectMethod = (name) => dispatch(Actions.setPaymentMethod(name));

  return (
    <div>
      <Typography variant="h3">Способ оплаты</Typography>
      <Grid container spacing={3}>
        {allMethods.map((method) => (
          <Grid item xs={6} key={method.image}>
            <RadioCard
              value={method.name}
              image={method.image}
              onSelect={onSelectMethod}
              checked={currentMethod === method.name}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default PaymentMethods;
