import React from 'react';
import { paths } from './paths';

interface Routes {
  path: string;
  component: any;
}

const animalPage = React.lazy(() => import('../pages/animal/AnimalPage'));


export const routes: Routes[] = [
  {
    path: paths.animals,
    component: animalPage,
  }
];
