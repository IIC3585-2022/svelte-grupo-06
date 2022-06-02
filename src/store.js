import { public_key } from "./constants/marvel";
import { readable, writable, derived } from 'svelte/store';
import axios from "axios";

export const searchFilter = writable("");

export const filter = derived(
	searchFilter,
	$searchFilter => `${$searchFilter}`
);

export const characters = readable([], function start(set) {
	let characters = []
    axios
    .get(
        `http://gateway.marvel.com/v1/public/characters?limit=100&apikey=${public_key}`
    )
    .then((result) => {
        result.data.data.results.forEach((item) => {
            characters.push(item);
        });
        set(characters)
    })


	return function stop() {
		set(null)
	};
});