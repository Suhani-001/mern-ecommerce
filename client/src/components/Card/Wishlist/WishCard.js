import { useContext, useState } from 'react';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { IconButton, Button } from '@mui/material';

import './WishCard.css';

import { WishItemsContext } from '../../../Context/WishItemsContext';
import { CartItemsContext } from '../../../Context/CartItemsContext';


const WishCard = (props) => {

    const wishItems = useContext(WishItemsContext);
    const cartItems = useContext(CartItemsContext);

    const [showPopup, setShowPopup] = useState(false);


    // REMOVE FROM WISHLIST
    const handelRemoveItem = () => {
        wishItems.removeItem(props.item);
    };


    // ADD TO CART
    const handelAddToCart = () => {

        // Add one item to cart
        cartItems.addItem(
            props.item,
            1,
            props.item.size?.[0]
        );

        // Show popup
        setShowPopup(true);

        // Hide popup
        setTimeout(() => {
            setShowPopup(false);
        }, 2000);
    };


    return (
        <div className="wishcard">

            {/* POPUP */}
            {showPopup && (
                <div className="wishlist__cart__popup">
                    Product added to cart
                </div>
            )}


            {/* REMOVE */}
            <div className="wish__remove__item__icon">

                <IconButton
                    onClick={handelRemoveItem}
                    className="wish__remove__button"
                >
                    <HighlightOffIcon />
                </IconButton>

            </div>


            {/* IMAGE */}
            <div className="wish__item__image">

                <img
                    src={`http://localhost:5000/${props.item.category}/${props.item.image[0].filename}`}
                    alt={props.item.name}
                    className="wish__image"
                />

            </div>


            {/* NAME */}
            <div className="wish__item__name">
                {props.item.name}
            </div>


            {/* PRICE */}
            <div className="wish__item__price">
                ₹{props.item.price}
            </div>


            {/* ADD TO CART */}
            <div className="add__to__cart">

                <Button
                    variant="outlined"
                    onClick={handelAddToCart}
                    className="wish__cart__button"
                >
                    ADD TO CART
                </Button>

            </div>

        </div>
    );
};

export default WishCard;