# Aplicación de Gestión de Tareas

Este proyecto es una aplicación web desarrollada como parte de una prueba técnica frontend.

Su objetivo es permitir la autenticación de usuarios y la gestión de tareas mediante un sistema de tablero estilo Trello, con funcionalidad de arrastrar y soltar, persistencia de datos y actualizaciones en tiempo real.

## 🚀 Características

- **Autenticación Segura**

  - Integración con API de ReqRes (https://reqres.in/)
  - Almacenamiento encriptado de tokens
  - Persistencia de sesión
  - Verificación de clave dinámica
  - Manejo de latencia simulada

- **Gestión Avanzada de Tareas**

  - Interfaz de arrastrar y soltar
  - Múltiples columnas personalizables
  - Operaciones CRUD de tareas
  - Prevención de duplicados
  - Diálogos de confirmación
  - Identificadores únicos de tareas
  - Validación de caracteres especiales

- **Gestión de Datos**

  - Estructura de datos basada en árbol
  - Sistema de favoritos
  - Filtrado y búsqueda avanzada
  - Caché en memoria
  - Bloqueo optimista
  - Compresión y serialización de datos

- **Actualizaciones en Tiempo Real**
  - Integración con WebSocket/SSE
  - Soporte para edición concurrente
  - Sincronización de tareas en tiempo real

## 🛠️ Tecnologías

- **Framework Frontend**: Next.js
- **Lenguaje**: TypeScript
- **Gestión de Estado**: Redux Toolkit
- **Estilos**: Styled Components
- **Testing**: Jest + React Testing Library
- **Manejo de Formularios**: React Hook Form + Yup
- **Arrastrar y Soltar**: DnD Kit
- **Encriptación**: CryptoJS
- **Compresión**: LZ-String

## 📋 Prerrequisitos

- Node.js (v18 o superior)
- npm o yarn
- Git

## 🚀 Comenzando

1. **Clonar el repositorio**

   ```bash
   git clone https://github.com/yourusername/.git
   cd task-manager
   ```

2. **Instalar dependencias**

   ```bash
   npm install
   # o
   yarn install
   ```

3. **Ejecutar el servidor de desarrollo**

   ```bash
   npm run dev
   # o
   yarn dev
   ```

4. **Abrir el navegador**
   Visitar [http://localhost:3000](http://localhost:3000)

## 🧪 Pruebas

Ejecutar el conjunto de pruebas con:

```bash
npm test
# o
yarn test
```

El proyecto mantiene un mínimo de 50% de cobertura de código.

## 📦 Construir para Producción

```bash
npm run build
# o
yarn build
```

## 🏗️ Estructura del Proyecto

```
src/
├── app/                  # Router de Next.js
├── features/             # Caracteristicas especificas de la app
│   └── .../              # Nombre de la caracteristica
│       └── components/   # Componentes de la caracteristica
│       └── store/        # Redux store
├── shared/               # Código reutilizable y compartido
├── services/             # Integraciones de API y servicios
├── ui/                   # Estilos globales y temas
│   └── components/       # Componentes reutilizables
│   └── icons/            # Iconos pasados a componentes
└── utils/                # Funciones y utilidades
public/                   # Recursos estáticos
tests/                    # Archivos de prueba
```

## 🔒 Características de Seguridad

- Almacenamiento local encriptado
- Gestión segura de sesiones
- Validación y sanitización de entradas
- Rutas API protegidas
- Protección contra CSRF

## 📊 Estructura de Datos

La aplicación utiliza una estructura de datos basada en árbol para la gestión de tareas, proporcionando:

- Organización eficiente de tareas
- Acceso rápido a tareas anidadas
- Actualizaciones de estado optimizadas
- Mejor rendimiento para grandes conjuntos de datos

## 📝 Licencia

Este proyecto está licenciado bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.

## 🔗 Recursos

- [Next.js](https://nextjs.org/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [Styled Components](https://styled-components.com/)
- [ReqRes API](https://reqres.in/)
