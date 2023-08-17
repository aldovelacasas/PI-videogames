import axios from "axios";

export const GET_VIDEOGAMES = "GET_VIDEOGAMES";
export const GET_BY_NAME = "GET_BY_NAME";
export const GET_GENRES = "GET_ALL_GENRES";
export const FILTER_BY_NAME = "FILTER_BY_NAME";
export const SORT_BY_RATING = "SORT_BY_RATING";
export const CREATE_VIDEOGAME = "CREATE_VIDEOGAME"
// export const FILTER_BY_GENRES = "FILTER_BY_GENRES"

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
export const getGenres = () => {
  return async function (dispatch)  {
          const response = await axios("http://localhost:3001/genres")
              return dispatch({
              type: "GET_GENRES",
              payload: response.data
            })     
        }
    }


    export function filterByOrigin(origin) {
        return async function (dispatch) {
          
            const response = await axios.get(`http://localhost:3001/videogames?origin=${origin}`);
             return dispatch({
              type: "FILTER_BY_ORIGIN",
              payload: response.data,
      
             })
           }
        }

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

export const filterByGenres = (payload) => {
	return {
		type: "FILTER_BY_GENRES",
		payload,
	};
};

export const createVideogame = (formData) => {
    return async function (dispatch) {
      try {
        const response = await axios.post('http://localhost:3001/videogames', formData);
        dispatch({
          type: "CREATE_VIDEOGAME",
          payload: response.data,
        });
  
        // Mostrar el mensaje de éxito
        alert("¡El videojuego se ha creado con éxito!");
  
      } catch (error) {
        // Manejar el error si la creación falla
        console.error("Error al crear el videojuego:", error);
      }
    };
  };





  
  





















