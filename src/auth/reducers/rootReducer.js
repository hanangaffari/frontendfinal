import { combineReducers } from "redux";

//sesi
import { sessionReducer } from "redux-react-session";

const rootReducer = combineReducers({
    session:sessionReducer
});

export default rootReducer;