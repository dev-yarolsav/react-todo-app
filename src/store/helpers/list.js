export const createListState = () => {
    return {
        isLoading: false,
        isLoadingMore: false, // for infinity-scroll
        isLoadingPage: null,
        items: [],
        pageInfo: {
            totalItems: 0,
            countPages: 0,
            currentPage: 0,
            itemsPerPage: 0,
        }
    };
}

export const loadList = (state, page = 0) => {
    return {
        ...state,
        isLoading: true,
        isLoadingPage: page,
        items: [],
        pageInfo: {
            ...state.pageInfo,
        }
    };
}
export const loadListDone = (state, items, {totalItems, countPages, currentPage, itemsPerPage}) => {
    return {
        ...state,
        isLoading: false,
        isLoadingPage: null,
        items: items,
        pageInfo: {
            ...state.pageInfo,
            totalItems,
            countPages,
            currentPage,
            itemsPerPage
        }
    };
}