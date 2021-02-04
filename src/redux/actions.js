export const actionTypes = {
  SET_CONTACT_INFO: "SET_CONTACT",
  SET_DELIVERY_METHOD: "SET_DELIVERY_METHOD",
  SET_PAYMENT_METHOD: "SET_PAYMENT_METHOD",
  SET_ALL_DELIVERY_METHODS: "SET_ALL_DELIVERY_METHODS",
  SET_ALL_PAYMENT_METHODS: "SET_ALL_PAYMENT_METHODS",
  SET_ALL_STEPS: "SET_ALL_STEPS",
  SET_CURRENT_STEP: "SET_CURRENT_STEP",
  SET_IS_SEND_ORDER: "SET_IS_SEND_ORDER",
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

export const setIsSendOrder = (isSend) => ({
  type: actionTypes.SET_IS_SEND_ORDER,
  payload: isSend,
});
