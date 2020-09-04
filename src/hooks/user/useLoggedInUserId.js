import {useSelector} from "react-redux";

import {getAppUserId} from "../../store/app/selectors";

export const useLoggedInUserId = () => {
    return useSelector(getAppUserId)
}