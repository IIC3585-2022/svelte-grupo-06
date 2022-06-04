import { public_key } from "./constants/marvel";
import { writable, derived } from 'svelte/store';
import axios from "axios";

export const searchFilter = writable("");

const fetchCharacters = async (url) => {
    const apiResponse = await fetch(url)
	return await apiResponse.json()
}

function createCharacters() {
	const { subscribe, set, update } = writable([]);

	return {
		subscribe,
		filter: async (nameStartsWith) => {
            var char = await fetchCharacters(`http://gateway.marvel.com/v1/public/characters?limit=100&nameStartsWith=${nameStartsWith}&apikey=${public_key}`)
            update(n => char.data.results)
        },
		reset: async () => {
            var char = await fetchCharacters(`http://gateway.marvel.com/v1/public/characters?limit=100&apikey=${public_key}`)
            set(char.data.results)
        },
        start: async () => {
            var char = await fetchCharacters(`http://gateway.marvel.com/v1/public/characters?limit=100&apikey=${public_key}`)
            set(char.data.results)
        },
	};
}

export const characters = createCharacters();

characters.start()




// export const characters = readable([], function start(set) {
// 	let characters = []
//     axios
//     .get(
//         `http://gateway.marvel.com/v1/public/characters?limit=100&apikey=${public_key}`
//     )
//     .then((result) => {
//         result.data.data.results.forEach((item) => {
//             characters.push(item);
//         });
//         set(characters)
//     })


// 	return function stop() {
// 		set(null)
// 	};
// });