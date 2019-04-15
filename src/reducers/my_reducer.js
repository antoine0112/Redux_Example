export const ACTION_TYPES = {
    UPDATE: "update",
    DELETE: "delete"
}

const INITIAL_STATE = {
    user: "unknown",
    msg: ""
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ACTION_TYPES.UPDATE:
            return {...state, msg: action.msg, user: action.user};
        case ACTION_TYPES.DELETE:
            return {...state, msg: "", user: action.user};
        default:
            return state;
    }
}