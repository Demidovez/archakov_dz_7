import axios from "axios";

export const actionTypes = {
  SET_CONTACT_INFO: "SET_CONTACT",
  SET_DELIVERY_METHOD: "SET_DELIVERY_METHOD",
  SET_PAYMENT_METHOD: "SET_PAYMENT_METHOD",
  SET_ALL_DELIVERY_METHODS: "SET_ALL_DELIVERY_METHODS",
  SET_ALL_PAYMENT_METHODS: "SET_ALL_PAYMENT_METHODS",
  SET_ALL_STEPS: "SET_ALL_STEPS",
  SET_IS_VALID_STEP: "SET_IS_VALID_STEP",
  SET_CURRENT_STEP: "SET_CURRENT_STEP",
  SET_IS_SEND_ORDER: "SET_IS_SEND_ORDER",
  SET_IS_SENDING_ORDER: "SET_IS_SENDING_ORDER",
  SET_RESET_STEPS: "SET_RESET_STEPS",
};

export const setContactInfo = (field, value) => ({
  type: actionTypes.SET_CONTACT_INFO,
  payload: { field, value },
});

export const setDeliveryMethod = (name, forwarding) => ({
  type: actionTypes.SET_DELIVERY_METHOD,
  payload: { name, forwarding },
});

export const setPaymentMethod = (name) => ({
  type: actionTypes.SET_PAYMENT_METHOD,
  payload: name,
});

export const setAllDeliveryMethods = (methods) => ({
  type: actionTypes.SET_ALL_DELIVERY_METHODS,
  payload: methods,
});

export const setAllPaymentMethods = (methods) => ({
  type: actionTypes.SET_ALL_PAYMENT_METHODS,
  payload: methods,
});

export const setAllSteps = (steps) => ({
  type: actionTypes.SET_ALL_STEPS,
  payload: steps,
});

export const setCurrentStep = (index) => ({
  type: actionTypes.SET_CURRENT_STEP,
  payload: index,
});

export const setIsSendOrder = (isSended) => ({
  type: actionTypes.SET_IS_SEND_ORDER,
  payload: isSended,
});

export const setIsSendingOrder = (isSending) => ({
  type: actionTypes.SET_IS_SENDING_ORDER,
  payload: isSending,
});

export const setValidStep = (title, isValid) => ({
  type: actionTypes.SET_IS_VALID_STEP,
  payload: { title, isValid },
});

export const setResetSteps = () => ({
  type: actionTypes.SET_RESET_STEPS,
  payload: {},
});

export const sendOrder = (orderInfo, currentStepIndex) => (dispatch) => {
  dispatch(setIsSendingOrder(true));

  axios
    .post("https://5c3755177820ff0014d92711.mockapi.io/orders", orderInfo)
    .then(({ status }) =>
      dispatch(setIsSendOrder(status >= 200 && status < 300))
    )
    .catch(() => dispatch(setIsSendOrder(false)))
    .finally(() => {
      dispatch(setCurrentStep(currentStepIndex + 1));
      dispatch(setIsSendingOrder(false));
    });
};
