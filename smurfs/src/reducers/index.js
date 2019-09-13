/*
  Be sure to import in all of the action types from `../actions`
*/

import {
    FETCH_SMURFS_START,
    FETCH_SMURFS_SUCCESS,
    ADD_SMURF_START,
    ADD_SMURF_SUCCESSFUL,
    DELETE_SMURF_START,
    DELETE_SMURF_SUCCESSFUL
}
    from '../actions';

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: false
   error: null
 }
*/

const initialState = {
    smurfs: [],
    fetchingSmurfs: false,
    error: "",
    addingSmurf: false,
    deletingSmurf: false
}

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

function reducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_SMURFS_START:
            return {
                ...state,
                error: '',
                fetchingSmurfs: true
            }
        case FETCH_SMURFS_SUCCESS:
            return {
                ...state,
                error: '',
                fetchingSmurfs: false,
                smurfs: action.payload
            }
        case ADD_SMURF_START:
            return {
                ...state,
                addingSmurf: true,
                error: ''
            }
        case ADD_SMURF_SUCCESSFUL:
            return {
                ...state,
                addingSmurf: false,
                error: '',
                smurfs: action.payload
            }
        case DELETE_SMURF_START:
            return {
                ...state,
                deletingSmurf: true,
                error: ''
            }
        case DELETE_SMURF_SUCCESSFUL:
            return {
                ...state,
                deletingSmurf: false,
                smurfs: state.smurfs.filter(smurf => {
                    return smurf.id !== action.payload
                })
            }
        default:
            return state;
    }
}

export default reducer;