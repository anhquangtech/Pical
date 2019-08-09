import * as uiTypes from "../constants/ui";

export const showLoading = () => {
  return {
    type: uiTypes.SHOW_GLOBAL_LOADING
  };
};
export const hideLoading = () => {
  return {
    type: uiTypes.HIDE_GLOBAL_LOADING
  };
};
