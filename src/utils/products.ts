export const generateProductCode = () => {
	const prefix = 'PRD-';
	const ramdomNumber = Math.floor(100000 + Math.random() * 900000);
	return `${prefix}${ramdomNumber}`;
}