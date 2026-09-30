import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Detail.css';

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Button, IconButton } from '@mui/material';

import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import FavoriteIcon from '@mui/icons-material/Favorite';

import { CartItemsContext } from '../../../Context/CartItemsContext';
import { WishItemsContext } from '../../../Context/WishItemsContext';


const Detail = (props) => {

    const [quantity, setQuantity] = useState(1);
    const [size, setSize] = useState(props.item.size[0]);
    const [isFavorite, setIsFavorite] = useState(false);

    const cartItems = useContext(CartItemsContext);
    const wishItems = useContext(WishItemsContext);

    const navigate = useNavigate();


    // SIZE CHANGE
    const handleSizeChange = (event) => {
        setSize(event.target.value);
    };


    // INCREASE QUANTITY
    const handelQuantityIncrement = () => {
        setQuantity((prev) => prev + 1);
    };


    // DECREASE QUANTITY
    const handelQuantityDecrement = () => {
        setQuantity((prev) => Math.max(1, prev - 1));
    };


    // ADD TO BAG + OPEN CHECKOUT
    const handelAddToCart = (event) => {

        event.preventDefault();

        cartItems.addItem(
            props.item,
            quantity,
            size
        );

        navigate("/checkout");
    };


    // FAVORITE
    const handelAddToWish = () => {

        wishItems.addItem(props.item);

        setIsFavorite((prev) => !prev);
    };


    return (

        <div className="product__detail__container">

            <div className="product__detail">


                {/* PRODUCT INFORMATION */}

                <div className="product__main__detail">

                    <div className="product__name__main">
                        {props.item.name}
                    </div>


                    <div className="product__detail__description">
                        {props.item.description}
                    </div>


                    <div className="product__color">

                        <div className="product-color-label">
                            COLOR
                        </div>

                        <div
                            className="product-color"
                            style={{
                                backgroundColor: props.item.color
                            }}
                        ></div>

                    </div>


                    <div className="product__price__detail">
                        ₹{props.item.price}
                    </div>

                </div>



                {/* PRODUCT FORM */}

                <form
                    onSubmit={handelAddToCart}
                    className="product__form"
                >


                    {/* QUANTITY + SIZE */}

                    <div className="product__quantity__and__size">


                        {/* QUANTITY */}

                        <div className="product__quantity">

                            <IconButton
                                type="button"
                                onClick={handelQuantityIncrement}
                            >
                                <AddCircleIcon />
                            </IconButton>


                            <div className="quantity__input">
                                {quantity}
                            </div>


                            <IconButton
                                type="button"
                                onClick={handelQuantityDecrement}
                            >
                                <RemoveCircleIcon />
                            </IconButton>

                        </div>



                        {/* SIZE */}

                        <div className="product size">

                            <Box sx={{ minWidth: 100 }}>

                                <FormControl
                                    fullWidth
                                    size="small"
                                >

                                    <InputLabel>
                                        Size
                                    </InputLabel>


                                    <Select
                                        value={size}
                                        label="Size"
                                        onChange={handleSizeChange}
                                    >

                                        {props.item.size.map((size) => (

                                            <MenuItem
                                                key={size}
                                                value={size}
                                            >
                                                {size}
                                            </MenuItem>

                                        ))}

                                    </Select>

                                </FormControl>

                            </Box>

                        </div>

                    </div>



                    {/* ACTION BUTTONS */}

                    <div className="collect__item__actions">

                        <div className="add__cart__add__wish">


                            {/* ADD TO BAG */}

                            <div className="add__cart">

                                <Button
                                    type="submit"
                                    variant="outlined"
                                    size="large"
                                    sx={{
                                        minWidth: 200,
                                        height: 48,

                                        backgroundColor: 'black',
                                        borderColor: 'black',
                                        color: 'white',

                                        '&:hover': {
                                            backgroundColor: 'black',
                                            borderColor: 'black',
                                            color: 'white'
                                        }
                                    }}
                                >
                                    ADD TO BAG
                                </Button>

                            </div>



                            {/* FAVORITE */}

                            <div className="add__wish">

                                <IconButton
                                    type="button"
                                    onClick={handelAddToWish}
                                    sx={{
                                        width: 44,
                                        height: 44,
                                        padding: 0,
                                        borderRadius: '50%',

                                        backgroundColor: '#f5f5f5',

                                        '&:hover': {
                                            backgroundColor: '#f5f5f5'
                                        }
                                    }}
                                >

                                    <FavoriteIcon
                                        sx={{
                                            width: 22,
                                            height: 22,

                                            color: isFavorite
                                                ? 'red'
                                                : '#777'
                                        }}
                                    />

                                </IconButton>

                            </div>

                        </div>

                    </div>

                </form>

            </div>

        </div>
    );
};


export default Detail;