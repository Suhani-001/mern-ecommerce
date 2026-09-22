import { Fragment, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import Landing from "../components/Landing/Landing";
import FeaturedItems from "../components/Featured/Items/FetauredItems";
import FeaturedCategories from "../components/Featured/Categories/FeaturedCategories";

import { TabTitle } from "../utils/General";
import discountBanner from "../asset/brand/discount-banner.png";
import newBanner from "../asset/brand/new-banner.png";

const Home = () => {
    const [featuredItems, setFeaturedItems] = useState();

    TabTitle("Home - vastra");

    useEffect(() => {
        axios
            .get("http://localhost:5000/api/items")
            .then((res) => setFeaturedItems(res.data))
            .catch((err) => console.log(err));

        window.scrollTo(0, 0);
    }, []);

    return (
        <Fragment>
            <Landing />

            <FeaturedCategories />

            {/* Discount Banner */}
            <div className="discount__banner">

    <img
        src={discountBanner}
        alt="Discount Offer"
    />

    <div className="discount__content">

        <h2>UP TO 40% OFF</h2>
        

        <p>On Every Diamond jewellery</p>

        <Link to="/shop" className="discount__button">
            SHOP NOW
        </Link>

    </div>

</div>

            <FeaturedItems items={featuredItems} />

            <div className="new__banner">
    <img src={newBanner} alt="New Offer" />

    <div className="new__banner__content">
        <h2>MEET YOUR NEW FAVORITE STYLE</h2>
        <p>Find What Feels Like You</p>

        <Link to="/shop" className="new__banner__button">
            EXPLORE
        </Link>
    </div>
</div>
        </Fragment>

        
    );
};

export default Home;