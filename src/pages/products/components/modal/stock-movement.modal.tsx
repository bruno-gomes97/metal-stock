import { XIcon } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "../../../../components/button";
import MovementTypeSelect, { type MovementType } from "../../../../components/select/movement-type-select";
import Text from "../../../../components/text";
import TextField from "../../../../components/text-field";
import type { ProductPayload } from "../../../../context/productContext";

interface StockMovementModalProps {
	product: ProductPayload | null;
	onCancel: () => void;
	onSave: (updatedProduct: ProductPayload) => void;
}

export default function StockMovementModal({ product, onCancel, onSave }: StockMovementModalProps) {
	const [movementType, setMovementType] = useState<MovementType | null>(null);
	const { register, watch, handleSubmit } = useForm({
		defaultValues: product || {},
	});

	const quantityInitial = watch('quantityInitial');

	const updatedQuantity = () => {
		if(!product || movementType === null) return product ? product.quantityInitial : 0;
		if(movementType === 'entrada') {
			return Number(product.quantityInitial) + Number(quantityInitial || 0);
		} else {
			return Number(product.quantityInitial) - Number(quantityInitial || 0);
		}
	}

	const newQuantity = () => {
		if(updatedQuantity() < 0) {
			return 0;
		}
		return updatedQuantity();
	}

	const onSubmit = () => {
		if(!product) return;
		const updatedProduct: ProductPayload = {
			...product,
			quantityInitial: newQuantity(),
		};
		onSave(updatedProduct);
	};

 	if(!product) return null;

	return (
		<div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center">
			<div className="bg-[var(--card)] rounded-lg shadow-lg w-full max-w-lg border border-[var(--border)] p-3">
				{/* Header */}
				<div className="flex items-center justify-between py-3">
					<div className="flex items-center gap-3">
						<Text variant="lg" className="font-semibold text-[var(--foreground)]">Movimentar Estoque</Text>
					</div>
					<button
						onClick={onCancel}
						className="rounded-sm opacity-70 transition-opacity hover:opacity-100"
						title="Fechar"
					>
						<XIcon className="h-4 w-4" />
					</button>
				</div>

				<div className="p-3 bg-[var(--muted)] rounded-lg">
					<p className="font-medium text-[var(--foreground)]">{product.name}</p>
					<Text variant="sm" className="text-[var(--muted-foreground)]">Código: {product.code}</Text>
					<Text variant="sm" className="text-[var(--muted-foreground)]">Estoque atual: {product.quantityInitial} unidades</Text>
				</div>
				
				<form className="space-y-4 mt-4" onSubmit={handleSubmit(onSubmit)}>
					<div className="space-y-2">
						<MovementTypeSelect
							value={movementType}
							onChange={setMovementType}
							label="Tipo de Movimentação"
						/>
					</div>
					<div className="space-y-2">
						<TextField 
							label="Quantidade" 
							id="quantity" 
							type="number" 
							{...register('quantityInitial')}
							min={0}
						/>
					</div>
					<div className="space-y-2">
						<TextField
							label="Motivo" 
							id="movement-reason" 
							placeholder="Ex: Compra, Venda, Ajuste de inventário..." 
						/>
					</div>
					
					<div className="p-3 bg-[var(--muted)] rounded-lg mt-3">
						<Text variant="sm" className="text-[var(--muted-foreground)]">Estoque após movimentação:</Text>
						<span className="font-semibold text-[var(--foreground)]">{newQuantity()} unidades</span>
					</div>
					<footer className="flex justify-end gap-2">
						<Button
							type="button"
							onClick={onCancel}
							variant="secondary"
							width="26"
						>
							Cancelar
						</Button>
						<Button
							type="submit"
							variant="primary"
							width="35"
						>
							Confirmar
						</Button>
					</footer>
				</form>
			</div>
		</div>
	)
}