import axios from "axios";
import { NOT_FOUND_CITY, SEARCH_CITY_BY_NAME } from "../actions-type/types";

const base_url = "http://api.openweathermap.org/data/2.5/weather";

const searchCityByName = (name) => {
  return async (dispatch) => {
    try {
      dispatch({ type: NOT_FOUND_CITY, payload: false });
      const { data } = await axios.get(
        `${base_url}?q=${name}&appId=${import.meta.env.VITE_APP_API_KEY}`
      );
      dispatch({ type: SEARCH_CITY_BY_NAME, payload: data });
    } catch (error) {
      dispatch({ type: NOT_FOUND_CITY, payload: true });
    }
  };
};

export { searchCityByName };
