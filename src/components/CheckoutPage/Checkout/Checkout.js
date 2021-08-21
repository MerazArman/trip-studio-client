
import React, { useContext, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../../App';
import CheckoutForm from '../CheckoutForm/CheckoutForm';


const useStyles = makeStyles({
    table: {
        minWidth: 700,
    },
});



const Checkout = () => {

  
    const [userLogged, setUserLogged] = useContext(UserContext)
    const [addToCart, setAddToCart] = useState({});
    const [formState, setFormState] = useState(true);
    const { serviceId } = useParams();
    useEffect(() => {
        fetch(`https://peaceful-badlands-83974.herokuapp.com/showAllServices/${serviceId}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setAddToCart(data)
            })
    }, [])


    const classes = useStyles();

    return (
        <section>
            <div className="container">
                {
                    formState ?
                        <div>
                            <h1>Checkout Process </h1>

                            <TableContainer component={Paper}>
                                <Table className={classes.table} aria-label="spanning table">
                                    <TableHead>
                                        {/* <TableRow>
<TableCell align="center" colSpan={3}>
  Details
</TableCell>
<TableCell align="right">Price</TableCell>
</TableRow> */}
                                        <TableRow>
                                            <TableCell align="left">Service</TableCell>
                                            <TableCell align="left">Photographer</TableCell>
                                            <TableCell align="right"> Day </TableCell>
                                            <TableCell align="right">price</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        <TableRow key={addToCart}>
                                            <TableCell align="left" >{addToCart.title}</TableCell>
                                            <TableCell align="left">{addToCart.photographer}</TableCell>
                                            <TableCell align="right"> 2 </TableCell>
                                            <TableCell align="right">{addToCart.price}</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell rowSpan={3} />
                                            <TableCell colSpan={2} align="center">Subtotal</TableCell>
                                            <TableCell align="right">{addToCart.price}</TableCell>
                                        </TableRow>
                                        {/* <TableRow>
<TableCell>Tax</TableCell>
<TableCell align="right">{`${(TAX_RATE * 100).toFixed(0)} %`}</TableCell>
<TableCell align="right">{ccyFormat(addToCart.price*TAX_RATE)}</TableCell>
</TableRow> */}
                                        <TableRow>
                                            <TableCell colSpan={2} align="center">Total</TableCell>
                                            <TableCell align="right">{addToCart.price}</TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </TableContainer>

                            <button className="btn btn-all float-end" onClick={() => !setFormState()} style={{ marginTop: "1%" }} >Checkout</button>
                        </div>

                        : <CheckoutForm addToCart={addToCart} userLogged={userLogged}></CheckoutForm>
                }
            </div>
        </section>
    );
};

export default Checkout;