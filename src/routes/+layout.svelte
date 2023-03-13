<script lang="ts">
	import AuthSection from '$lib/components/AuthSection.svelte';
	import Navmenu from '$lib/components/Navmenu.svelte';
	import type { NavSettings } from '$lib/components/NavSettings';
	// import pb from '$lib/connections/pb';

	// pb.collection('users').authWithPassword("a.b@gmail.com", "Abc.1234");
	const navSettings: NavSettings = {
		title: 'Milano',
		title_path: '/',
		routes: [
			{
				title: 'Home',
				path: '/',
				icon: 'home'
			},
			{
				title: 'Order',
				path: '/newOrder',
				icon: 'Order'
			},
			{
				title: 'Dishes',
				path: '/dishes',
				icon: 'Dish'
			},
			{
				title: 'Order History',
				path: '/orderHistory',
				icon: 'OrderHistory'
			},
      {
        title: 'Manage Orders',
        path: '/manageOrders',
        icon: 'ManageOrders'
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

