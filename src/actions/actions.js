
import store from "../store/store";

function getstate(){
    return store.getState().UI.FLIPSTATE;
}

export function openall(SET){
    let STATE= getstate();

    console.log(STATE);

    if(SET === true){
        //console.log(SET , STATE);
        STATE = !STATE;
        
        store.dispatch({ type:"FLIP_STATE", payload:STATE });
    }
    
    
    store.dispatch({ type:"SET_FLIP", payload:SET });
    
}