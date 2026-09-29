import { useEffect, useState } from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from '../routes/Home';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import ManageAccount from '../components/Account/ManageAccount/ManageAccount';
import MyAccount from '../components/Account/MyAccount/MyAccount';
import Shop from '../components/Shop/Shop';
import ItemView from '../routes/ItemView';
import CategoryView from '../routes/CategoryView';
import SearchView from '../routes/Search';
import CartItemsProvider from '../Context/CartItemsProvider';
import Login from '../components/Authentication/Login/Login';
import Register from '../components/Authentication/Register/Register';
import Wishlist from '../components/Wishlist';
import WishItemsProvider from '../Context/WishItemsProvider';
import Checkout from '../components/Checkout/Checkout';
import SearchProvider from '../Context/SearchProvider';
import Shipping from '../components/Footer/Help/Shipping';
import Refund from '../components/Footer/Help/Refund';
import FAQ from '../components/Footer/Help/FAQ';
import Contact from '../components/Footer/Help/Contact';

function App() {

  const [showTopButton, setShowTopButton] = useState(false);

  useEffect(() => {

    const handleScroll = () => {

      if (window.scrollY > 300) {
        setShowTopButton(true);
      } else {
        setShowTopButton(false);
      }

    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

  }, []);


  const scrollToTop = () => {

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  };


  return (

    <CartItemsProvider>

      <WishItemsProvider>

        <SearchProvider>

          <Router>

            <Header />

            <Routes>

              {/* HOME */}
              <Route index element={<Home />} />


              {/* ACCOUNT */}
              <Route path="/account">

                <Route path="me" element={<MyAccount />} />

                <Route
                  path="manage"
                  element={<ManageAccount />}
                />

                <Route
                  path="login"
                  element={<Login />}
                />

                <Route
                  path="register"
                  element={<Register />}
                />

                <Route
                  path="*"
                  element={<Login />}
                />

              </Route>


              {/* SHOP */}
              <Route
                path="/shop"
                element={<Shop />}
              />


              {/* CHECKOUT */}
              <Route
                path="/checkout"
                element={<Checkout />}
              />


              {/* CATEGORY */}
              <Route path="/category">

                <Route
                  path=":id"
                  element={<CategoryView />}
                />

              </Route>


              {/* PRODUCT */}
              <Route path="/item">

                <Route path="/item/men">

                  <Route
                    path=":id"
                    element={<ItemView />}
                  />

                </Route>


                <Route path="/item/women">

                  <Route
                    path=":id"
                    element={<ItemView />}
                  />

                </Route>


                <Route path="/item/kids">

                  <Route
                    path=":id"
                    element={<ItemView />}
                  />

                </Route>


                <Route path="/item/featured">

                  <Route
                    path=":id"
                    element={<ItemView />}
                  />

                </Route>

              </Route>


              {/* WISHLIST */}
              <Route
                path="/wishlist"
                element={<Wishlist />}
              />


              {/* SEARCH */}
              <Route
                path="/search/*"
                element={<SearchView />}
              />

                {/* <FOOTER help pages> */}
                <Route path="/shipping" element={<Shipping />} />
                <Route path="/refund" element={<Refund />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>


            <Footer />


            {/* ADMIN */}
            <Routes>

              <Route
                path="/admin"
                element={<Wishlist />}
              />

            </Routes>


            {/* BACK TO TOP */}

            {showTopButton && (

              <button
                className="back__to__top"
                onClick={scrollToTop}
              >
                ↑
              </button>

            )}

          </Router>

        </SearchProvider>

      </WishItemsProvider>

    </CartItemsProvider>

  );

}

export default App;