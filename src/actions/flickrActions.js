import axios from "axios";

export const fetchFlickr = (tags) => {
  return function(dispatch, getState) {
    axios.get('https://api.flickr.com/services/feeds/photos_public.gne?tags=' + tags + '&format=json&nojsoncallback=true')
      .then((response) => {
        dispatch({type: "FETCH_FLICKR_FULFILLED", payload: response.data.items})
      })
      .catch((err) => {
        dispatch({type: "FETCH_FLICKR_REJECTED", payload: err})
      })
  }
}

export const deleteFlickr = (id) => {
  return { type: 'DELETE_FLICKR', payload: id}
}

export const getFlickr = (id) => {
  return { type: 'GET_FLICKR', payload: id}
}
