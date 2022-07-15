import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { ColumnInterface } from '../../interfaces/tableInterfaces';


interface TableProps {
    columns: ColumnInterface[];
    entityList: any[];
    onHandleClick: (row: any) => void;
  }

  const TableComponent: React.FC<TableProps> = ({
    columns,
    entityList,
    onHandleClick,
  }) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650}} aria-label="simple table">
        <TableHead>
          <TableRow>
          {columns.map((column) => (
              <TableCell
                key={column.name}
                align="left"
                style={{ minWidth: column.minWidth, fontWeight:900, textAlign:'center' }}
              >
                {column.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {entityList.map((row, idx) => (
            <TableRow key={row.id} onClick={() => onHandleClick(row)} hover>
              {columns.map(({ name }, index) => (
                <TableCell key={index} component="th" scope="row" style={{textAlign:'center'}}>
                  {row[name]}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableComponent;
