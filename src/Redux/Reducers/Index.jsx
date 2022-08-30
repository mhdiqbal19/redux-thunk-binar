import dataReducer from "./dataReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    dataUser: dataReducer,
})

export default rootReducer;