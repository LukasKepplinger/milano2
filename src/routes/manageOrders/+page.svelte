<script lang="ts">
    import pb from "$lib/connections/pb";
    import type Dish from "$lib/models/dish";
    import type Order from "$lib/models/order";

    let dishes: Dish[] = [];
	const getDishes = async () => {
		const response = await pb.collection('dishes').getList(1, 50);
		dishes = response.items;
	};

	let orders: Order[] = [];
	const getOrders = async () => {
		const ordersData = await pb.collection('orders').getList();
		orders = structuredClone(ordersData.items);
	};

    getDishes();
    getOrders();
</script>

