
import React from 'react';
import { Service, DiveSpot } from './types';

export const SERVICES: Service[] = [
  {
    id: 'bautismo',
    title: 'Bautismo de Buceo',
    description: 'Tu primera experiencia bajo el agua en un entorno seguro y controlado. ¡Descubre la ingravidez!',
    price: '75€',
    category: 'experience',
    imageUrl: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'open-water',
    title: 'PADI Open Water Diver',
    description: 'El curso de buceo más popular del mundo. Obtén tu certificación internacional para bucear hasta 18m.',
    price: '390€',
    category: 'course',
    imageUrl: 'https://images.unsplash.com/photo-1518331647614-7a1f04cd34cf?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'guided-dive',
    title: 'Inmersión Guiada',
    description: 'Salidas diarias en barco a los mejores puntos de la Reserva Marina del Cabo de San Antonio.',
    price: '45€',
    category: 'dive',
    imageUrl: 'https://images.unsplash.com/photo-1682687220198-88e9bdea9931?auto=format&fit=crop&q=80&w=800'
  }
];

export const DIVE_SPOTS: DiveSpot[] = [
  {
    name: 'La Catedral',
    depth: '14-20m',
    level: 'Avanzado',
    description: 'Un espectacular túnel con juegos de luces increíbles y abundante vida marina.'
  },
  {
    name: 'Cabo San Antonio',
    depth: '12-22m',
    level: 'Todos los niveles',
    description: 'Reserva marina con grandes meros, bancos de barracudas y doradas.'
  },
  {
    name: 'El Mono',
    depth: '10-18m',
    level: 'Iniciación',
    description: 'Pared rocosa ideal para ver pulpos, morenas y vida pequeña.'
  }
];

export const NAVIGATION_LINKS = [
  { name: 'Inicio', href: '#home' },
  { name: 'Cursos', href: '#services' },
  { name: 'Inmersiones', href: '#spots' },
  { name: 'Centro', href: '#about' },
  { name: 'Contacto', href: '#contact' },
];
