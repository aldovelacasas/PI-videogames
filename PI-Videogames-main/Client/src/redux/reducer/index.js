import { GET_VIDEOGAMES, GET_BY_NAME, FILTER_BY_NAME } from "../action/action";

let initialState = {
  allVideogames: [],
  videogamesCopy: [],
  filter: []
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_VIDEOGAMES:
      return {
        ...state,
        allVideogames: action.payload,
        videogamesCopy: action.payload,
      };
    case GET_BY_NAME:
      return {
        ...state,
        allVideogames: action.payload,
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
        allVideogames: sortedVideogames,
      };
    default:
      return state;
  }
}

export default rootReducer;
