import _get from 'lodash/get';
import PropTypes from 'prop-types';
import MaterialTable from '@material-ui/core/Table';
import Paper from '@material-ui/core/Paper';
import TableRow from '@material-ui/core/TableRow';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableContainer from '@material-ui/core/TableContainer';

const Table = ({
  data,
  rowIndex,
  headers,
  cells,
  formatElements
}) => (
  <div className="ba br2 b--black-10 w-100">
    <TableContainer component={Paper}>
      <MaterialTable>
        <TableHead>
          <TableRow>
            {headers.map((header) => (
              <TableCell key={header} align="center">
                {header}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => {
            const customFields = formatElements(row);

            return (
              <TableRow key={row[rowIndex]} className="pointer">
                {cells.map((cell) => {
                  const customField = _get(customFields, cell, null);
                  if (customField) {
                    return (
                      <TableCell key={cell} align="center">
                        {customField}
                      </TableCell>
                    );
                  }
                  
                  return (
                    <TableCell key={cell} align="center">
                      {_get(row, cell, '---')}
                    </TableCell>
                  );
                })}
              </TableRow>
            );
          })}
        </TableBody>
      </MaterialTable>
    </TableContainer>
  </div>
);

Table.defaultProps = {
  data: [],
  rowIndex: 'id',
  headers: [],
  cells: [],
  formatElements: () => {}
};

Table.propTypes = {
  data: PropTypes.array,
  rowIndex: PropTypes.string.isRequired,
  headers: PropTypes.arrayOf(PropTypes.string).isRequired,
  cells: PropTypes.arrayOf(PropTypes.string).isRequired,
  formatElements: PropTypes.func,
};

export default Table;
