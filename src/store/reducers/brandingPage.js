import { INTERIOR_DESIGN_1, INTERIOR_DESIGN_2 } from "../../data/interior_data"
const initialState = INTERIOR_DESIGN_1

const reducer =(state = initialState, action)=>{
    switch(action.type){
        case "GET_BRANDING":
            return state;
        default:
            return state;
    }
}
export default reducer;