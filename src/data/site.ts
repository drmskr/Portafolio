// Datos generales del sitio: edítalos con tu información.
export const site = {
  name: 'Abril',
  basedIn: 'Monterrey',
  expertise: 'Tu especialidad',
  description: 'Portafolio personal con mis proyectos y experiencia.',
  quote: { text: 'Una frase o cita que te represente.', author: 'Autor' },
  email: 'tucorreo@ejemplo.com',
  // Imágenes en /public. Déjalas vacías ('') para mostrar el marcador.
  photo: '', // p. ej. '/foto.jpg'
  artLeft: '', // p. ej. '/flor-izquierda.png'
  artRight: '', // p. ej. '/flor-derecha.png'
  socials: [
    { label: 'GitHub', href: 'https://github.com/drmskr' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/' },
  ],
};

export const nav = [
  { label: 'Proyectos', href: '/projects' },
  { label: 'Sobre mí', href: '/about' },
  { label: 'Contacto', href: '#contacto' },
];
