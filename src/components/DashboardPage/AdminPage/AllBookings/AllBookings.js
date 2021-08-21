import React, { useEffect, useState } from 'react';
import AdminNavbar from '../../../Shared/AdminNavbar/AdminNavbar';
import MainSidebar from '../../../Shared/Sidebar/MainSidebar';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import { Checkbox } from '@material-ui/core';




const useStyles = makeStyles({
    root: {
        width: '100%',
    },
    container: {
        maxHeight: 440,
    },
});




const AllBookings = () => {

    const [allOrders, setAllOrders] = useState([]);
    useEffect(() => {
        fetch(`https://peaceful-badlands-83974.herokuapp.com/showAllBookings`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setAllOrders(data)

            })
    }, []);

    const [inputStatus, setInputStatus] = useState({
        name:''
    });
    const inputValidate = (e) =>{
        let userInfo = { ...inputStatus }
        userInfo[e.target.name] = e.target.value;
        setInputStatus(userInfo)
    }


    const [status, setStatus] = useState({});
   



    const statusUpdateHandler = (id) => {
        console.log('id', id);
        fetch(`https://peaceful-badlands-83974.herokuapp.com/showAllBookings/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setStatus(data)
            })

    }

    const statusHandler = (id) => {
        let updateInfo = {...status, ...inputStatus}
        console.log(updateInfo, id);
        //     fetch(`https://peaceful-badlands-83974.herokuapp.com/updateStatus/${id}`, {
        //     method: 'PATCH',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify()
        // })
        // .then(response => response.json())
        // .then(result => {
        //         console.log('update', result);
        //     })
        
     }



    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };


    return (
        <main style={{}} className="">
            <div className="mb-5">
                <AdminNavbar></AdminNavbar>
            </div>
            <MainSidebar ></MainSidebar>


            <Paper className={`${classes.root} container responsive-dashboard`}  style={{ width: '80%', marginLeft: '20%', marginTop: '100px', border: '', boxShadow: '5px 5px 15px 5px rgba(0, 0, 0, 0.2)' }}>
                <TableContainer className={classes.container}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                <TableCell padding="checkbox">
                                    <Checkbox
                                        inputProps={{ 'aria-label': 'select all desserts' }}
                                    />
                                </TableCell>
                                <TableCell>Name</TableCell>
                                <TableCell >Email</TableCell>
                                <TableCell>Service</TableCell>
                                <TableCell >User Id</TableCell>
                                <TableCell align="center">Day</TableCell>
                                <TableCell>Payment</TableCell>
                                <TableCell align="center">Price</TableCell>
                                <TableCell> Status</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {allOrders.map(orders =>
                                <TableRow>
                                    <TableCell padding="checkbox">
                                        <Checkbox
                                            inputProps={{ 'aria-label': 'select all desserts' }}
                                        />
                                    </TableCell>
                                    <TableCell>{orders.name} </TableCell>
                                    <TableCell>{orders.email}</TableCell>
                                    <TableCell>{orders.title} </TableCell>
                                    <TableCell>{orders._id}</TableCell>
                                    <TableCell align="center"> 4</TableCell>
                                    <TableCell>Paypal</TableCell>
                                    <TableCell align="center">{orders.price} </TableCell>
                                    <TableCell >
                                        <div class="dropdown text-center">
                                            <button class="btn btn-info dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" onClick={() => statusUpdateHandler(orders._id)}>
                                                {orders.status}
                                            </button>
                                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                                <form onSubmit={() => statusHandler(status._id)}>
                                                    <li className="form-group">  
                                                        <input type="text" className="form-control" name="status" placeholder={status.status} style={{color:'green'}} onBlur={inputValidate} />
                                                        </li>
                                                    <li className="form-group"><input className="btn btn-info" type="submit" value="Update" /> </li>
                                                </form>

                                            </ul>

                                        </div>
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={allOrders.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onChangePage={handleChangePage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                />
            </Paper>

        </main>
    );
};

export default AllBookings;


