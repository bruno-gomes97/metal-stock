import { Link } from "react-router-dom";
import Text from "../text";

type ActionButtonBase = {
	label: string;
	icon?: React.ReactNode;
};

type ActionButtonWithClick = ActionButtonBase & {
	onClick: () => void;
	href?: never;
};

type ActionButtonWithHref = ActionButtonBase & {
	href: string;
	onClick?: never;
};

type ActionButton = ActionButtonWithClick | ActionButtonWithHref;

interface PageHeaderProps {
	title: string;
	subtitle: string;
	actionButton?: ActionButton;
}

export default function PageHeader({ title, subtitle, actionButton }: PageHeaderProps) {
	return (
		<div>
			<div className="flex items-center justify-between">
				<div>
					<Text variant="xl" className="text-[var(--foreground)]">{title}</Text>
					<p className="text-[var(--muted-foreground)]">{subtitle}</p>
				</div>
				{actionButton && (
					actionButton.href ? (
						<Link 
							to={actionButton.href} 
							className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md transition-all shrink-0 bg-[var(--primary)] hover:bg-[var(--primary)]/90 h-9 px-4"
						>
							{actionButton.icon}
							<Text variant="sm" className="text-[var(--primary-foreground)]">
								{actionButton.label}
							</Text>
						</Link>
					) : (
						<button 
							onClick={actionButton.onClick}
							className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md transition-all shrink-0 bg-[var(--primary)] hover:bg-[var(--primary)]/90 h-9 px-4"
						>
							{actionButton.icon}
							<Text variant="sm" className="text-[var(--primary-foreground)]">
								{actionButton.label}
							</Text>
						</button>
					)
				)}
			</div>
		</div>
	);
}