import {ACTION_TYPES} from "../reducers/my_reducer"

export const update = (user, msg, dispatch) => {
    dispatch({
        type: ACTION_TYPES.UPDATE,
        user: user,
        msg: msg
    })
}

export const deleteMsg = (user, dispatch) => {
    dispatch({
        type: ACTION_TYPES.DELETE,
        user: user
    })
}