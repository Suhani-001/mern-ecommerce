import { Link } from "react-router-dom";
import "./CategoryCard.css";
import { Button } from "@mui/material";

const CategoryCard = (props) => {
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
                    <Link to={props.data.url}>
                        <Button
                            variant="outlined"
                            sx={{
                                width: "100px",
                                height: "35px",
                                padding: "4px 10px",
                                borderRadius: "20px",
                                borderColor: "#000000",
                                backgroundColor: "transparent",
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

            <h3
            className="category__name">
                {props.data.name}
            </h3>

        </div>
    );
};

export default CategoryCard;