import { useState } from 'react';

export function useLocalState<T>(clave: string, valorInicial: T) {
  const [valor, setValor] = useState<T>(() => {
    const guardado = localStorage.getItem(clave);
    return guardado ? JSON.parse(guardado) : valorInicial;
  });

  function actualizar(nuevoValor: T) {
    setValor(nuevoValor);
    localStorage.setItem(clave, JSON.stringify(nuevoValor));
  }

  return [valor, actualizar] as const;
}
