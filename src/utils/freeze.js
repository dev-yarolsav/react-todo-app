export const freeze = (key, data) => {
    window.localStorage.setItem(`_f${key}`, JSON.stringify(data))
}

export const unfreeze = (key, defaultValue = null) => {
    const json = window.localStorage.getItem(`_f${key}`);

    try {
        return JSON.parse(json)
    } catch (e) {
        return defaultValue;
    }
}