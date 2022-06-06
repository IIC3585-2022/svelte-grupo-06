import { public_key } from "./constants/marvel";
import { writable, derived, readable } from 'svelte/store';
import axios from "axios";

export const searchFilter = writable("");

const fetchFromApi = async (url) => {
    const apiResponse = await fetch(url)
	return await apiResponse.json()
}

function createCharacters() {
	const { subscribe, set, update } = writable([]);

	return {
		subscribe,
		filter: async (nameStartsWith) => {
            var char = await fetchFromApi(`https://gateway.marvel.com/v1/public/characters?limit=100&nameStartsWith=${nameStartsWith}&apikey=${public_key}`)
            update(n => char.data.results)
        },
		reset: async () => {
            var char = await fetchFromApi(`https://gateway.marvel.com/v1/public/characters?limit=100&apikey=${public_key}`)
            set(char.data.results)
        },
        start: async () => {
            var char = await fetchFromApi(`https://gateway.marvel.com/v1/public/characters?limit=100&apikey=${public_key}`)
            set(char.data.results)
        },
	};
}

function createCharacter() {
	const { subscribe, set, update } = writable({thumbnail: ''});

	return {
		subscribe,
		selectCharacter: async (id) => {
            var char = await fetchFromApi(`https://gateway.marvel.com/v1/public/characters/${id}?apikey=${public_key}`)
            update(n => char.data.results[0])
        },
		reset: async () => {
            set({})
        },
	};
}

function createComics() {
	const { subscribe, set, update } = writable([{thumbnail: ''}]);

	return {
		subscribe,
		getComics: async (id) => {
            var char = await fetchFromApi(`https://gateway.marvel.com/v1/public/characters/${id}/comics?apikey=${public_key}`)
            update(n => char.data.results)
        },
		reset: async () => {
            set({})
        },
	};
}

export const characters = createCharacters();

characters.start()

export const character = createCharacter();

export const comics = createComics();

export const currentComponent = writable(0);