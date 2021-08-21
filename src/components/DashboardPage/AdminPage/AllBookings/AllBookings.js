import React, { useEffect, useState } from 'react';
// import fakePrice from '../../../ServicesDetailsPage/PricesType/fakePrice';
// import AdminNavbar from '../../../Shared/AdminNavbar/AdminNavbar';
// import MainSidebar from '../../../Shared/Sidebar/MainSidebar';
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
import { useForm } from 'react-hook-form';
// import Parcel from './Parcel';
// import { useForm } from 'react-hook-form';

// import { useContext } from 'react';
// import { OrdersStatus, UserContext } from '../../../../App';



const useStyles = makeStyles({
    root: {
        width: '100%',
    },
    container: {
        maxHeight: 440,
    },
});




const AllBookings = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const [allOrders, setAllOrders] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:4050/showAllBookings`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setAllOrders(data)

            })
    }, []);

    // const statusChange = () =>{
    //     const orders = allOrders.map(order => order._id)
    //     fetch(`http://localhost:4050/updateStatus/:${orders}`,)
    // }


    const [status, setStatus] = useState({});
    //   const [statusType, setStatusType] = useContext(OrdersStatus)
    // fetch(`http://localhost:4050/updateStatus/:${orders}`, {
    //     method: 'PATCH',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(selectStatus)
    // })
    //     .then(response => response.json())
    //     .then(result => {
    //         console.log('update');
    //     })

    // const [status, setStatus] = useState('');
    // const statusInputHandle = (e) =>{
    //     setStatus(e.target.value)
    //     console.log(status);
    // }

    const handleStatusChange = (id) => {
        //  fetch(`http://localhost:4050/updateStatus/${id}`, {
        //     method: 'PATCH',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify(status)
        // })
        //     .then(response => response.json())
        //     .then(result => {
        //         console.log('update', result);
        //     })
        console.log(id, 'update btn not working');

    }

    const statusUpdateHandler = (id) => {
        console.log('id', id);
        fetch(`http://localhost:4050/showAllBookings/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setStatus(data)
            })

    }

    const onSubmit = (data) => {
        console.log(data);
            fetch(`http://localhost:4050/updateStatus/${status._id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(result => {
                console.log('update', result);
            })
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
            {/* <div className="mb-5">
                <AdminNavbar></AdminNavbar>
            </div>
            <MainSidebar ></MainSidebar> */}


            <Paper className={`${classes.root} container responsive-dashboard`} >
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
                                                <form onSubmit={handleSubmit(onSubmit)}>
                                                    <li className="form-group">  
                                                        <input type="text" className="form-control" placeholder={status.status} style={{color:'green'}} {...register("status", { required: true, maxLength: 100 })} />
                                                        {errors.status && <span className="text-danger">This field is required</span>} 
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


// style={{ width: '80%', marginLeft: '20%', marginTop: '100px', border: '', boxShadow: '5px 5px 15px 5px rgba(0, 0, 0, 0.2)' }}
{/* <button className="btn btn-info" onClick={() => statusUpdateHandler(orders._id)}> {orders.status} </button>   */ }

{/* <div className="dropdown">
                                            <button  class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                {orders.services.status}
                                            </button>
                                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                                <li> <input className="dropdown-item form-control" onBlur={statusInputHandle} name="status" type="text" placeholder="Status"/> </li>
                                                <li> <button className="btn btn-info dropdown-item " style={{backgroundColor:'rgb(1, 210, 142)', color:'#fff'}} onClick={() => handleStatusChange(orders._id)}> Update </button></li>
                                               
                                            </ul>
                                        </div> */}