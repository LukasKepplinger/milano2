<script lang="ts">
	import pb from '$lib/connections/pb';
	import type Order from '$lib/types';
	import type Dish from '$lib/types';

	let dishes: Dish[] = [];
	const getDishes = async () => {
		const response = await pb.collection('dishes').getList(1, 50);
		dishes = response.items;
	};

	let orders: Order[] = [];
	const getOrders = async () => {
		const ordersData = await pb.collection('orders').getList();
		orders = structuredClone(ordersData.items);

		getTotalDept();
	};

	let totalDept = 0;
	const getTotalDept = () => {
		let total = 0;
		orders.forEach((order) => {
			console.log('order: ' + order.id);
			if (!order.payment_received) {
				const dish = dishes.find((dish) => dish.id == order.dish);
				total += dish?.price;
				console.log('upayed dish: ' + dish?.name + ' ' + dish?.price + '€');
			}
		});
		totalDept = total;
	};

	getDishes();
	getOrders();

	//UI
	const getDishName = (id: string) => {
		const dish = dishes.find((dish) => dish.id == id);
		return dish?.name;
	};
	const getDishPrice = (id: string) => {
		const dish = dishes.find((dish) => dish.id == id);
		return dish?.price;
	};

	const payOrder = async (id: string) => {
		await pb.collection('orders').update(id, { payment_received: true });
		getOrders();
	};

	const formattedDateTimeGerman = (date: string) => {
		const dateObj = new Date(date);
		const today = new Date();
		const diffTime = Math.abs(today.getTime() - dateObj.getTime());
		const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
		if (diffDays < 7) {
			return (
				dateObj.toLocaleString('de-DE', { weekday: 'long' }) +
				' ' +
				dateObj.toLocaleString('de-DE', { hour: 'numeric', minute: 'numeric' })
			);
		} else {
			return dateObj.toLocaleString('de-DE', { day: '2-digit', month: '2-digit', year: 'numeric' });
		}
	};
</script>

<div class="row">
	<div class="col">
		<h1 class="mb-3">Order History</h1>
	</div>
	<div class="col">
		<h1 class="mb-3">
			Total Dept:
			{#if totalDept > 0}
				<span class="badge bg-danger">{totalDept}€</span>
			{:else}
				<span class="badge bg-success">0€</span>
			{/if}
		</h1>
	</div>
</div>

<h3>Not payed</h3>
<table class="table table-striped table-hover mb-5">
	<thead>
		<tr>
			<th scope="col">Dish</th>
			<th scope="col">Date</th>
			<th scope="col">Price</th>
			<th scope="col">Payed</th>
		</tr>
	</thead>
	<tbody>
		{#each orders as order}
			{#if !order.payment_received}
				<tr>
					<td>{getDishName(order.dish)}</td>
					<td>{formattedDateTimeGerman(order.date)}</td>
					<td>{getDishPrice(order.dish)}€</td>
					<td>
						{#if order.payment_received}
							<div class="pointy" on:click={() => payOrder(order.id)}>
								<span class="badge bg-success grow">Yes</span>
							</div>
						{:else}
							<div class="pointy" on:click={() => payOrder(order.id)}>
								<span class="badge bg-danger grow">No</span>
							</div>
						{/if}
					</td>
				</tr>
			{/if}
		{/each}
	</tbody>
</table>

<h3>All</h3>
<table class="table table-striped table-hover">
	<thead>
		<tr>
			<th scope="col">Dish</th>
			<th scope="col">Date</th>
			<th scope="col">Price</th>
			<th scope="col">Payed</th>
		</tr>
	</thead>
	<tbody>
		{#each orders as order}
			<tr>
				<td>{getDishName(order.dish)}</td>
				<td>{formattedDateTimeGerman(order.date)}</td>
				<td>{getDishPrice(order.dish)}€</td>
				<td>
					{#if order.payment_received}
						<div class="pointy" on:click={() => payOrder(order.id)}>
							<span class="badge bg-success grow">Yes</span>
						</div>
					{:else}
						<div class="pointy" on:click={() => payOrder(order.id)}>
							<span class="badge bg-danger grow">No</span>
						</div>
					{/if}
				</td>
			</tr>
		{/each}
	</tbody>
</table>

<style>
	.pointy {
		cursor: pointer;
	}
	.grow {
		transition: all 0.2s ease-in-out;
	}
	.grow:hover {
		transform: scale(1.2);
	}
</style>
