const initialArray = {flickr: [], fetching: false, fetched: false, error: null}

function flickr(state=initialArray, action) {
    switch (action.type) {
      case "FETCH_FLICKR": {
        return {...state, fetching: true}
      }
      case "FETCH_FLICKR_REJECTED": {
        return {...state, fetching: false, error: action.payload}
      }
      case "FETCH_FLICKR_FULFILLED": {
        return {
          ...state,
          fetching: false,
          fetched: true,
          flickr: action.payload,
        }
      }
      
      case "GET_FLICKR": {
        return {
          ...state,
          fetching: false,
          fetched: true,
          flickr: action.payload,
        }
      }
      
      case "DELETE_FLICKR": {
        return {
          flickr: [
              ...state.flickr.slice(0, action.payload),
              ...state.flickr.slice(action.payload + 1)
          ],
        }
      }
    }

    return state
}
export default flickr;
