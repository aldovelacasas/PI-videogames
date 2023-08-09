import { GET_VIDEOGAMES, GET_BY_NAME } from "../action/action"


 let initialState ={
    allVideogames: [],
    videogamesCopy:[]
 }
 function rootReducer(state = initialState,action){
    
    switch(action.type){
        case GET_VIDEOGAMES:
            return{
                ...state,
                allVideogames: action.payload, 
                videogamesCopy: action.payload
            }
        case GET_BY_NAME:
            return{
                ...state,
                allVideogames: action.payload,
                
            }   




        default:
            return state
    }
 } 
 export default rootReducer;