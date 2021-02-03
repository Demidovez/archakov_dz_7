export const actionTypes = {
  SET_CONTACT_INFO: "SET_CONTACT",
  SET_DELIVERY_METHODS: "SET_DELIVERY_METHODS",
  SET_PAYMENT_METHODS: "SET_PAYMENT_METHODS",
  SET_ALL_DELIVERY_METHODS: "SET_ALL_DELIVERY_METHODS",
  SET_ALL_PAYMENT_METHODS: "SET_ALL_PAYMENT_METHODS",
  SET_ALL_STEPS: "SET_ALL_STEPS",
  SET_CURRENT_STEP: "SET_CURRENT_STEP",
};

export const setContactInfo = (payload) => ({
  type: actionTypes.SET_CONTACT_INFO,
  payload,
});

export const setDeliveryMethods = (payload) => ({
  type: actionTypes.SET_DELIVERY_METHODS,
  payload,
});

export const setPaymentMethods = (payload) => ({
  type: actionTypes.SET_PAYMENT_METHODS,
  payload,
});

export const setAllDeliveryMethods = (payload) => ({
  type: actionTypes.SET_ALL_DELIVERY_METHODS,
  payload,
});

export const setAllPaymentMethods = (payload) => ({
  type: actionTypes.SET_ALL_PAYMENT_METHODS,
  payload,
});

export const setAllSteps = (payload) => ({
  type: actionTypes.SET_ALL_STEPS,
  payload,
});

export const setCurrentStep = (payload) => ({
  type: actionTypes.SET_CURRENT_STEP,
  payload,
});
