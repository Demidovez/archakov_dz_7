import React from "react";
import * as Redux from "react-redux";
import Steps from "./components/Steps";
import StepStatusBar from "./components/StepStatusBar";
import { ContactInfo, DeliveryMethods, PaymentMethods, SummaryInfo } from "./steps";
import { Actions } from "./redux";
import deliveries from "./assets/deliveries.json";
import payments from "./assets/payments.json";

function App() {
  const dispatch = Redux.useDispatch();

  React.useEffect(() => {
    dispatch(Actions.setAllDeliveryMethods(deliveries));
    dispatch(Actions.setAllPaymentMethods(payments));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      <StepStatusBar />
      <Steps>
        <ContactInfo title="Основная информация" />
        <DeliveryMethods title="Способ доставки" />
        <PaymentMethods title="Способ оплаты" />
        <SummaryInfo title="Подтверждение" />
      </Steps>
    </div>
  );
}

export default App;
