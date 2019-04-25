
const filtersReducerDefaultState = {
  text: "",
  sortBy: "rating",
  sports: [],
  surfaces: [],
  rating: undefined,
  date: undefined,
  price: {
    minimum: 0,
    maximum: 0
  },
  isDimmed: false
};
const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case "SET_TEXT_FILTER":
      return {
        ...state,
        text: action.text
      };
    case "SORT_BY_AMOUNT":
      return {
        ...state,
        sortBy: action.sortBy
      };
    case "SORT_BY_DATE":
      return {
        ...state,
        sortBy: action.sortBy
      };
    case "SET_DATE":
      return {
        ...state,
        startDate: action.date
      };
    case "ADD_SPORT_FILTER":
      return {
        ...state,
        sports: action.sports
      };
    case "REMOVE_SPORT_FILTER":
      return {
        ...state,
        sports: action.sports
      };
    case "SET_RATING":
      return {
        ...state,
        rating: action.rating
      };
    case "ADD_SURFACE_FILTER":
      return {
        ...state,
        surfaces: action.surfaces
      };
    case "REMOVE_SURFACE_FILTER":
      return {
        ...state,
        surfaces: action.surfaces
      };
    case "SET_MINIMUM_PRICE":
      return {
        ...state,
        price: {
          ...state.price,
          minimum: action.price
        }
      };
    case "SET_MAXIMUM_PRICE":
      return {
        ...state,
        price: {
          ...state.price,
          maximum: action.price
        }
      };
    case "SET_DIMMER":
      return {
        ...state,
        isDimmed: !state.isDimmed
      }
    default:
      return state;
  }
};

export default filtersReducer;
