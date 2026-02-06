import { ArrowLeftIcon, PackageIcon, SaveIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Button from "../../components/button";
import IconContainer from "../../components/icon-container";
import Text from "../../components/text";
import TextField from "../../components/text-field";
import TextArea from "../../components/textarea";
import { useProduct } from "../../context/productContext";
import { generateProductCode } from "../../utils/products";

interface AddProductFormPayload {
	productCode: string;
	productName: string;
	productDescription: string;
	productCategory: string;
	productLocation: string;	
	productQuantityInitial: number;
	productQuantityMinimum: number;
	productUnitValue: number;
	productSupplier: string;
}

export default function AddProductsPage() {
	const navigate = useNavigate();
	const { register, handleSubmit } = useForm<AddProductFormPayload>();
	const { addProduct } = useProduct();

	const onSubmit = (payload: AddProductFormPayload) => {
		const newProduct = {
			id: crypto.randomUUID(),
			code: payload.productCode,
			name: payload.productName,
			description: payload.productDescription,
			category: payload.productCategory,
			location: payload.productLocation,
			quantityInitial: Number(payload.productQuantityInitial),
			quantityMinimum: Number(payload.productQuantityMinimum),
			unitValue: Number(payload.productUnitValue),
			supplier: payload.productSupplier,
		};
		addProduct(newProduct);
		toast.success('Produto adicionado com sucesso!', {
			autoClose: 1500
		});
		navigate('/dashboard/products');
	}
	
	return (
		<div className="p-6 space-y-6">
			<div className="flex items-center gap-4">
				<button onClick={() => navigate(-1)} className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-mediu hover:bg-[var(--accent)] hover:text-[var(--accent-foreground)] text-[var(--foreground)] cursor-pointer h-10 w-10">
					<ArrowLeftIcon className="w-5 h-5"/>
				</button>
				<div>
					<Text variant="xl" className="text-[var(--foreground)]">Adicionar Produto</Text>
					<p className="text-[var(--muted-foreground)]">Cadastre um novo item no estoque</p>
				</div>
			</div>
			<div className="text-[var(--card-foreground)] flex flex-col gap-6 rounded-xl border py-6 shadow-sm bg-[var(--card)] border-[var(--border)] max-w-3xl">
				<header className="grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 ">
					<div className="flex items-center gap-3">
						<IconContainer height="10" width="10" colorBg="primary" opacity="20">
							<PackageIcon className="w-5 h-5 text-[var(--primary)]"/>
						</IconContainer>
						<div>
							<Text variant="sm" className="text-[var(--foreground)]">Produtos</Text>
							<Text variant="xs" className="text-[var(--muted-foreground)]">Gerencie os produtos do seu estoque</Text>
						</div>
					</div>
				</header>	
			</div>
			<section>
				<form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
						<TextField label="Código do Produto" id="product-code" type="text" {...register('productCode')} value={generateProductCode()} />
						<TextField label="Nome do Prduto*" id="product-name" type="text" placeholder="Ex: Parafuso Sextavado M10" {...register('productName')} />
					</div>
					<div className="space-y-2">
						<TextArea label="Descrição" id="product-description" placeholder="Descrição detalhada do produto..." {...register('productDescription')} />
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
						<TextField label="Categoria*" id="product-category" type="text" placeholder="Ex: Parafuso, Chapas, Ferramentas" {...register('productCategory')} />
						<TextField label="Localização*" id="product-location" type="text" placeholder="Ex: Prateleira A1, Galpão 2" {...register('productLocation')} />
					</div>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
						<TextField label="Quantidade Inicial" id="product-quantity-initial" type="number" min={0} {...register('productQuantityInitial')} />
						<TextField label="Quantidade Minima" id="product-quantity-minimum" type="number" min={0} {...register('productQuantityMinimum')} />
						<TextField label="Valor Unitário (R$)" id="product-unit-value" type="number" min={0} step='0.01' {...register('productUnitValue')} />
					</div>
					<div className="space-y-2">
						<TextField label="Fornecedor" id="product-supplier" type="text" placeholder="Nome do fornecedor" {...register('productSupplier')} />
					</div>
					<footer className="flex justify-end gap-3 pt-4">
						<Button variant="tertiary" width="36">Cancelar</Button>
						<Button type="submit" variant="primary" width="36">
							<SaveIcon className="w-5 h-5"/> 
							Salvar Produto
						</Button>
					</footer>
				</form>
			</section>
		</div>
	)
}