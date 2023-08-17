import {
  GET_VIDEOGAMES,
  GET_BY_NAME,
  GET_GENRES,
  FILTER_BY_NAME,
  SORT_BY_RATING,
  CREATE_VIDEOGAME,
  // FILTER_BY_ORIGIN,
  // FILTER_BY_GENRES
    
} from "../action/action";

let initialState = {
  allVideogames: [],
  videogamesCopy: [],
  // genres:[],

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

        case GET_GENRES:
      const genreNames = action.payload.map((genre) => genre.name);
      return {
        ...state,
        genres: genreNames,
      };
    
        // case FILTER_BY_ORIGIN:
        //   return {
        //     ...state,
        //     allVideogames: action.payload,
        //   };


            
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

      // case FILTER_BY_GENRES:
      //   const allVideogamesCopy = state.videogamesCopy;
      //   const tempVideogames = allVideogamesCopy.filter((videogame) => {
      //     if (videogame.genres) {
      //       const genres = videogame.genres.map((genre) => genre.name);
      //       return genres.includes(action.payload.toLowerCase());
      //     }
      //     return null;
      //   });
      
      //   return {
      //     ...state,
      //     allVideogames: action.payload === "all" ? allVideogamesCopy : tempVideogames,
      //   };
      
         
         

    default:
      return state;
  }
}

export default rootReducer;









