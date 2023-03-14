<script lang="ts">
	import { user } from '$lib/stores/userStore';
	console.log($user);

	const fetchDishes = async () => {
		const res = await fetch('https://109.205.182.22:443/api/collections/dishes/records', {
			method: 'GET',
			mode: 'no-cors'
			// headers: {
    		// 	'Access-Control-Allow-Origin':'http://0.0.0.0/'
  			// }
		});

		const dishes = await res.json();
		console.log(dishes);
	};

</script>

<button on:click={fetchDishes}>Test Fetch</button>

{#if $user}
	<h1>Hello, {$user.name}!</h1>
	{#if $user.isAdmin}
		<h3>You are Admin</h3>
	{/if}
{:else}
	<h1>Please log in</h1>
{/if}
