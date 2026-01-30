/* eslint-disable react-refresh/only-export-components*/
import React from "react";

const KEY_PRODUCTS = 'metalstock:products';

export interface ProductPayload {
	id: string;
	code: string;
	name: string;
	description: string;
	category: string;
	location: string;
	quantityInitial: number;
	quantityMinimum: number;
	unitValue: number;
	supplier: string;
}

interface ProductContextType {
	addProduct: (product: ProductPayload) => void;
	products: ProductPayload[] | null;
}

export const ProductContext = React.createContext<ProductContextType | undefined>(undefined);

export const ProductProvider = ({children}: {children: React.ReactNode}) => {
	const [products, setProducts] = React.useState<ProductPayload[] | null>(null);

	React.useEffect(() => {
		const storedProducts = localStorage.getItem(KEY_PRODUCTS);
		if(storedProducts) {
			setProducts(JSON.parse(storedProducts));
		}
	}, []);

	const addProduct = (product: ProductPayload) => {
		localStorage.setItem(KEY_PRODUCTS, JSON.stringify(product))
		setProducts(products ? [...products, product] : [product])
		console.log('Produto adicionado:', product);
	}

	return (
		<ProductContext.Provider value={{addProduct, products}}>
			{children}
		</ProductContext.Provider>
	)
}

export const useProduct = () => {
	const context = React.useContext(ProductContext);
	if (!context) {
		throw new Error('useProduct deve ser usado dentro de um ProductProvider');
	}
	return context;
}