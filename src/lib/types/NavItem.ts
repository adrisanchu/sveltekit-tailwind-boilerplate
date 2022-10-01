export interface NavItem {
	href: string;
	label: string;
	children: NavItem[];
	icon?: string;
}
