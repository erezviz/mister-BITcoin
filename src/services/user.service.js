export const userService = {
    getUser
}


let gUser = {
    name: 'Oshoa Hyde',
    coins: 100,
    moves: []
}

function getUser() {
    return gUser
}