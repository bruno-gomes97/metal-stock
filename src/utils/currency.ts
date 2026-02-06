export const formatCurrency = (value: number | string, currency: string = 'BRL'): string => {
	if (typeof value === 'string') {
		value = parseFloat(value);
	}
	return value.toLocaleString('pt-BR', {
		style: 'currency',
		currency,
	});
}

export const calculateTotalValue = (unitValue: number | string, quantity: number): string => {
	if (typeof unitValue === 'string') {
		unitValue = parseFloat(unitValue);
	}

	const totalValue = unitValue * quantity;
	return formatCurrency(totalValue);
}