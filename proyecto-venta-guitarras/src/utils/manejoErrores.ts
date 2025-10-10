export function manejarError(error: unknown): string {
  if (error instanceof Error) return error.message;
  return 'Error desconocido';
}
