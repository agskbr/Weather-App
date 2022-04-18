import { NOT_FOUND_CITY, SEARCH_CITY_BY_NAME } from "../actions-type/types";

const initialState = {
  city: {},
  cityNotFound: false,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_CITY_BY_NAME:
      return {
        ...state,
        city: action.payload,
      };
    case NOT_FOUND_CITY:
      return {
        ...state,
        cityNotFound: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export { rootReducer };
