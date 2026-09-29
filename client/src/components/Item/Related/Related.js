import { useState, useEffect } from 'react';
import axios from 'axios';
import RelatedCard from '../../Card/RelatedCard/RelatedCard';
import './Related.css';

const Related = (props) => {

    const [items, setItems] = useState([]);

    useEffect(() => {

        axios
            .get("http://localhost:5000/api/items")
            .then((res) => {

                // Same category + current product ko remove
                const relatedItems = res.data.filter(
                    (item) =>
                        item.category === props.category &&
                        item._id !== props.itemId
                );

                setItems(relatedItems);

            })
            .catch((err) => {
                console.log("Related products error:", err);
            });

    }, [props.category, props.itemId]);


    return (
        <div className="related__products">

            <div className="related__header__container">

                <div className="related__header">
                    <h2>Recommended Products</h2>
                </div>

                <div className="related__header__line"></div>

            </div>


            <div className="related__card__container">

                <div className="related__product__card">

                    {items.length > 0 ? (

                        items
                            .slice(0, 4)
                            .map((item) => (
                                <RelatedCard
                                    key={item._id}
                                    item={item}
                                />
                            ))

                    ) : (

                        <p className="no__related__products">
                            No recommended products available.
                        </p>

                    )}

                </div>

            </div>

        </div>
    );
};

export default Related;