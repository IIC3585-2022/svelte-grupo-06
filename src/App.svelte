<script>
	import Characters from './Characters.svelte'
	import Character from './Character.svelte'
	import { currentComponent } from './store';
</script>

<main>
	{#if $currentComponent == 0}
		<Characters/>
	{:else}
		<Character/>
	{/if}
</main>
