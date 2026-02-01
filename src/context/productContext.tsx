/* eslint-disable react-refresh/only-export-components*/
import React from "react";

export const KEY_PRODUCTS = 'metalstock:products';

export interface ProductPayload extends Record<string, unknown> {
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
	removeProduct: (productId: string) => void;
	updateProduct: (product: ProductPayload) => void;
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
		setProducts(prevProducts => {
			const updatedProducts = prevProducts && Array.isArray(prevProducts) ? [...prevProducts, product] : [product];
			localStorage.setItem(KEY_PRODUCTS, JSON.stringify(updatedProducts));
			return updatedProducts;
		});
	}

	const removeProduct = (productId: string) => {
		setProducts(prev => {
			if(!prev) return null;
			const updatedProducts = prev.filter(product => product.id !== productId);
			localStorage.setItem(KEY_PRODUCTS, JSON.stringify(updatedProducts));
			return updatedProducts;
		})
	}

	const updateProduct = (updatedProduct: ProductPayload) => {
		setProducts(prev => {
			if(!prev) return null;
			const updatedProducts = prev.map(product => 
				product.id === updatedProduct.id ? updatedProduct : product
			);
			localStorage.setItem(KEY_PRODUCTS, JSON.stringify(updatedProducts));
			return updatedProducts;
		});
	}

	return (
		<ProductContext.Provider value={{addProduct, removeProduct, updateProduct, products}}>
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