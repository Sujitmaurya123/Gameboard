import * as React from 'react';
import {Paper,Table,TableBody,TableCell,TableContainer,TableHead,TablePagination,TableRow}from '@mui/material';

const columns = [
  { id: 'name', label: 'Name', minWidth: 170 },
  { id: 'gtid', label: 'GT ID', minWidth: 100 },
  {
    id: 'emailid',
    label: 'EMAIL ID',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'phonenumber',
    label: 'PHONE NUMBER',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
 
];

function createData(name, gtid, emailid, phonenumber) {
  
  return { name, gtid, emailid, phonenumber };
}

const rows = [
  createData('Joshua J The Shott', 'GT1234X', 'theshott1235@gmail.com', 8893340024),
  createData('Joshua J The Shott', 'GT1234X', 'theshott1235@gmail.com', 8893340024),
  createData('Joshua J The Shott', 'GT1234X', 'theshott1235@gmail.com', 8893340024),
  createData('Joshua J The Shott', 'GT1234X', 'theshott1235@gmail.com', 8893340024),
  createData('Joshua J The Shott', 'GT1234X', 'theshott1235@gmail.com', 8893340024),
  createData('Joshua J The Shott', 'GT1234X', 'theshott1235@gmail.com', 8893340024),
  createData('Joshua J The Shott', 'GT1234X', 'theshott1235@gmail.com', 8893340024),
  createData('Joshua J The Shott', 'GT1234X', 'theshott1235@gmail.com', 8893340024),
  createData('Joshua J The Shott', 'GT1234X', 'theshott1235@gmail.com', 8893340024),
];

export default function StickyHeadTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth ,backgroundColor:"black",color:"white"}}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      // const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {/* {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value} */}
                            {row[column.id]}
                            

                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}


//  {rows && rows
//                                 .slice(page * rowperpage, page * rowperpage + rowperpage)
//                                 .map((row, i) => {
//                                     return (
//                                         <TableRow key={i}>
//                                             {columns && columns.map((column, i) => {
//                                                 let value = row[column.id];
//                                                 return (
//                                                     <TableCell key={value}>
//                                                         {value}
//                                                     </TableCell>
//                                                 )
//                                             })}
//                                         </TableRow>
//                                     )
//                                 })}