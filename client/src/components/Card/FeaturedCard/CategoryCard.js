
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import "./CategoryCard.css";

const CategoryCard = (props) => {
    const categorySlug = {
        "Ethnic": "ethnic",
        "Casual": "casual",
        "Footwear": "footwear",
        "Jewellery": "jewellery",
        "Workwear": "workwear",
        "Kidswear": "kidswear",
        "Handbags": "handbags",
        "Watch": "watch",
        "Sportswear": "sportswear"
    }[props.data.name] || props.data.name.toLowerCase();

    return (
        <div className="category__card__card">
            <div className="category__image">
                <img
                    src={props.data.image}
                    alt={props.data.name}
                    className="product__img"
                />
            </div>

            <div className="category__card__detail">
                <div className="category__card__action">
                    <Link to={`/category/${categorySlug}`}>
                        <Button
                            variant="outlined"
                            sx={{
                                width: "100px",
                                height: "35px",
                                padding: "4px 10px",
                                borderRadius: "20px",
                                borderColor: "#000000",
                                backgroundColor: "#E5E5E5",
                                color: "#000000",
                                fontWeight: "700",
                                fontSize: "0.75rem",
                                whiteSpace: "nowrap",
                                "&:hover": {
                                    backgroundColor: "#000000",
                                    borderColor: "#000000",
                                    color: "#FFFFFF"
                                }
                            }}
                        >
                            EXPLORE
                        </Button>
                    </Link>
                </div>
            </div>

            <h3 className="category__name">
                {props.data.name}
            </h3>
        </div>
    );
};

export default CategoryCard;