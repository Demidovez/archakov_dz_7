import { actionTypes } from "./actions";

const initialState = {
  orderInfo: {
    firstName: "",
    lastName: "",
    city: "",
    country: "",
    phone: "",
    deliveryMethod: "",
    paymentMethod: "",
  },
  deliveryForwarding: "",
  deliveryMethodsList: [],
  paymentMethodsList: [],
  allSteps: [],
  currentStepIndex: 0,
  isSendOrder: false,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_CONTACT_INFO:
      return {
        ...state,
        orderInfo: {
          ...state.orderInfo,
          [action.payload.field]: action.payload.value,
        },
      };
    case actionTypes.SET_DELIVERY_METHOD:
      return {
        ...state,
        orderInfo: {
          ...state.orderInfo,
          deliveryMethod: action.payload.name,
        },
        deliveryForwarding: action.payload.forwarding,
      };
    case actionTypes.SET_PAYMENT_METHOD:
      return {
        ...state,
        orderInfo: {
          ...state.orderInfo,
          paymentMethod: action.payload,
        },
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
        allSteps: action.payload.map((step) => ({ title: step, isValid: false })),
      };
    case actionTypes.SET_CURRENT_STEP:
      return {
        ...state,
        currentStepIndex: action.payload,
      };
    case actionTypes.SET_IS_SEND_ORDER:
      return {
        ...state,
        isSendOrder: action.payload,
      };
    case actionTypes.SET_IS_VALID_STEP:
      return {
        ...state,
        allSteps: state.allSteps.map((step) =>
          step.title === action.payload.title ? { ...step, isValid: action.payload.isValid } : step,
        ),
      };
    default:
      return state;
  }
};
