import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar";

export default function DashboardLayout() {
	return (
		<div className="flex min-h-screen bg-[var(--background)]">
			<Sidebar />

			<main className="flex-1 overflow-auto">
				<Outlet />
			</main>
		</div>
	)
}