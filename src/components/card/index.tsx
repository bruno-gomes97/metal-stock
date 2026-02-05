import { ShieldIcon, UserIcon } from "lucide-react";
import IconContainer from "../icon-container";
import Tag from "../tag";
import Text from "../text";

interface CardProps {
	isAdmin?: boolean;
}

export default function Card({ isAdmin = true }: CardProps) {
	return (
		<div className="text-[var(--card-foreground)] flex flex-col gap-6 rounded-xl border py-6 shadow-sm bg-[var(--card)] border-[var(--border)]">
			<header className="flex items-start gap-2 px-6 pb-3">
				<div className="flex items-start justify-between">
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
							<Text variant='lg' className="font-semibold text-[var(--base)]">{isAdmin ? "Administrador" : "Funcionário"}</Text>
							<Text variant='sm' className="text-[var(--muted-foreground)]">admin@metalstock.com</Text>
						</div>
					</div>
				</div>
			</header>
			<div className="px-6">
				<Tag isAdmin={isAdmin} createdAt={new Date().toLocaleDateString()} />
			</div>
		</div>
	)
}