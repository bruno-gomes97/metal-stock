import { zodResolver } from '@hookform/resolvers/zod';
import { AlertCircleIcon, WrenchIcon } from 'lucide-react';
import { useForm } from 'react-hook-form';

import { useNavigate } from 'react-router-dom';
import { signUpFormSchema } from '../../_schemas/auth-schema';
import Button from '../../components/button';
import IconContainer from '../../components/icon-container';
import Text from '../../components/text';
import TextField from '../../components/text-field';
import { useAuth, type LoginPayload } from '../../context/authContext';

export default function LoginPage() {
  const { login, errorMsg } = useAuth();
  const navigate = useNavigate();
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signUpFormSchema),
  });
  
  const onSubmit = (payload: LoginPayload) => {
    const success = login(payload);
    if (success) {
      reset();
      navigate('/dashboard');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="bg-[var(--card)] text-[var(--card-foreground)] flex flex-col gap-6 rounded-xl border py-6 shadow-sm w-full max-w-md border-[var(--border)]">
        <div data-slot="card-header" className="flex flex-col items-center gap-2 px-6 text-center space-y-4">
          <IconContainer colorBg="primary">
            <WrenchIcon className="w-8 h-8 text-[var(--primary-foreground)]" />
          </IconContainer>
          <div>
            <Text variant="xl" className="text-[var(--foreground)]">
              MetalStock
            </Text>
            <Text variant="sm" className="text-[var(--muted-foreground)]">
              Sistema de Controle de Estoque
            </Text>
          </div>
        </div>
      
        <div data-slot="card-content" className="px-6">
          <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
            {errorMsg && (
              <div className='flex items-center gap-2 p-3 bg-[var(--destructive)]/10 border border-[var(--destructive)]/20 rounded-md text-[var(--destructive)]'>
                <AlertCircleIcon className='w-4 h-4' />
                <Text variant="sm">{errorMsg}</Text>
              </div>
            )}
            <TextField label="Email" type="email" id="email" placeholder="seu@email.com" {...register('email')} />
            {errors.email && (
              <Text variant="xs" className="text-red-500">
                {errors.email.message}
              </Text>
            )}
            <TextField label="Senha" type="password" id="password" placeholder="Sua senha" {...register('password')} />
            {errors.password && (
              <Text variant="xs" className="text-red-500">
                {errors.password.message}
              </Text>
            )}
            <Button type='submit'>Entrar</Button>
          </form>
          <div className="mt-6 p-4 bg-[var(--muted)] rounded-lg">
            <Text variant="xs" className="text-[var(--muted-foreground)] mb-2">
              Credenciais padrão:
            </Text>
            <Text variant="xs" className="text-[var(--foreground)]">
              Email: admin@metalstock.com
            </Text>
            <Text variant="xs" className="text-[var(--foreground)]">
              Senha: admin123
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
}
