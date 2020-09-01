import {useSelector} from "react-redux";
import {getLoadingStatus} from "../store/loading/selectors";

export const useIsLoading = (key) => {
    return useSelector(store => getLoadingStatus(store, key))
}