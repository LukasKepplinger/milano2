<script lang="ts">
	import type dish from '$lib/models/dish';
	import pb from '$lib/connections/pb';
	export let dish: dish;
	let selected: boolean = dish.enabled;

	const select = async () => {
		selected = !selected;
		if (selected) {
			await pb.collection('dishes').update(dish.id, { enabled: true });
		} else {
			await pb.collection('dishes').update(dish.id, { enabled: false });
		}
	};
</script>

<div class="card pointer grow m-2" on:click={select}>
	{#if selected}
		<div class="card-header bg-success" />
	{:else}
		<div class="card-header bg-error" />
	{/if}
	<div class="card-body">
		<h4>{dish.name}</h4>
		<p>{dish.price}€</p>
	</div>
</div>

<style>
	.pointer {
		cursor: pointer;
	}
	.grow {
		transition: all 0.1s ease-in-out;
	}
	.grow:hover {
		transform: scale(1.08);
		border: 1px solid red;
	}
</style>
