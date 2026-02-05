import { UserCogIcon } from "lucide-react";
import { formattedDate } from "../../utils/date";
import Text from "../text";

interface TagProps {
	isAdmin?: boolean;
	createdAt: string;
}

export default function Tag({ isAdmin = true, createdAt }: TagProps) {
	const userRole = isAdmin ? "ADMIN": "EMP";

	return (
		<div className="flex items-center justify-between">
			<span 
				className={`inline-flex items-center gap-1 px-2 py-1 text-sm rounded-full ${isAdmin ? "bg-[var(--primary)]/20" : "bg-[var(--muted)]"} ${isAdmin ? "text-[var(--primary)]" : "text-[var(--muted-foreground)]"}`}
			>
				<UserCogIcon className="w-3 h-3"/>
				{userRole === "ADMIN" ? "Administrador" : "Funcionário"}
			</span>
			<Text variant="sm" className="text-[var(--muted-foreground)]">{formattedDate(createdAt)}</Text>
		</div>
	)
}