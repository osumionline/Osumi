import { ProjectInfoInterface } from '@interfaces/interfaces';

export const PROJECTS: ProjectInfoInterface[] = [
  {
    id: 'ofw',
    title: 'Osumi Framework',
    short: 'Framework para desarrollo de aplicaciones PHP.',
    description:
      '<p>Osumi Framework es un pequeño framework orientado al modelo MVC (Modelo, Vista, Controlador) para la creación de aplicaciones web, tanto pequeñas como grandes.</p><p>La documentación del framework, con casos de uso y ejemplos, se encuentra en <a href="https://framework.osumi.dev" target="_blank">Osumi Framework Docs</a>.</p><p>El repositorio con todo el código está disponible en <a href="https://github.com/osumionline/framework" target="_blank">Github</a> bajo licencia MIT.</p>',
    photos: 5,
  },
  {
    id: 'escaparatv',
    title: 'EscaparaTV',
    short: 'Sistema de gestión de contenido publicitario.',
    description:
      '<p>EscaparaTV es un sistema de gestión de contenidos publicitarios. Se trata de una pantalla que se instala en el escaparate del usuario donde mostrar productos, ofertas o todo tipo de imagenes.</p><p>Mediante un panel web, el usuario puede personalizar la apariencia, los elementos a mostrar o la duración de cada imagen.</p><p>Con el planificador se pueden mostrar distintas secuencias de productos en distintas franjas horarias.</p>',
    photos: 5,
  },
];

export const PORTFOLIO: ProjectInfoInterface[] = [
  {
    id: 'appsorteos',
    title: 'App Sorteos',
    short: 'Aplicación web para crear sorteos en Facebook.',
    description:
      '<p>Aplicación web para crear sorteos en Facebook. Permite varios clientes o proyectos, gestionar varios tipos de sorteos, programarlos y ver estadísticas de los participantes.</p>',
    photos: 7,
  },
  {
    id: 'blog-oinarri',
    title: 'Blog Oinarri',
    short:
      'Creación de tema personalizado para Wordpress para el blog de Oinarri SGR.',
    description:
      '<p>Creación de tema personalizado para Wordpress para el blog de Oinarri SGR.</p>',
    photos: 3,
  },
  {
    id: 'ediciones-la-bahia',
    title: 'Ediciones La Bahía',
    short: 'Página web para Ediciones La Bahía.',
    description:
      '<p>Página web para Ediciones La Bahía. Se trata de un gestor de contenidos para manejar colecciones, publicaciones, autores, etc de la editorial.</p>',
    photos: 8,
  },
  {
    id: 'eiser',
    title: 'Eiser',
    short: 'Página web para Eiser Hogares Ecoeficientes.',
    description:
      '<p>Página web para Eiser Hogares Ecoeficientes. Gestor de contenido con multiples gamas, productos, galerías de fotos y noticias.</p>',
    photos: 7,
  },
  {
    id: 'modelos-punto-azul',
    title: 'Modelos con un punto azul',
    short: 'Aplicación/juego en Facebook para Solán de Cabras.',
    description:
      '<p>Aplicación en Facebook para Solán de Cabras que permite crear tu propia portada de revista, personalizandola con distintos aspectos y efectos.</p>',
    photos: 5,
  },
];
