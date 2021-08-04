import axios from 'axios';

export const GET_LISTS = "GET_LISTS";
export const POST_LIST_CREATE = "POST_LIST_CREATE";
export const GET_LIST_DETAIL = "GET_LIST_DETAIL";
export const PUT_LIST_EDIT = "PUT_LIST_EDIT";

export const getLists = () => {
   return (dispatch) => {
    axios.get("https://virtserver.swaggerhub.com/hanabyan/todo/1.0.0/to-do-list")
    .then(function (response) {
      dispatch({
          type: GET_LISTS,
          payload: {
            data: response.data,
            errorMessage: false,
          }
      })
    })
    .catch(function (error) {
        dispatch({
            type: GET_LISTS,
            payload: {
              data: false,
              errorMessage: error.message,
            }
        })
    })
   };
};

export const getDetailList = (id) => {
  return (dispatch) => {
   axios.get("https://virtserver.swaggerhub.com/hanabyan/todo/1.0.0/to-do-list/"+id)
   .then(function (response) {
     dispatch({
         type: GET_LIST_DETAIL,
         payload: {
           data: response.data,
           errorMessage: false,
         }
     })
   })
   .catch(function (error) {
       dispatch({
           type: GET_LIST_DETAIL,
           payload: {
             data: false,
             errorMessage: error.message,
           }
       })
   })
  };
};

export const postListCreate = (data) => {
  return (dispatch) => {
    axios
      .post(
        "https://virtserver.swaggerhub.com/hanabyan/todo/1.0.0/to-do-list",
        data
      )
      .then(function (response) {
        console.log(response);
        
        dispatch({
          type: POST_LIST_CREATE,
          payload: {
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch(function (error) {
        dispatch({
          type: POST_LIST_CREATE,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const putListEdit = (data, id) => {
  return (dispatch) => {
    axios
      .put(
        "https://virtserver.swaggerhub.com/hanabyan/todo/1.0.0/to-do-list/"+id,
        data
      )
      .then(function (response) {
        console.log(response);
        
        dispatch({
          type: PUT_LIST_EDIT,
          payload: {
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch(function (error) {
        dispatch({
          type: PUT_LIST_EDIT,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const deleteList = ( id) => {
  return (dispatch) => {
    axios
      .delete(
        "https://virtserver.swaggerhub.com/hanabyan/todo/1.0.0/to-do-list/"+id
      )
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};

export const deleteDataList = () => {
  return (dispatch) => {
    dispatch({
      type: GET_LIST_DETAIL,
      payload: {
        data: false,
        errorMessage: false,
      },
  });

  dispatch({
    type: POST_LIST_CREATE,
    payload: {
      data: false,
      errorMessage: false,
    },
});
}
}