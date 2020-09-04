import {useSelector} from "react-redux";

import {getAppUser} from "../../store/app/selectors";

export const useLoggedInUser = () => {
    return useSelector(getAppUser)
}