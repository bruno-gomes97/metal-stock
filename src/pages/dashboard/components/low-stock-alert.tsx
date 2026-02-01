import { TrendingDownIcon, TriangleAlertIcon } from "lucide-react";
import Text from "../../../components/text";

interface LowStockAlertProps {
	products?: Array<{
		name: string;
		code: string;
		quantityInitial: number;
		quantityMinimum: number;
	}>
}

export default function LowStockAlert({ products }: LowStockAlertProps) {
	return (
		<div className="text-[var(--card-foreground)] flex flex-col gap-6 rounded-xl border py-6 shadow-sm bg-[var(--card)] border-[var(--border)]">
			<header className="flex items-center gap-2 px-6">
				<TriangleAlertIcon className="h-5 w-5 text-[var(--destructive)]"/>
				<Text variant="lg">Produtos com Estoque Baixo</Text>
			</header>

			{products?.map(item => (
				<div className="px-6">
					<div className="space-y-3">
						<div className="flex items-center justify-between p-3 bg-[var(--destructive)]/10 rounded-lg border border-[var(--destructive)]/20">
							<div>
								<p className="font-medium text-[var(--foreground)]">{item.name}</p>
								<p className="text-sm text-[var(--muted-foreground)]">
									Código: {item.code}
								</p>
							</div>
							<div className="text-right">
								<div className="flex items-center gap-1 text-[var(--destructive)]">
									<TrendingDownIcon className="h-4 w-4 text-[var(--destructive)]"/>
									<span className="font-bold">{item.quantityInitial}</span>
								</div>
								<p className="text-xs text-[var(--muted-foreground)]">
									Mínimo: {item.quantityMinimum}
								</p>
							</div>
						</div>
					</div>
				</div>
			))}
		</div>
	)
}