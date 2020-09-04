import {get} from "./base";

// ts:
// interface ResourceService {
//     all()
//     one(id)
//     create(data)
//     update(id, data)
//     delete(id)
// }

export const userService = {
    one,
};

async function one(id) {
    return await get(`/users/${id}`)
}
