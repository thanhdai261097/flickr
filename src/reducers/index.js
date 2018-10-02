import { combineReducers } from "redux"
import flickr from "./flickrReducer"
import toggle from "./toggleReducer"

const thereducer = combineReducers({
  flickr,
  toggle
});

export default thereducer;