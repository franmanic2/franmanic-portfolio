# Francisco Hurtado - Portfolio

Portafolio profesional minimalista futurista en blanco y negro, diseñado para mostrar proyectos y experiencia como Full Stack Developer.

## 🎨 Características

- **Diseño Minimalista Futurista**: Tema en blanco y negro con detalles modernos
- **Efecto de Partículas Interactivo**: Inspirado en Antigravity, con partículas que reaccionan al movimiento del cursor
- **Carousel de Proyectos**: Presentación rotativa de proyectos con imágenes, descripciones y enlaces a GitHub
- **Responsive Design**: Optimizado para todos los dispositivos
- **SEO Optimizado**: Meta tags y estructura semántica
- **Animaciones Suaves**: Transiciones y efectos visuales premium

## 🛠️ Tecnologías

- **Vue.js 3**: Framework principal
- **Vite**: Build tool y dev server
- **CSS Variables**: Sistema de diseño consistente
- **Canvas API**: Para el efecto de partículas
- **Google Fonts**: Inter y Fira Code

## 📁 Estructura del Proyecto (Domain-Driven Design)

```
franmanic-portfolio/
├── public/
│   ├── images/              # Imágenes de proyectos
│   └── favicon.ico
├── src/
│   ├── assets/
│   │   └── main.css         # Sistema de diseño global
│   ├── components/
│   │   ├── ParticleBackground.vue    # Efecto de partículas
│   │   ├── NavigationHeader.vue      # Header con navegación
│   │   ├── HeroSection.vue           # Sección principal con perfil
│   │   ├── ProjectCarousel.vue       # Carousel de proyectos
│   │   └── FooterSection.vue         # Footer con enlaces
│   ├── App.vue              # Componente raíz
│   └── main.js              # Punto de entrada
├── index.html
├── package.json
└── vite.config.js
```

## 🚀 Instalación y Uso

### Requisitos Previos

- Node.js (v20.19.0 o superior)
- npm

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/franmanic/franmanic-portfolio.git

# Navegar al directorio
cd franmanic-portfolio

# Instalar dependencias
npm install
```

### Desarrollo

```bash
# Iniciar servidor de desarrollo
npm run dev

# El sitio estará disponible en http://localhost:5173/
```

### Producción

```bash
# Construir para producción
npm run build

# Vista previa de la build
npm run preview
```

## 🎯 Componentes Principales

### ParticleBackground

Efecto de fondo interactivo con partículas que reaccionan al movimiento del cursor. Las partículas se conectan entre sí cuando están cerca, creando un efecto de red dinámica.

### NavigationHeader

Header fijo con navegación suave, efecto de scroll y menú hamburguesa responsive para móviles.

### HeroSection

Sección principal con:

- Imagen de perfil
- Nombre y título profesional
- Biografía
- Enlaces a redes sociales (LinkedIn, Instagram, TikTok, Email)
- Tech stack badges
- CTA para ver proyectos

### ProjectCarousel

Carousel interactivo de proyectos con:

- Navegación por flechas
- Indicadores de posición
- Cards con imagen, título, descripción
- Sección de contribución personal
- Tags de tecnologías
- Enlace a GitHub con overlay

### FooterSection

Footer completo con:

- Información de marca
- Enlaces de navegación
- Información de contacto
- Iconos de redes sociales
- Copyright

## 🎨 Sistema de Diseño

El proyecto utiliza CSS Variables para un sistema de diseño consistente:

### Colores

- **Background**: Negro (#000000)
- **Text**: Blanco (#ffffff)
- **Accent**: Blanco para destacados
- **Borders**: Grises oscuros

### Tipografía

- **Primary**: Inter (Google Fonts)
- **Monospace**: Fira Code

### Espaciado

Sistema de espaciado consistente desde `--spacing-xs` hasta `--spacing-3xl`

### Animaciones

Transiciones suaves con cubic-bezier para una experiencia premium

## 📝 Personalización

### Actualizar Proyectos

Edita `src/components/ProjectCarousel.vue` y modifica el array `projects`:

```javascript
const projects = ref([
  {
    title: "Nombre del Proyecto",
    description: "Descripción del proyecto",
    contribution: "Tu contribución específica",
    image: "/images/proyecto.png",
    github: "https://github.com/usuario/repo",
    tags: ["Tech1", "Tech2", "Tech3"],
  },
]);
```

### Actualizar Información Personal

Edita `src/components/HeroSection.vue` para actualizar:

- Nombre y título
- Biografía
- Enlaces de redes sociales
- Tech stack

### Cambiar Colores

Modifica las variables CSS en `src/assets/main.css`:

```css
:root {
  --color-bg-primary: #000000;
  --color-text-primary: #ffffff;
  /* ... más variables */
}
```

## 🌐 SEO

El proyecto incluye:

- Meta tags optimizados
- Open Graph tags para redes sociales
- Estructura semántica HTML5
- Títulos descriptivos
- Alt text en imágenes

## 📱 Responsive

Breakpoints principales:

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🔧 Mejoras Futuras

- [ ] Modo oscuro/claro toggle
- [ ] Animaciones de scroll más avanzadas
- [ ] Blog integrado
- [ ] Formulario de contacto
- [ ] Integración con CMS
- [ ] Analytics
- [ ] Internacionalización (i18n)

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

## 👤 Autor

**Francisco Hurtado**

- LinkedIn: [francisco-hurtado-p](https://www.linkedin.com/in/francisco-hurtado-p-0b9602301/)
- GitHub: [@franmanic](https://github.com/franmanic)
- Instagram: [@franmanic](https://www.instagram.com/franmanic)
- TikTok: [@franmanic](https://www.tiktok.com/@franmanic)

## 🙏 Agradecimientos

- Inspiración del efecto de partículas: [Antigravity by Google](https://antigravity.google/)
- Fuentes: [Google Fonts](https://fonts.google.com/)
- Iconos: SVG personalizados

---

⭐ Si te gusta este proyecto, no olvides darle una estrella en GitHub!
