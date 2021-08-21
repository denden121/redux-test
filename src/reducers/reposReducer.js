const SET_COUNT = "SET_COUNT";
const SET_USERS = "SET_USERS";

const defaultState = {
    items: [],
    isFetching: true,
    count: 0
}


export const reposReducer= (state = defaultState, action) => {
    switch (action.type) {
        case SET_COUNT:
            return {
                ...state,
                count: action.payload
            }
        case SET_USERS:
            return {
                ...state,
                items: action.payload
            }
        default:
            return state
    }
}

export const setCount = (count) => ({type: SET_COUNT, payload: count});
export const setUsers = (users) => ({type: SET_USERS, payload: users});
