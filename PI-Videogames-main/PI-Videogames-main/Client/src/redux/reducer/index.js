import {
  GET_VIDEOGAMES,
  GET_BY_NAME,
  // GET_ALL_GENRES,
  FILTER_BY_NAME,
  SORT_BY_RATING,
  CREATE_VIDEOGAME,
    
} from "../action/action";

let initialState = {
  allVideogames: [],
  videogamesCopy: [],

};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    
    case GET_VIDEOGAMES:
      return {
        ...state,
        allVideogames: action.payload,
        videogamesCopy: action.payload
      
      };
    case GET_BY_NAME:
      return {
        ...state,
        allVideogames: action.payload
      }
      case CREATE_VIDEOGAME:
        return {
          ...state,
          allVideogames: [...state.allVideogames, action.payload], // Agrega el nuevo videojuego al estado
        };

      

   

            
      case FILTER_BY_NAME:
      const sortedVideogames = action.payload === "Asc"
        ? state.allVideogames.slice().sort(function(a, b) {
            if (a.name > b.name) {
              return 1;
            }
            if (b.name > a.name) {
              return -1;
            }
            return 0;
         
          })
        : state.allVideogames.slice().sort(function(a, b) {
            if (a.name > b.name) {
              return -1;
            }
            if (b.name > a.name) {
              return 1;
            }
            return 0;
          });

          return {
        ...state,
        allVideogames: sortedVideogames
      };
   
      case SORT_BY_RATING:
      const sortedByRating = state.allVideogames.slice().sort((a, b) => {
        if (action.payload === "RatingAsc") {
          return a.rating - b.rating;
        } else if (action.payload === "RatingDesc") {
          return b.rating - a.rating;
        }
        return 0;
      });
      return {
        ...state,
        allVideogames: sortedByRating,
        sortBy: action.payload
      };

         

    default:
      return state;
  }
}

export default rootReducer;
