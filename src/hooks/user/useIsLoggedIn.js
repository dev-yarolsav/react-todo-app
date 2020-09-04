import {useSelector} from "react-redux";

import {getAppUserIsLoggedIn} from "../../store/app/selectors";

export const useIsLoggedIn = () => {
    return useSelector(getAppUserIsLoggedIn)
}