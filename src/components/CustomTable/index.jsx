import {
  Box,
  Paper,
  Grid,
  Table,
  TableRow,
  TableBody,
  TableCell,
  TableHead,
  TableContainer,
} from '@mui/material';

import PropTypes from 'prop-types';

const CustomTable = ({
  size,
  data,
  headers,
  tableRow,
}) => (
  <Paper sx={{ width: '100%', overflow: 'hidden' }}>
    <TableContainer sx={{ maxHeight: 440 }}>
      <Table stickyHeader size={size}>
        <TableHead>
          <TableRow>
            {headers.map((item) => (
              <TableCell
                variant="head"
                key={item.label}
                align={item.align}
              >
                {item.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => tableRow(row))}
        </TableBody>
      </Table>
    </TableContainer>
  </Paper>

);

export default CustomTable;

CustomTable.propTypes = {
  size: PropTypes.string,
  data: PropTypes.array.isRequired,
  headers: PropTypes.array.isRequired,
  tableRow: PropTypes.func.isRequired,
};

CustomTable.defaultProps = {
  size: 'small',
};
