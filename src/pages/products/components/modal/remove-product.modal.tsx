import { XIcon } from "lucide-react";
import Text from "../../../../components/text";
import type { ProductPayload } from "../../../../context/productContext";

interface RemoveProductModalProps {
	product: ProductPayload | null;
	onConfirm: () => void;
	onCancel: () => void;
}

export default function RemoveProductModal({ product, onConfirm, onCancel }: RemoveProductModalProps) {
	if (!product) return null;

	return (
		<div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
			<div className="bg-[var(--card)] rounded-lg shadow-lg w-full max-w-lg border border-[var(--border)]">
				{/* Header */}
				<div className="flex items-center justify-between p-3">
					<div className="flex items-center gap-3">
						<Text variant="lg" className="font-semibold text-[var(--foreground)]">Excluir Produto?</Text>
					</div>
					<button
						onClick={onCancel}
						className="rounded-sm opacity-70 transition-opacity hover:opacity-100"
						title="Fechar"
					>
						<XIcon className="h-4 w-4" />
					</button>
				</div>
				<Text variant="sm" className="text-[var(--muted-foreground)] ml-3">
					Tem certeza que deseja excluir o produto abaixo? Esta ação não pode ser desfeita.
				</Text>

				{/* Footer */}
				<div className="flex items-center justify-end gap-3 p-2">
					<button
						onClick={onCancel}
						className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all h-9 px-4 border border-[var(--border)] bg-transparent hover:bg-[var(--accent)]"
					>
						Cancelar
					</button>
					<button
						onClick={onConfirm}
						className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all h-9 px-4 bg-[var(--destructive)] text-[var(--destructive-foreground)] hover:bg-[var(--destructive)]/90"
					>
						Excluir
					</button>
				</div>
			</div>
		</div>
	);
}