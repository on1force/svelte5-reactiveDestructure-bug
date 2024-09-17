<script lang="ts">
	import { useData } from '../lib/data.svelte';

	// if it was something like
	// const mockData = useData();
	// the state would be reactive and the component would re-render when the data changes.
	// somehow the destructuring of the data caused the component to not re-render when the data changes
	// but on the dev tools => network, the fetch in the $effect is running just fine
	const { data } = useData();
</script>

{#if data}
	<div class="flex h-screen items-center justify-center bg-black text-white">
		<div class="flex w-full max-w-3xl flex-col gap-4">
			<h1 class="text-4xl font-bold">{data.title}</h1>
			<p class="text-lg">{data.body}</p>
		</div>
	</div>
{:else}
	<div class="flex h-screen items-center justify-center bg-black text-white">
		<h1>Loading...</h1>
	</div>
{/if}
