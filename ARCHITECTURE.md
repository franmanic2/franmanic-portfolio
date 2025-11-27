# Domain-Driven Design - Arquitectura del Proyecto

## Estructura Actual

El proyecto sigue los principios de Domain-Driven Design (DDD) organizando el código en capas lógicas:

### 1. Presentación (Presentation Layer)

- **Componentes de UI**: Todos los archivos `.vue` en `src/components/`
- **Estilos Globales**: `src/assets/main.css`
- **Punto de Entrada**: `src/App.vue` y `src/main.js`

### 2. Dominio (Domain Layer)

Los componentes representan diferentes dominios del negocio:

#### Dominio de Navegación

- `NavigationHeader.vue`: Gestiona la navegación del sitio

#### Dominio de Presentación Personal

- `HeroSection.vue`: Presenta la información profesional
- Responsabilidades:
  - Mostrar perfil profesional
  - Enlaces a redes sociales
  - Tech stack
  - Call-to-action

#### Dominio de Proyectos

- `ProjectCarousel.vue`: Gestiona la presentación de proyectos
- Responsabilidades:
  - Mostrar proyectos en carousel
  - Navegación entre proyectos
  - Información detallada de cada proyecto
  - Enlaces a repositorios

#### Dominio de Efectos Visuales

- `ParticleBackground.vue`: Maneja el efecto de partículas
- Responsabilidades:
  - Renderizado de partículas
  - Interacción con el cursor
  - Conexiones entre partículas

#### Dominio de Información

- `FooterSection.vue`: Información de contacto y enlaces

### 3. Infraestructura (Infrastructure Layer)

- **Build Tool**: Vite (`vite.config.js`)
- **Assets Estáticos**: `public/`
- **Configuración**: `package.json`, `jsconfig.json`

## Principios DDD Aplicados

### 1. Separación de Responsabilidades

Cada componente tiene una responsabilidad única y bien definida.

### 2. Encapsulación

Los componentes encapsulan su lógica y estado interno.

### 3. Composición

`App.vue` compone todos los componentes para crear la aplicación completa.

### 4. Reutilización

Los componentes son independientes y pueden ser reutilizados.

### 5. Mantenibilidad

La estructura clara facilita el mantenimiento y la evolución del código.

## Flujo de Datos

```
Usuario
  ↓
NavigationHeader (Navegación)
  ↓
ParticleBackground (Efectos Visuales)
  ↓
HeroSection (Presentación Personal)
  ↓
ProjectCarousel (Proyectos)
  ↓
FooterSection (Información)
```

## Convenciones de Código

### Componentes Vue

- PascalCase para nombres de componentes
- Composition API con `<script setup>`
- Scoped styles para evitar conflictos CSS

### Estilos

- CSS Variables para consistencia
- Mobile-first approach
- BEM-like naming para clases

### JavaScript

- ES6+ features
- Reactive data con `ref` y `computed`
- Event handlers descriptivos

## Escalabilidad

Para escalar el proyecto, se recomienda:

1. **Crear subcarpetas por dominio**:

   ```
   src/
   ├── components/
   │   ├── navigation/
   │   ├── hero/
   │   ├── projects/
   │   ├── effects/
   │   └── footer/
   ```

2. **Separar lógica de negocio**:

   ```
   src/
   ├── composables/
   │   ├── useParticles.js
   │   ├── useCarousel.js
   │   └── useNavigation.js
   ```

3. **Gestión de estado centralizada**:

   ```
   src/
   ├── stores/
   │   ├── projects.js
   │   └── user.js
   ```

4. **Servicios externos**:
   ```
   src/
   ├── services/
   │   ├── api.js
   │   └── analytics.js
   ```

## Testing Strategy

### Unit Tests

- Componentes individuales
- Funciones de utilidad
- Composables

### Integration Tests

- Flujo de navegación
- Interacción entre componentes

### E2E Tests

- Flujo completo de usuario
- Responsive design
- Accesibilidad

## Performance

### Optimizaciones Implementadas

- Lazy loading de imágenes
- CSS optimizado con variables
- Componentes ligeros
- Canvas optimizado para partículas

### Métricas a Monitorear

- First Contentful Paint (FCP)
- Largest Contentful Paint (LCP)
- Time to Interactive (TTI)
- Cumulative Layout Shift (CLS)
