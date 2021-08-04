import {
  GET_LISTS,
  POST_LIST_CREATE,
  GET_LIST_DETAIL,
  PUT_LIST_EDIT,
} from "../actions/listAction";

let initialState = {
  getLists: false,
  errorLists: false,
  getDetailList: false,
  errorDetailList: false,
  getResponDataList: false,
  errorDataList: false,
};

const lists = (state = initialState, action) => {
  switch (action.type) {
    case GET_LISTS:
      return {
        ...state,
        getLists: action.payload.data,
        errorLists: action.payload.errorMessage,
      };

    case GET_LIST_DETAIL:
      return {
        ...state,
        getDetailList: action.payload.data,
        errorDetailList: action.payload.errorMessage,
      };

    case POST_LIST_CREATE:
      return {
        ...state,
        getResponDataList: action.payload.data,
        errorDataList: action.payload.errorMessage,
      };

    case PUT_LIST_EDIT:
      return {
        ...state,
        getResponDataList: action.payload.data,
        errorDataList: action.payload.errorMessage,
      };

    default:
      return state;
  }
};

export default lists;
