import { INTERIOR_DESIGN_1, INTERIOR_DESIGN_2 } from "../../data/interior_data"
const initialState1 =INTERIOR_DESIGN_1;
const initialState2 = INTERIOR_DESIGN_2;
const initialState3 = INTERIOR_DESIGN_1;

const reducer =(state = initialState1, action)=>{
    switch(action.type){
        case "GET_INTERIOR":
            switch(action.id){
                case "1":
                    state = initialState1;
                    break;
                case "2":
                    state = initialState2;
                    break;
                case "3":
                    state = initialState3;
                    break;
                default:
                    break;
            }
            return state;
        default:
            return state;
    }
}
export default reducer;