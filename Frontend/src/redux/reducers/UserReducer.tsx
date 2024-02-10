import { auth } from "../../axios/axios";
import { USER_ACTION_TYPES } from "../../utils/constants";
import { IActionType, IUserProfile } from "../../utils/interfaces";

const defaultValues: IUserProfile = {
    id: 0, name: "User", email: "user@mail.com", picture: "http://pic.me",
}

const UserReducer = async (state:IUserProfile = defaultValues, action: IActionType) => {
    switch(action.type){
        case USER_ACTION_TYPES.LOGIN:
            return {...state, name: "new user"}

        case USER_ACTION_TYPES.CREATE:
            break;

        case USER_ACTION_TYPES.DELETE:
            break;

        case USER_ACTION_TYPES.UPDATE:
            break;

        case USER_ACTION_TYPES.LOGOUT:
            break;

        default:
            break;
    }

    return state
}

export default UserReducer;