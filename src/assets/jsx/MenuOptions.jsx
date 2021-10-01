import React from 'react';
import PlaceSharpIcon from '@material-ui/icons/PlaceSharp';
import Info from '@material-ui/icons/Info';

const MenuWithTopBar = [
  [
    {
      title: 'Clínicas',
      image: <PlaceSharpIcon />,
      route: 'clinic'
    },
    {
      title: 'Agradecimentos',
      image: <Info />,
      route: 'thanks'
    }
  ]
];

export default MenuWithTopBar;
