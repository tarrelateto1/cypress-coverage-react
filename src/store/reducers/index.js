import {OPERATOR} from "../definitions/operator";

const initialState = {
    result:0
}
export const reducer = (state=initialState,action)=>{
    switch(action.type){
        case OPERATOR.add:
            state={
                result:state.result+=action.result
            }
            break;
        case OPERATOR.subtract:
            OPERATOR.subtract={
                result:state.result+=action.result
            }
            break;
        default:
    }
    return state;
}