export const getUserState = store => store.user;

export const getUserLoggedInId = (store) =>
    getUserState(store) ? getUserState(store).loggedInUserId : null;

export const getUserIsLoggedIn = (store) => getUserLoggedInId(store) != null;
export const getUserIsGuest    = (store) => getUserLoggedInId(store) == null;
