<script lang="ts">
	import { user } from '$lib/stores/userStore';
	import pb from '$lib/connections/pb';

	const logout = async () => {
		pb.authStore.clear();
		user.set(null);

		window.location.href = '/';
	};
</script>

{#if $user}
	<div class="flex">
		<p class="username p-0 mt-1 mb-1">{$user.name}</p>
		<button on:click={logout} type="submit" class="btn btn-primary ms-2 me-2 mt-0">Logout</button>
	</div>
{:else}
	<a href="/auth/login" class="btn btn-outline-success me-2">Login</a>
	<a href="/auth/register" class="btn btn-outline-warning">Register</a>
{/if}

<style>
	.username {
		color: #fff;
		font-size: 18px;
	}
	.flex {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
</style>
