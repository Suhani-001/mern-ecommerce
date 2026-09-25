// import './ItemCard.css';

// import { useContext, useState } from "react";
// import { Link } from "react-router-dom";

// import { CartItemsContext } from "../../../Context/CartItemsContext";
// import { WishItemsContext } from '../../../Context/WishItemsContext';

// import { IconButton } from '@mui/material';
// import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
// //import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// import FavoriteIcon from '@mui/icons-material/Favorite';

// const ItemCard = (props) => {
//     const ItemCard = (props) => {

//     const [isHovered, setIsHovered] = useState(false);
//     // const [isFavourite, setIsFavourite] = useState(false);
//     const [isFavourite, setIsFavourite] = useState(false);

//     const cartItemsContext = useContext(CartItemsContext);
//     const wishItemsContext = useContext(WishItemsContext);

//     const handleAddToWishList = () => {
//         wishItemsContext.addItem(props.item);
//         setIsFavorite(true);
//     };

//     const handleAddToCart = () => {
//         cartItemsContext.addItem(props.item, 1);
//     };

//     return (
//         <div className="product__card__card">

//             <div className="product__card">

//                 <div
//                     className="product__image"
//                     onMouseEnter={() => setIsHovered(true)}
//                     onMouseLeave={() => setIsHovered(false)}
//                 >
//                     <img
//                         src={`http://localhost:5000/${props.item.category}/${props.item.image[0].filename}`}
//                         alt="item"
//                         className="product__img"
//                     />
//                 </div>

//                 <div className="product__card__detail">

//                     <div className="product__name">
//                         <Link
//                             to={`/item/${props.item.category}/${props.item._id}`}
//                         >
//                             {props.item.name}
//                         </Link>
//                     </div>

//                     <div className="product__description">
//                         <span>{props.item.description}</span>
//                     </div>

//                     {/* Price and Icons */}
//                     <div className="product__card__bottom">

//                         <div className="product__price">
//                             <span>₹{props.item.price}</span>
//                         </div>

//                         <div className="product__card__action">

//                             <IconButton
//                                 onClick={handleAddToWishList}
//                                 sx={{
//                                     borderRadius: '20px',
//                                     width: '40px',
//                                     height: '40px'
//                                 }}
//                             >
//                                 <FavoriteIcon
//                                     sx={{
//                                         width: '22px',
//                                         height: '22px',
//                                         color: isFavorite ? 'red' : 'black'
//                                     }}
//                                 />
//                                 {/* <FavoriteBorderIcon
//                                     sx={{
//                                         width: '22px',
//                                         height: '22px',
//                                         color: 'black'
//                                     }}
//                                 /> */}
//                             </IconButton>

//                             <IconButton
//                                 onClick={handleAddToCart}
//                                 sx={{
//                                     borderRadius: '20px',
//                                     width: '40px',
//                                     height: '40px'
//                                 }}
//                             >
//                                 <AddShoppingCartIcon
//                                     sx={{
//                                         width: '22px',
//                                         height: '22px',
//                                         color: 'black'
//                                     }}
//                                 />
//                             </IconButton>

//                         </div>

//                     </div>

//                 </div>

//             </div>

//         </div>
//     );
// };

// export default ItemCard;



import './ItemCard.css';

import { useContext, useState } from "react";
import { Link } from "react-router-dom";

import { CartItemsContext } from "../../../Context/CartItemsContext";
import { WishItemsContext } from '../../../Context/WishItemsContext';

import { IconButton } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';

const ItemCard = (props) => {

    const [isHovered, setIsHovered] = useState(false);
    const [isFavourite, setIsFavourite] = useState(false);

    const cartItemsContext = useContext(CartItemsContext);
    const wishItemsContext = useContext(WishItemsContext);

    const handleAddToWishList = () => {
    if (isFavourite) {
        setIsFavourite(false);
    } else {
        wishItemsContext.addItem(props.item);
        setIsFavourite(true);
    }
};

    const handleAddToCart = () => {
        cartItemsContext.addItem(props.item, 1);
    };

    return (
        <div className="product__card__card">

            <div className="product__card">

                <div
                    className="product__image"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <img
                        src={`http://localhost:5000/${props.item.category}/${props.item.image[0].filename}`}
                        alt="item"
                        className="product__img"
                    />
                </div>

                <div className="product__card__detail">

                    <div className="product__name">
                        <Link
                            to={`/item/${props.item.category}/${props.item._id}`}
                        >
                            {props.item.name}
                        </Link>
                    </div>

                    <div className="product__description">
                        <span>{props.item.description}</span>
                    </div>

                    <div className="product__card__bottom">

                        <div className="product__price">
                            <span>₹{props.item.price}</span>
                        </div>

                        <div className="product__card__action">

                            {/* ❤️ Wishlist */}
                            <IconButton
                                onClick={handleAddToWishList}
                                sx={{
                                    borderRadius: '20px',
                                    width: '40px',
                                    height: '40px'
                                }}
                            >
                                <FavoriteIcon
                                    // sx={{
                                    //     width: '22px',
                                    //     height: '22px',
                                    //     color: isFavourite ? 'red' : 'white',
                                    //     stroke: isFavourite ? 'none' : 'black',
                                    //     strokeWidth: 1.5
                                    // }}
                                    sx={{
                                    width: '22px',
                                    height: '22px',
                                    color: isFavourite ? 'red' : '#777'
                                }}
                                />
                            </IconButton>

                            {/* 🛒 Cart */}
                            <IconButton
                                onClick={handleAddToCart}
                                sx={{
                                    borderRadius: '20px',
                                    width: '40px',
                                    height: '40px'
                                }}
                            >
                                <AddShoppingCartIcon
                                    sx={{
                                        width: '22px',
                                        height: '22px',
                                        color: 'black'
                                    }}
                                />
                            </IconButton>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default ItemCard;