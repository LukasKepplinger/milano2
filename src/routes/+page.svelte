<script lang="ts">
	import { user } from '$lib/stores/userStore';
	console.log($user);
</script>

{#if $user}
	<h1>Hello, {$user.name}!</h1>
	{#if $user.isAdmin}
		<h3>You are Admin</h3>
	{/if}
{:else}
	<h1>Please log in</h1>
{/if}
