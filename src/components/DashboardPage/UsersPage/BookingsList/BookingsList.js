import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';






const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: '#fd6001',
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  
  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);

const useStyles = makeStyles({
    table: {
      minWidth: 700,
    }
  });

const BookingsList = ({bookings}) => {

    const classes = useStyles();

    return (
        <div className="container-fluid">
           <div className=" content-margin">
           <h1> Orders List </h1>
            <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead >
          <TableRow >
            {/* <StyledTableCell>Email</StyledTableCell> */}
            <StyledTableCell >User-Id</StyledTableCell>
            <StyledTableCell >User</StyledTableCell>
            <StyledTableCell >Service</StyledTableCell>
            <StyledTableCell >Price</StyledTableCell>
            <StyledTableCell >Status</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {bookings.map((booking) => (
            <StyledTableRow key={booking.email}>
              {/* <StyledTableCell component="th" scope="row">
                {booking.email}
              </StyledTableCell> */}
              <StyledTableCell >{booking._id}</StyledTableCell>
              <StyledTableCell >{booking.name}</StyledTableCell>
              <StyledTableCell >{booking.title}</StyledTableCell>
              <StyledTableCell >{booking.price}</StyledTableCell>
              <StyledTableCell >{booking.status}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
           </div>
        </div>
    );
};

export default BookingsList;