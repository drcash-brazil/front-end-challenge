import { Fragment } from 'react';
import PropTypes from 'prop-types';
import {
  List,
  ListItem,
  ListItemText,
  ListItemButton,
} from '@mui/material';

import {
  Info,
} from '@mui/icons-material';

const CustomList = ({ data }) => (
  <List style={{
    overflowY: 'auto',
    borderRadius: '5px',
    border: '1px #eaeaea solid',
  }}
  >
    {data.length === 0 ? (
      <ListItem
        dense
        style={{
          gap: '10px',
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <Info />
        <p>Sem dados</p>
      </ListItem>

    ) : (
      data.map((item, index) => (
        <Fragment key={item}>
          <ListItem dense>
            <ListItemButton>
              <ListItemText primary={item.nome} />
            </ListItemButton>
          </ListItem>
        </Fragment>
      ))
    )}

  </List>
);

export default CustomList;

CustomList.propTypes = {
  data: PropTypes.array.isRequired,
};
