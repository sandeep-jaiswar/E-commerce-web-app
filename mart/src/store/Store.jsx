import {createStore} from "redux";
import Reducers from "../reducers";

export default ()=>{
    const store = createStore(Reducers);
    return store;
}
 