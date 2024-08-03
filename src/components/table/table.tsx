import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const StockTable = ({ rows }: {rows: any[]}) => {
  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: 'bold', backgroundColor: "#03346E", color: 'white' }}>Time</TableCell>
              <TableCell sx={{ fontWeight: 'bold', backgroundColor: "#03346E", color: 'white' }}>Price</TableCell>
              <TableCell sx={{ fontWeight: 'bold', backgroundColor: "#03346E", color: 'white' }}>Change</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow hover role="checkbox" tabIndex={-1} key={`${index}`}>
                <TableCell>{row.time}</TableCell>
                <TableCell>{row.price}</TableCell>
                <TableCell>{row.change}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default StockTable;
