import React from "react";
import * as Redux from "react-redux";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import RadioCard from "../components/RadioCard";
import { Actions } from "../redux";

function DeliveryMethods({ title }) {
  const dispatch = Redux.useDispatch();

  const allMethods = Redux.useSelector((state) => state.deliveryMethodsList);
  const currentMethod = Redux.useSelector(
    ({ orderInfo }) => orderInfo.deliveryMethod
  );

  React.useEffect(() => dispatch(Actions.setValidStep(title, !!currentMethod)));

  const onSelectMethod = (name, forwarding) =>
    dispatch(Actions.setDeliveryMethod(name, forwarding));

  return (
    <div>
      <Typography variant="h3">Способ доставки</Typography>
      <Grid container spacing={3}>
        {allMethods.map((method) => (
          <Grid item xs={6} key={method.image}>
            <RadioCard
              value={method.name}
              image={method.image}
              onSelect={onSelectMethod}
              desc={`Отправка: ${method.forwarding}`}
              checked={currentMethod === method.name}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default DeliveryMethods;
