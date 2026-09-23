import ItemCard from '../../Card/ItemCard/ItemCard';
import ReactLoading from 'react-loading';
import { Link } from "react-router-dom";

import './FeaturedItems.css';

const FeaturedItems = (props) => {
    const featuredIndexes = [0, 4, 10, 20, 16, 5, 13, 23];
    return (
        <div className="featured__products__container">
            <div className="featured__products">

                <div className="featured__products__header">
                    <h3
                     className="featured__items__header__big">
                        Bestsellers
                    </h3>
                    <Link to="/shop" className="all__collections">
    EXPLORE ALL  <span>→</span>
</Link>
                </div>

                <div className="featured__products__header__line"></div>

                <div className="d-flex min-vh-100 w-100 justify-content-center align-items-center m-auto">

                    {!props.items && (
                        <ReactLoading
                            type="balls"
                            color="var(--grey)"
                            height={100}
                            width={100}
                            className="m-auto"
                        />
                    )}

                    {props.items && (
                        <div className="featured__products__card__container">

                            {featuredIndexes.map((index) => {
    const item = props.items[index];

    return item ? (
        <ItemCard
            key={item._id}
            item={item}
            category="featured"
        />
    ) : null;
})}

                        </div>
                    )}

                </div>
            </div>
        </div>
    );
};

export default FeaturedItems;