
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ReactLoading from 'react-loading';
import Category from '../components/Category/Category';

const CategoryView = () => {
    const { id } = useParams();

    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    const categoryName = {
        ethnic: "Ethnic Wear",
        casual: "Casual Wear",
        footwear: "Footwear",
        jewellery: "Jewellery",
        workwear: "Workwear",
        kidswear: "Kidswear",
        handbags: "Handbags",
        watch: "Watches",
        sportswear: "Sportswear"
    };

    useEffect(() => {
        setLoading(true);

        axios.get("http://localhost:5000/api/items")
            .then((res) => {
                const filteredItems = res.data.filter((item) =>
                    Array.isArray(item.subcategories) &&
                    item.subcategories.some(
                        (subcategory) =>
                            subcategory.toLowerCase() ===
                            id?.toLowerCase()
                    )
                );

                setItems(filteredItems);
            })
            .catch((err) => {
                console.error("Error fetching products:", err);
            })
            .finally(() => {
                setLoading(false);
            });

        window.scrollTo(0, 0);
    }, [id]);

    return (
        <div className="w-100">
            {loading ? (
                <div className="d-flex justify-content-center align-items-center min-vh-100">
                    <ReactLoading
                        type="balls"
                        color="var(--grey)"
                        height={100}
                        width={100}
                    />
                </div>
            ) : (
                <Category
                    name={categoryName[id?.toLowerCase()] || id}
                    items={items}
                    category={id}
                />
            )}
        </div>
    );
};

export default CategoryView;