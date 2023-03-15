<script lang="ts">
	import type dish from '$lib/models/dish';
	import Dish from '$lib/components/Dish.svelte';
	import pb from '$lib/connections/pb';

	let dishes: dish[] = [];
	let selectedDishes: dish[] = [];
	let total = 0;

	const getDishes = async () => {
		const response = await pb.collection('dishes').getList(1, 50);
		dishes = response.items;
	};

	const calculateTotal = () => {
		total = 0;
		for (const selectedDish of selectedDishes) {
			total += selectedDish.price;
		}
	};

	const selectDish = (id: string) => {
		if(selectedDishes.find((dish) => dish.id == id)) {
			selectedDishes = selectedDishes.filter((dish) => dish.id != id);
		}
		else{
			selectedDishes = [...selectedDishes, dishes.find((dish) => dish.id == id)];
		}
		calculateTotal();
	};

	const order = async () => {
		if (selectedDishes.length > 0) {
			for (const selectedDish of selectedDishes) {
				await pb.collection('orders').create({
					dish: selectedDish.id,
					user: pb.authStore.model?.id,
					date: new Date(),
					payment_received: false,
				});
			}
		}
		//TODO: show success message
		//set selectedDishes to empty array
		selectedDishes = [];
	};

	getDishes();
</script>

<h1 class="mb-3">Select your Dish</h1>

<div class="grid">
	{#each dishes as dish}
		<div on:click={() => selectDish(dish.id)}>
			<Dish {dish} />
		</div>
	{/each}
</div>

{#if selectedDishes != []}
	<h1>{total}€
		<button class="btn btn-primary" on:click={order}>Order Dishes</button> 
	</h1>
{/if}

<style>
	.grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
		grid-gap: 1rem;
	}
</style>
