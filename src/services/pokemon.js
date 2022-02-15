//- get all pokemon basic data starts here
export async function getAllPokemon(url) {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                resolve(data);
            });
    })
}
//- get all pokemon basic data starts here

//- get all pokemon detailed data starts here
export async function getPokemon(url) {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                resolve(data);
            });
    })
}
//- get all pokemon detailed data starts here