import { z } from 'zod';

export const signUpFormSchema = z
	.object({
		email: z.string().email({message: 'Email inválido'}).max(255),
		password: z.string().min(8, {message: 'A senha deve ter no mínimo 8 caracteres'}).max(128),
	})

