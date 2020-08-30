export const getLoadingState = store => store.loading;

export const getLoadingStatus = (store, loadingKey) => {
    const key = (loadingKey instanceof Array) ? loadingKey.join('.') : loadingKey;

    return getLoadingState(store)
        ? getLoadingState(store)[key]
        : false;
}
