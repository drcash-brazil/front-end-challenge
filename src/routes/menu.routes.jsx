import { v4 as uuid } from 'uuid';

const menuRoutes = () => [
  {
    id: uuid(),
    title: 'Clínicas',
    key: '/clinicas',
    routes: [
      {
        id: uuid(),
        path: '/clinicas',
        title: 'Clínica',
      },
      {
        id: uuid(),
        path: '/clinicas/adicionar',
        title: 'Nova clínica',
      },
    ],
  },
  {
    id: uuid(),
    title: 'Redes',
    key: '/redes',
    routes: [
      {
        id: uuid(),
        path: '/redes',
        title: 'Redes',
      },
      {
        id: uuid(),
        path: '/redes/adicionar',
        title: 'Nova redes',
      },
    ],
  },
  {
    id: uuid(),
    title: 'Funcionários',
    key: '/funcionarios',
    routes: [
      {
        id: uuid(),
        path: '/funcionarios',
        title: 'Funcionários',
      },
      {
        id: uuid(),
        path: '/funcionarios/adicionar',
        title: 'Novo funcionário',
      },
    ],
  },
];

export default menuRoutes;
