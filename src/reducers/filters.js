
const filtersReducerDefaultState = {
  text: "",
  sortBy: "rating",
  sports: [],
  surfaces: [],
  ratings: [],
  date: undefined,
  price: {
    minimum: 0,
    maximum: undefined
  }
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
    case "ADD_RATING_FILTER":
      return {
        ...state,
        ratings: action.ratings
      };
    case "REMOVE_RATING_FILTER":
      return {
        ...state,
        ratings: action.ratings
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
        price: action.price
      };
    case "SET_MAXIMUM_PRICE":
      return {
        ...state,
        price: action.price
      };

    default:
      return state;
  }
};

export default filtersReducer;
