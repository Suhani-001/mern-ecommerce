import './Landing.css';

import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const Landing = () => {
    return (
        <div className="landing__container">

            <div className="landing__header__container">

                <div className="landing__header">


                    <h1 className="landing__header__main">
                        YOUR NEXT SIGNATURE LOOK
                    </h1>
                    <h3 className="landing__header__discount">
                        Find your style. Make it yours.
                    </h3>

                    <Link to="/shop">
                        <Button
                            variant="outlined"
                            sx={{
                                width: '190px',
                                height: '50px',
                                borderRadius: '20px',
                                fontWeight: '700',
                                backgroundColor: 'transparent',
                                borderColor: 'white',
                                color: 'white',
                                '&:hover': {
                                    backgroundColor: 'white',
                                    color: 'black',
                                    borderColor: 'white'
                                }
                            }}
                        >
                            SHOP NOW
                        </Button>
                    </Link>

                </div>

            </div>

        </div>
    );
};

export default Landing;