export const START_LOADING = "START_LOADING";
export const STOP_LOADING = "STOP_LOADING";

export const startLoading = loadingKey => ({
    type: START_LOADING,
    payload: { loadingKey }
});

export const stopLoading = loadingKey => ({
    type: STOP_LOADING,
    payload: { loadingKey }
});