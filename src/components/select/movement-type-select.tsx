import { CirclePlusIcon, Minus } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export type MovementType = 'entrada' | 'saida';
export type EmployeeType = 'ADMIN' | 'EMP';

interface MovementTypeSelectProps {
	value: MovementType | null;
	onChange: (value: MovementType) => void;
	label?: string;
}

export default function MovementTypeSelect({ value, onChange, label }: MovementTypeSelectProps) {
	const [isOpen, setIsOpen] = useState(false);
	const selectRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
				setIsOpen(false);
			}
		};

		document.addEventListener('mousedown', handleClickOutside);
		return () => document.removeEventListener('mousedown', handleClickOutside);
	}, []);

	const getSelectedOption = () => {
		if (value === 'entrada') {
			return (
				<div className="flex items-center gap-3">
					<div className="flex items-center justify-center w-4 h-4 rounded-full">
						<CirclePlusIcon className="w-4 h-4 text-[var(--chart-2)]" />
					</div>
					<span className="font-medium text-[var(--foreground)]">Entrada</span>
				</div>
			);
		}
		if (value === 'saida') {
			return (
				<div className="flex items-center gap-3">
					<div className="flex items-center justify-center w-4 h-4">
						<Minus className="w-4 h-4 text-[var(--destructive)]" />
					</div>
					<span className="font-medium text-[var(--foreground)]">Saída</span>
				</div>
			);
		}
		return <span className="text-[var(--muted-foreground)]">Selecione o tipo</span>;
	};

	const handleSelect = (type: MovementType) => {
		onChange(type);
		setIsOpen(false);
	};

	return (
		<div className="space-y-2" ref={selectRef}>
			{label && (
				<label className="flex items-center gap-2 text-sm leading-none font-medium select-none text-[var(--foreground)]">
					{label}
				</label>
			)}
			<div className="relative">
				{/* Select Button */}
				<button
					type="button"
					onClick={() => setIsOpen(!isOpen)}
					className="flex w-fit items-center justify-between gap-2 rounded-md border px-3 py-2 text-sm whitespace-nowrap shadow-xs bg-[var(--input)] border-[var(--border)] text-[var(--foreground)]"
				>
					{getSelectedOption()}
					<svg
						className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
					</svg>
				</button>

				{/* Dropdown Options */}
				{isOpen && (
					<div className="absolute z-10 w-34 mt-2 bg-[var(--card)] border border-[var(--border)] rounded-lg shadow-lg overflow-hidden">
						{/* Opção Entrada */}
						<button
							type="button"
							onClick={() => handleSelect('entrada')}
							className="w-full flex items-center gap-3 p-3 hover:bg-green-500/10 transition-colors border-b border-[var(--border)]"
						>
							<div className="flex items-center justify-center w-4 h-4">
								<CirclePlusIcon className="w-4 h-4 text-[var(--chart-2)]" />
							</div>
							<span className="font-medium text-[var(--foreground)]">Entrada</span>
						</button>

						{/* Opção Saída */}
						<button
							type="button"
							onClick={() => handleSelect('saida')}
							className="w-full flex items-center gap-3 p-3 hover:bg-red-500/10 transition-colors"
						>
							<div className="flex items-center justify-center w-4 h-4">
								<Minus className="w-4 h-4 text-[var(--destructive)]" />
							</div>
							<span className="font-medium text-[var(--foreground)]">Saída</span>
						</button>
					</div>
				)}
			</div>
		</div>
	);
}
