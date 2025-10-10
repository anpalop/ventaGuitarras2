
# Proyecto VentaGuitarras

## Requisitos
- Node.js >= 18
- npm >= 9

## Instalación

### 1. Instalar dependencias del frontend y backend

```bash
# Desde la raíz del proyecto
npm install

# Instalar dependencias del backend
cd backend
npm install
```

### 2. Ejecutar el backend (Express)

```bash
cd backend
npm run dev
```

El backend se ejecuta en el puerto **3001**.

### 3. Ejecutar el frontend (React + Vite)

```bash
cd .. # Volver a la raíz del proyecto
npm run dev
```

El frontend se ejecuta en el puerto **5173** (o el siguiente disponible).

## Comandos útiles

- `npm run dev` (en frontend): Inicia el servidor de desarrollo de Vite.
- `npm run build` (en frontend): Compila la aplicación para producción.
- `npm run dev` (en backend): Inicia el servidor Express con nodemon.
- `npm run start` (en backend): Inicia el servidor Express en modo producción.

## Estructura

- `/src` → Código fuente del frontend (React + TypeScript)
- `/backend` → Código fuente del backend (Node.js + Express)

## Funcionalidades
- Autenticación (login, registro, rutas privadas)
- Formulario de contacto
- Listado de usuarios
- Consumo de API con fetch y axios
- Validación y manejo de errores
- Layout moderno con Tailwind

## Notas
- Si el puerto 5173 está ocupado, Vite usará el siguiente disponible (ej: 5174).
- El backend debe estar corriendo para que el frontend pueda enviar datos y autenticarse.
- Si tienes problemas con estilos, asegúrate de que el archivo `postcss.config.cjs` existe y contiene la configuración correcta.

## Ejemplo de inicio rápido
```bash
# Instalar todo
npm install
cd backend && npm install

# Ejecutar backend
npm run dev

# En otra terminal, ejecutar frontend
cd ..
npm run dev
```

---

Si tienes dudas, revisa los archivos README y la estructura del proyecto.
