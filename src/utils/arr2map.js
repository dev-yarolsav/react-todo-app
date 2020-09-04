export const arr2map = (array, handler, key = 'id') => {
    return array.reduce((acc, item) => {

        const data = handler(item);

        delete data[data[key]]

        acc[data[key]] = data

        return acc;
    }, {})
}