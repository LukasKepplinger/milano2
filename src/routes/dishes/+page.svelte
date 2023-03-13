<script lang="ts">
	import dish from '$lib/models/dish';
	import pb from '$lib/connections/pb';
	import AdminDish from '$lib/components/AdminDish.svelte';

	let dishes: dish[] = [];
	const getDishes = async () => {
		const response = await pb.collection('dishes').getList(1, 50);
		dishes = response.items;
	};

    let new_dish: dish = new dish("", 0);
    const createDish = async () => {
        await pb.collection('dishes').create(new_dish);
        getDishes();
        new_dish = new dish("", 0);
    };

	getDishes();
</script>

<h1 class="mb-3">Dishes</h1>
<div class="dish-form form-control p-3 mb-4">
    <h2>Create dish</h2>
    <label for="name">Name</label>
    <input class="form-control" type="text" bind:value={new_dish.name} />
    <label for="price">Price</label>
    <input class="form-control" type="number" bind:value={new_dish.price} />
    <button class="btn btn-primary mt-3" on:click={createDish}>Create dish</button>
</div>

<div class="grid">
	{#each dishes as dish}
		<AdminDish {dish} />
	{/each}
</div>

<style>
	.grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
		grid-gap: 1rem;
	}
</style>
