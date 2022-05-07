import { mask } from 'remask';

export function maskCpf(value: string) {
  if (!value) return;
  const cpf = ['999.999.999-99'];

  return mask(value, cpf);
}
