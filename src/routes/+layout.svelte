<script>
	import '$lib/tailwind.css';
	import MenuBlock from '$lib/components/MenuBlock/MenuBlock.svelte';
</script>

<div class="drawer drawer-mobile">
	<input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
	<div class="drawer-content flex flex-col items-center justify-center">
		<!-- Page content here -->
		<slot />
		<label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>
	</div>
	<div class="drawer-side">
		<label for="my-drawer-2" class="drawer-overlay" />
		<ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
			<MenuBlock />
			<MenuBlock />
			<MenuBlock />
		</ul>
	</div>
</div>
