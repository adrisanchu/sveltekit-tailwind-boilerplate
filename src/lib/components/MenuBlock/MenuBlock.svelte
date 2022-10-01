<script lang="ts">
	import type { NavItem } from '$lib/types';
	export let items: NavItem[] = [];
	export let menuTitle = 'Menu Title';
</script>

<ul class="menu p-3 bg-base-200 rounded-xl">
	<li class="menu-title">
		<span>{menuTitle}</span>
	</li>
	{#each items as { href, label }}
		<li><a {href}>{label}</a></li>
	{/each}
</ul>
