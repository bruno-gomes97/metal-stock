interface BadgeProps {
	text?: string;
}

export default function Badge({ text }: BadgeProps) {
	return (
		<div className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 font-medium w-fit whitespace-nowrap shrink-0 overflow-hidden border-transparent text-xs bg-[var(--primary)]/20 text-[var(--primary)] mt-1">
			{text}
		</div>
	)
}