import { CirclePlusIcon, LayoutDashboardIcon, LogOutIcon, PackageIcon, SearchIcon, UsersIcon, WrenchIcon } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import Button from "../button";
import IconContainer from "../icon-container";
import Text from "../text";

const listItemsNavigation = [
	{ label: 'Dashboard', icon: <LayoutDashboardIcon className="w-5 h-5" />, to: '/dashboard', active: false },
	{ label: 'Produtos', icon: <PackageIcon className="w-5 h-5" />, to: '/dashboard/products', active: false },
	{ label: 'Buscar', icon: <SearchIcon className="w-5 h-5" />, to: '/search', active: false },
	{ label: 'Adicionar Produto', icon: <CirclePlusIcon className="w-5 h-5" />, to: '/dashboard/add-product', active: false },
	{ label: 'Funcionários', icon: <UsersIcon className="w-5 h-5" />, to: '/dashboard/employees', active: false },
]

export default function Sidebar() {
	const {user, logout} = useAuth();
	const navigate = useNavigate();

	const modifieldStatus = listItemsNavigation.map(item => {
		if(item.to === window.location.pathname) {
			return { ...item, active: true }
		}
		return { ...item, active: false }
	})

	const handleLogout = () => {
		logout();
		navigate('/');
	}
	
	return (
		<aside className="w-64 min-h-screen bg-[var(--sidebar)] border-[var(--sidebar-border)] flex flex-col">
			<div className="p-6 border-b border-[var(--sidebar-border)]">
				<div className="flex items-center gap-3">
					<IconContainer height={'10'} width={'10'} colorBg="primary">
						<WrenchIcon className="w-5 h-5 text-[var(--primary-foreground)]" />
					</IconContainer>
					<div>
						<Text variant="xl" className="text-[var(--sidebar-foreground)]">MetalStock</Text>
						<Text variant="xs" className="text-[var(--muted-foreground)]">Controle de Estoque</Text>
					</div>
				</div>
			</div>
			<nav className="flex-1 p-4 space-y-1">
				{modifieldStatus.map(item => (
					<Link key={`menu-${item.label}`} to={item.to} className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${item.active ? 'bg-[var(--sidebar-accent)] text-[var(--sidebar-primary)]' : 'text-[var(--sidebar-foreground)] hover:bg-[var(--sidebar-accent)] hover:text-[var(--sidebar-accent-foreground)]'} `}>
						{item.icon}
						<Text variant="sm">{item.label}</Text>
					</Link>
				))}
			</nav>
			<div className="p-4 border-t border-[var(--sidebar-border)]">
				<div className="px-4 py-3 mb-3">
					<Text variant="sm" className="text-[var(--sidebar-foreground)]">Administrador</Text>
					<Text variant="xs" className="text-[var(--muted-foreground)]">{user?.email}</Text>
					<span className="inline-block mt-1 px-2 py-0.5 text-xs rounded-full bg-[var(--primary)]/20 text-[var(--primary)]">Administrador</span>
				</div>
				<Button variant="secondary" className="flex justify-start items-center" onClick={handleLogout}>
					<LogOutIcon className="h-4 w-4" />
					<Text variant="sm">Sair</Text>
				</Button>
			</div>	
		</aside>
	)
}