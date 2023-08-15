import axios from "axios";

export const GET_VIDEOGAMES = "GET_VIDEOGAMES";
export const GET_BY_NAME = "GET_BY_NAME";
// export const GET_ALL_GENRES = "GET_ALL_GENRES"
export const FILTER_BY_NAME = "FILTER_BY_NAME";
export const SORT_BY_RATING = "SORT_BY_RATING";
export const CREATE_VIDEOGAME = "CREATE_VIDEOGAME"

export function getVideogames() {
    return async function (dispatch) {
        const response = await axios("http://localhost:3001/videogames")
        return dispatch({
            type:"GET_VIDEOGAMES",
            payload:response.data
        })
    }
}
export function getByName(name) {
    return async function (dispatch) {
        const response = await axios(`http://localhost:3001/videogames/search?name=${name}`)
        return dispatch({
            type:"GET_BY_NAME",
            payload:response.data
        })
    }
}
// export const getAllGenres = () => {
//   return async (dispatch) => {
//           const response = await axios("http://localhost:3001/genres")
//           return dispatch({
//               type: "GET_ALL_GENRES",
//               payload: response.data
//           })     
//       }
// }


export const filterByName = (payload) => {
    return {
        type: "FILTER_BY_NAME",
        payload,
    };
};
export const sortByRating = (order) => {
  return {
      type: "SORT_BY_RATING",
      payload: order,
  };
};




export const createVideogame = (formData) => {
    return async function (dispatch) {
        const response = await axios.post('http://localhost:3001/videogames', formData); // Cambia la URL según tu endpoint
        // Aquí podrías manejar el resultado o mostrar un mensaje de éxito si lo deseas
        dispatch({
          type: CREATE_VIDEOGAME,
          payload: response.data,
        });
    };
  };

  
  





















