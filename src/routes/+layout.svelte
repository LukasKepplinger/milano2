<script lang="ts">
	import AuthSection from '$lib/components/AuthSection.svelte';
	import Navmenu from '$lib/components/Navmenu.svelte';
	import type { NavSettings } from '$lib/components/NavSettings';
	const navSettings: NavSettings = {
		title: 'Milano',
		title_path: '/',
		routes: [
			{
				title: 'Home',
				path: '/',
				icon: 'home',
				condition: 'none'
			},
			{
				title: 'Order',
				path: '/newOrder',
				icon: 'Order',
				condition: 'loggedIn'
			},
			{
				title: 'Dishes',
				path: '/dishes',
				icon: 'Dish',
				condition: 'isAdmin'
			},
			{
				title: 'Order History',
				path: '/orderHistory',
				icon: 'OrderHistory',
				condition: 'loggedIn'
			}
		]
	};
</script>

<Navmenu navsettings={navSettings}>
	<div slot="Login">
    <AuthSection />
	</div>
</Navmenu>

<div class="p-3 to_bottom">
	<slot />
</div>

