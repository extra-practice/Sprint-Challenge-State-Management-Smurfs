import axios from 'axios';

/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

export const FETCH_SMURFS_START = 'FETCH_SMURFS_START';
export const FETCH_SMURFS_SUCCESS = 'FETCH_SMURFS_SUCCESS';
export const FETCH_SMURFS_FAILED = 'FETCH_SMURFS_FAILED';

export const getSmurfs = () => dispatch => {
    dispatch({ type: FETCH_SMURFS_START })
    axios
        .get('http://localhost:3333/smurfs')
        .then(res => {
            console.log(res.data)
            dispatch({ type: FETCH_SMURFS_SUCCESS, payload: res.data })
        })
        .catch(err => {
            console.log(err)
        })
}

export const ADD_SMURF_START = 'ADD_SMURF_START';
export const ADD_SMURF_SUCCESSFUL = 'ADD_SMURF_SUCCESSFUL';
export const ADD_SMURF_FAILED = 'ADD_SMURF_FAILED';

export const addSmurf = smurf => dispatch => {
    dispatch({ type: ADD_SMURF_START })
    axios
        .post('http://localhost:3333/smurfs', smurf)
        .then(res => {
            dispatch({ type: ADD_SMURF_SUCCESSFUL, payload: res.data })
        })
        .catch(err => {
            console.log(err)
        })
}

export const DELETE_SMURF_START = 'DELETE_SMURF_START';
export const DELETE_SMURF_SUCCESSFUL = 'DELETE_SMURF_SUCCESSFUL';
export const DELETE_SMURF_FAILED = 'DELETE_SMURF_FAILED';

export const deleteSmurf = id => dispatch => {
    dispatch({ type: DELETE_SMURF_START })
    axios
        .delete(`http://localhost:3333/smurfs/${id}`)
        .then(res => {
            console.log("promise: ", id, res)
            dispatch({ type: DELETE_SMURF_SUCCESSFUL, payload: id })
        })
        .catch(err => {
            console.log(err)
        })
}

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/
