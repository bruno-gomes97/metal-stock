import { ShieldIcon, Trash2Icon, UserIcon } from "lucide-react";
import { useEmployee } from "../../context/employeeContext";
import IconContainer from "../icon-container";
import Tag from "../tag";
import Text from "../text";

type userRole = "ADMIN" | "EMP" | null;

interface CardProps {
	name: string;
	email: string;
	role: userRole;
	createdAt: string;
}

export default function Card({ name, email, role, createdAt }: CardProps) {
	const isAdmin = role === "ADMIN" ? true : false;
	const {removeEmployee} = useEmployee();

	const handleDelete = () => {
		removeEmployee(email);
	}

	return (
		<div className="text-[var(--card-foreground)] flex flex-col gap-6 rounded-xl border py-6 shadow-sm bg-[var(--card)] border-[var(--border)]">
			<header className="flex items-start gap-2 px-6 pb-3">
				<div className="flex items-center justify-between w-full">
					<div className="flex items-center gap-3">
						{isAdmin ? (
							<IconContainer colorBg="primary" opacity="20" height='10' width="10" rounded="full">
								<ShieldIcon className="h-5 w-5 text-[var(--primary)]"/>
							</IconContainer>
						) : (
							<IconContainer colorBg="muted" height='10' width="10" rounded="full">
								<UserIcon className="h-5 w-5 text-[var(--muted-foreground)]"/>
							</IconContainer>
						)}
						<div>
							<Text variant='lg' className="font-semibold text-[var(--base)]">{name}</Text>
							<Text variant='sm' className="text-[var(--muted-foreground)]">{email}</Text>
						</div>
					</div>
					<button onClick={handleDelete} className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all outline-none text-[var(--destructive)] hover:text-[var(--destructive)] hover:bg-[var(--destructive)]/10 px-2 py-1 cursor-pointer">
						<Trash2Icon className="h-4 w-4"/>
					</button>
				</div>
			</header>
			<div className="px-6">
				<Tag isAdmin={isAdmin} createdAt={createdAt} />
			</div>
		</div>
	)
}