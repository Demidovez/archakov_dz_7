import { actionTypes } from "./actions";

const initialState = {
  firstName: "",
  lastName: "",
  city: "",
  country: "",
  phone: "",
  deliveryMethod: "",
  paymentMethod: "",
  deliveryMethodsList: [],
  paymentMethodsList: [],
  allSteps: [],
  currentStepIndex: 0,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_CONTACT_INFO:
      return {
        ...state,
        [action.payload.field]: action.payload.value,
      };
    case actionTypes.SET_DELIVERY_METHODS:
      return {
        ...state,
        deliveryMethod: action.payload,
      };
    case actionTypes.SET_PAYMENT_METHODS:
      return {
        ...state,
        paymentMethod: action.payload,
      };
    case actionTypes.SET_ALL_DELIVERY_METHODS:
      return {
        ...state,
        deliveryMethodsList: action.payload,
      };
    case actionTypes.SET_ALL_PAYMENT_METHODS:
      return {
        ...state,
        paymentMethodsList: action.payload,
      };
    case actionTypes.SET_ALL_STEPS:
      return {
        ...state,
        allSteps: action.payload,
      };
    case actionTypes.SET_CURRENT_STEP:
      return {
        ...state,
        currentStepIndex: action.payload,
      };
    default:
      return state;
  }
};
