# 🔗 Linktree Clone - React + Vite + Tailwind CSS v3

Un clon moderno y completamente responsivo de Linktree construido con React, Vite y Tailwind CSS v3. Incluye modo oscuro/claro, animaciones suaves y está optimizado para GitHub Pages.

## ✨ Características

- 🌓 **Modo Oscuro/Claro** - Toggle automático con persistencia de preferencias
- 📱 **Completamente Responsivo** - Diseño optimizado para todos los dispositivos
- 🎨 **Animaciones Suaves** - Efectos de hover y transiciones elegantes
- 🚀 **Optimizado para GitHub Pages** - Deploy automático configurado
- ⚡ **React + Vite** - Desarrollo rápido y build optimizado
- 🎯 **Tailwind CSS v3** - Estilos utilitarios y diseño moderno
- 🔧 **Fácil Personalización** - Configuración centralizada
- 📊 **Botón de Compartir** - Compatible con Web Share API
- 🎪 **Iconos Lucide** - Iconos modernos y consistentes

## 🚀 Inicio Rápido

### 1. Clonar y Configurar

```bash
git clone https://github.com/tu-usuario/linktree-react.git
cd linktree-react
npm install
```

### 2. Ejecutar en Desarrollo

```bash
npm run dev
```

### 3. Personalizar tu Perfil

Edita el archivo `src/App.jsx` y modifica el objeto `PROFILE_CONFIG`:

```javascript
const PROFILE_CONFIG = {
  name: "Tu Nombre Aquí",
  bio: "Tu descripción personal",
  avatar: "URL_de_tu_foto_de_perfil",
  links: [
    {
      id: 1,
      title: "Mi Portfolio",
      description: "Explora mis proyectos",
      href: "https://tu-portfolio.com",
      icon: Globe,
      gradient: true, // Para destacar enlaces importantes
    },
    // Agregar más enlaces...
  ],
  social: [
    {
      id: 1,
      href: "https://github.com/tu-usuario",
      icon: Github,
      label: "GitHub",
      color: "github",
    },
    // Agregar más redes sociales...
  ],
};
```

## 🎨 Personalización

### Colores y Tema

Los colores están definidos en `tailwind.config.js`. Puedes personalizar:

```javascript
colors: {
  'bg-light': '#f7f9fc',      // Fondo claro
  'bg-dark': '#1a1a1a',       // Fondo oscuro
  'card-light': '#ffffff',     // Tarjetas modo claro
  'card-dark': '#2d2d2d',      // Tarjetas modo oscuro
  'accent': '#6366f1',         // Color de acento
  'accent-hover': '#4f46e5',   // Color de acento hover
}
```

### Iconos Disponibles

El proyecto usa iconos de [Lucide React](https://lucide.dev/). Algunos iconos populares:

- `Globe` - Sitios web
- `Github` - GitHub
- `Linkedin` - LinkedIn
- `Instagram` - Instagram
- `Mail` - Email
- `Phone` - Teléfono
- `Briefcase` - Servicios profesionales
- `BookOpen` - Blog/Artículos
- `Code` - Proyectos de código

## 🚀 Deploy en GitHub Pages

### 1. Preparar el Repositorio

1. Crea un nuevo repositorio en GitHub
2. Sube tu código:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/tu-usuario/tu-repositorio.git
git push -u origin main
```

### 2. Configurar GitHub Pages

1. Ve a tu repositorio en GitHub
2. Ve a **Settings** > **Pages**
3. En **Source**, selecciona **Deploy from a branch**
4. Selecciona la rama **gh-pages**
5. Haz clic en **Save**

### 3. Actualizar Configuración

En `package.json`, actualiza la homepage:

```json
"homepage": "https://tu-usuario.github.io/tu-repositorio"
```

En `vite.config.js`, actualiza la base:

```javascript
base: "/tu-repositorio/";
```

### 4. Hacer Deploy

```bash
npm run deploy
```

¡Tu sitio estará disponible en `https://tu-usuario.github.io/tu-repositorio`!

## 📁 Estructura del Proyecto

```
linktree-react/
├── src/
│   ├── components/
│   │   ├── LinkButton.jsx      # Componente de botón de enlace
│   │   ├── SocialButton.jsx    # Componente de botón social
│   │   └── ThemeToggle.jsx     # Toggle de tema oscuro/claro
│   ├── contexts/
│   │   └── ThemeContext.jsx    # Contexto para manejo de tema
│   ├── App.jsx                 # Componente principal
│   ├── main.jsx               # Punto de entrada
│   └── index.css              # Estilos globales con Tailwind
├── tailwind.config.js         # Configuración de Tailwind
├── postcss.config.js          # Configuración de PostCSS
├── vite.config.js            # Configuración de Vite
└── package.json              # Dependencias y scripts
```

## 🛠️ Scripts Disponibles

- `npm run dev` - Servidor de desarrollo
- `npm run build` - Build para producción
- `npm run preview` - Preview del build
- `npm run lint` - Linter de código
- `npm run deploy` - Deploy a GitHub Pages

## 🔧 Tecnologías Utilizadas

- **React 19** - Biblioteca de JavaScript para interfaces de usuario
- **Vite 6** - Build tool y dev server ultrarrápido
- **Tailwind CSS v3** - Framework de CSS utilitario
- **Lucide React** - Iconos modernos y consistentes
- **PostCSS** - Herramienta para transformar CSS
- **GitHub Pages** - Hosting gratuito para sitios estáticos

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 🙏 Créditos

- Basado en el proyecto original de [anuswarrrao](https://github.com/anuswarrrao/linktree-clone)
- Iconos por [Lucide](https://lucide.dev/)
- Construido con [React](https://reactjs.org/), [Vite](https://vitejs.dev/) y [Tailwind CSS](https://tailwindcss.com/)

---

⭐ **¡Si te gusta este proyecto, dale una estrella en GitHub!**

## 🌟 ¿Por qué Tailwind CSS v3?

Decidimos usar **Tailwind CSS v3.4.16** (la versión estable más reciente) en lugar de v4 por las siguientes razones:

- ✅ **Estabilidad completa** - Versión probada en producción
- ✅ **Documentación completa** - Toda la documentación disponible
- ✅ **Compatibilidad total** - Compatible con todas las herramientas del ecosistema
- ✅ **Sin bugs** - Versión madura sin problemas conocidos
- ✅ **Fácil mantenimiento** - Amplia comunidad y soporte

Tailwind CSS v4 está en desarrollo activo y, aunque trae mejoras interesantes, aún presenta algunos problemas de compatibilidad que podrían afectar la experiencia de desarrollo.
