export function validarEmail(email: string): boolean {
  return /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
}

export function validarTexto(texto: string): boolean {
  return texto.trim().length > 0;
}
