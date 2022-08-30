export const couponReducer = (state = false, action) => {
  switch (action.type) {
    case "COUPON_APPLIED":
      return action.payload;
      case "TIP_APPLIED":
        return action.payload;
    default:
      return state;
  }
};
