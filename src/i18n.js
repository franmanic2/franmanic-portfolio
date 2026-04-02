import { createI18n } from 'vue-i18n'

const messages = {
  es: {
    nav: {
      home: 'Inicio',
      projects: 'Proyectos',
      education: 'Educación',
      contact: 'Contacto',
      downloadCV: 'Descargar CV'
    },
    hero: {
      subtitle: 'Frontend Developer & Software Engineer',
      bio: 'Desarrollador Frontend apasionado por crear soluciones tecnológicas innovadoras. Especializado en desarrollo web moderno, arquitectura de software y diseño de sistemas escalables.',
      viewProjects: 'Ver Proyectos',
      viewEducation: 'Ver Educación',
      available: 'Disponible para oportunidades',
      role: 'Desarrollador Frontend',
      university: 'UPC - Lima, Perú',
      openTo: 'Abierto a nuevas oportunidades',
      passion: 'crear interfaces de usuario increíbles'
    },
    projects: {
      title: 'Proyectos Destacados',
      description: 'Una selección de trabajos en los que he contribuido y desarrollado',
      contribution: 'Mi aporte:',
      viewGithub: 'Ver en GitHub',
      items: {
        quasar: {
          desc: 'Landing page para la empresa de venta de landing pages.',
          cont: 'Desarrollo del frontend con Astro'
        },
        sportli: {
          desc: 'Aplicacion web para gestion de clientes dentro de un gimnasio.',
          cont: 'Desarrollo del frontend con Vue.js y Firebase'
        },
        eraser: {
          desc: 'Web para borrado de textos especificos dentro de textos grandes',
          cont: 'Desarrollo del frontend con Vue.js'
        },
        guionify: {
          desc: 'Aplicacion web para la creacion de guiones para videos.',
          cont: 'Desarrollo del frontend con Vue.js'
        },
        elixir: {
          desc: 'Aplicacion para la gestion de lotes de produccion de vino',
          cont: 'Desarrollo de componentes del apartado front-end para la visualizacion de lotes de produccion'
        },
        gastrogo: {
          desc: 'Aplicacion web para la gestion de pedidos de restaurantes para clientes corporativos.',
          cont: 'Creacion de componentes y arquitectura de la aplicacion web'
        },
        plantcare: {
          desc: 'Aplicacion web para la visualizacion del estado de plantas a travez de dispositivos IoT',
          cont: 'Desarrollo de componentes del apartado community dentro de la web'
        }
      }
    },
    experience: {
      title: 'Experiencia & Educación',
      subtitle: 'Mi trayectoria profesional y académica',
      workTitle: 'Experiencia Laboral',
      educationTitle: 'Educación',
      certTitle: 'Certificaciones',
      work: {
        fleemo: {
          desc: 'Asesoramiento en estrategias de crecimiento en redes sociales y desarrollo de paginas web'
        },
        enproyec: {
          desc: 'Practicante de soporte y desarrollo de software'
        },
        frantech: {
          desc: 'Mantenimiento de Hardware para PC y Laptops de manera independiente'
        }
      },
      edu: {
        upc: {
          desc: 'Especialización en desarrollo web y arquitectura de software'
        },
        english: {
          desc: 'Certificación en inglés en plataforma de Cambridge'
        }
      }
    },
    stack: {
      title: 'Mis Skills & Herramientas',
      subtitle: 'El arsenal tecnológico que utilizo para transformar ideas en experiencias digitales rápidas, seguras y escalables.'
    },
    footer: {
      tagline: 'Desarrollador Frontend & Ingeniero de Software',
      links: 'Enlaces',
      contact: 'Contacto',
      followMe: 'Encuéntrame en',
      rights: 'Todos los derechos reservados.',
      madeWith: 'Hecho con',
      using: 'usando Vue.js',
      headline: 'Construyamos algo',
      headlineAccent: 'grandioso.',
      navLabel: 'Navegación',
      builtWith: 'Construido con'
    }
  },
  en: {
    nav: {
      home: 'Home',
      projects: 'Projects',
      education: 'Education',
      contact: 'Contact',
      downloadCV: 'Download CV'
    },
    hero: {
      subtitle: 'Frontend Developer & Software Engineer',
      bio: 'Passionate Frontend Developer focused on creating innovative technological solutions. Specialized in modern web development, software architecture, and scalable system design.',
      viewProjects: 'View Projects',
      viewEducation: 'View Education',
      available: 'Available for opportunities',
      role: 'Frontend Developer',
      university: 'UPC - Lima, Peru',
      openTo: 'Open to new opportunities',
      passion: 'building great user interfaces'
    },
    projects: {
      title: 'Featured Projects',
      description: 'A selection of work I have contributed to and developed',
      contribution: 'My contribution:',
      viewGithub: 'View on GitHub',
      items: {
        quasar: {
          desc: 'Landing page for the landing page development company.',
          cont: 'Frontend development with Astro'
        },
        sportli: {
          desc: 'Web application for managing clients within a gym.',
          cont: 'Frontend development with Vue.js and Firebase'
        },
        eraser: {
          desc: 'Web tool for erasing specific texts within large texts',
          cont: 'Frontend development with Vue.js'
        },
        guionify: {
          desc: 'Web application for creating scripts for videos.',
          cont: 'Frontend development with Vue.js'
        },
        elixir: {
          desc: 'Application for managing wine production batches',
          cont: 'Development of frontend components for production batch visualization'
        },
        gastrogo: {
          desc: 'Web application for managing corporate client restaurant orders.',
          cont: 'Creation of components and web application architecture'
        },
        plantcare: {
          desc: 'Web application for visualizing plant status through IoT devices',
          cont: 'Development of community section components within the web'
        }
      }
    },
    experience: {
      title: 'Experience & Education',
      subtitle: 'My professional and academic journey',
      workTitle: 'Work Experience',
      educationTitle: 'Education',
      certTitle: 'Certifications',
      work: {
        fleemo: {
          desc: 'Advising on social media growth strategies and web development'
        },
        enproyec: {
          desc: 'Software support and development intern'
        },
        frantech: {
          desc: 'Independent PC and Laptop hardware maintenance'
        }
      },
      edu: {
        upc: {
          desc: 'Specialization in web development and software architecture'
        },
        english: {
          desc: 'English certification on Cambridge platform'
        }
      }
    },
    stack: {
      title: 'My Skills & Tools',
      subtitle: 'The carefully selected technological arsenal I use to turn ideas into robust, secure, and highly scalable digital experiences.'
    },
    footer: {
      tagline: 'Frontend Developer & Software Engineer',
      links: 'Links',
      contact: 'Contact',
      followMe: 'Find me on',
      rights: 'All rights reserved.',
      madeWith: 'Made with',
      using: 'using Vue.js',
      headline: "Let's build something",
      headlineAccent: 'great.',
      navLabel: 'Navigation',
      builtWith: 'Built with'
    }
  }
}

const i18n = createI18n({
  legacy: false, // use Composition API
  locale: 'es', // default language
  fallbackLocale: 'en',
  messages
})

export default i18n
