import React, { useEffect, useState } from 'react';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import AdminNavbar from '../../../Shared/AdminNavbar/AdminNavbar';
import MainSidebar from '../../../Shared/Sidebar/MainSidebar';
import { makeStyles,withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Checkbox } from '@material-ui/core';
import TablePagination from '@material-ui/core/TablePagination';
import { useHistory } from 'react-router-dom';


const useStyles = makeStyles({
    root: {
        width: '100%',
    },
    container: {
        maxHeight: 440,
    },
});

const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: '#083A73',
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);



const AllServices = () => {


    const history = useHistory()
    const classes = useStyles()
    const [allServices, setAllServices] = useState([]);

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };


    useEffect(() => {
        fetch(`https://peaceful-badlands-83974.herokuapp.com/showAllServices`)
            .then(res => res.json())
            .then(data => setAllServices(data))
    }, [])


    const deleteServiceHandler = (serviceId) =>{
        console.log('key', serviceId);
        fetch(`https://peaceful-badlands-83974.herokuapp.com/deleteService/${serviceId}`, {
          method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
          console.log(data);
        })
        alert('are you sure you want to delete?')
        history.push('/')
  }


    // console.log(allServices);
    return (
        <main>
            <div className="mb-5">
                <AdminNavbar></AdminNavbar>
            </div>
            <MainSidebar ></MainSidebar>

            <Paper className={`${classes.root} container`} style={{ width: '80%', marginLeft: '20%', marginTop: '100px', border: ''}}>
                <TableContainer className={classes.container}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                         
                                <TableRow style={{backgroundColor: '#083A73'}}>
                                    <StyledTableCell style={{backgroundColor: '#083A73'}} padding="checkbox">
                                        <Checkbox
                                            inputProps={{ 'aria-label': 'select all desserts' }}
                                        />
                                    </StyledTableCell>
                                    <StyledTableCell  align="left">Service</StyledTableCell>
                                    <StyledTableCell align="left"> Photographer</StyledTableCell>
                                    <StyledTableCell align="left"> Service Id</StyledTableCell>
                                    <StyledTableCell align="center">Price</StyledTableCell>
                                    <StyledTableCell align="center">Update</StyledTableCell>
                                    <StyledTableCell align="center">Delete</StyledTableCell>
                                </TableRow>
         
                        </TableHead>
                        <TableBody>
                            {allServices.map((service) => (
                                <TableRow>
                                    <TableCell padding="checkbox">
                                        <Checkbox
                                            inputProps={{ 'aria-label': 'select all desserts' }}
                                        />
                                    </TableCell>
                                    <TableCell align="left"> {service.title}</TableCell>
                                    <TableCell align="left">{service.photographer}</TableCell>
                                    <TableCell align="left">{ service._id}</TableCell>
                                    <TableCell align="center">{service.price}</TableCell>
                                    <TableCell align="center"> <button className="btn btn-sign"> Update </button> </TableCell>
                                    <TableCell align="center">  <button className="btn btn-sign" onClick={() => deleteServiceHandler(service._id)}> Delete </button> </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={allServices.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onChangePage={handleChangePage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                />
            </Paper>

        </main>
    );
};

export default AllServices;



// style={{ width: '80%', marginLeft: '20%', marginTop: '100px', border: '', boxShadow: '5px 5px 15px 5px rgba(0, 0, 0, 0.2)' }}