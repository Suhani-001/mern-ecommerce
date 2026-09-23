import { useContext, useEffect, useState } from 'react';

import { useSearchParams } from 'react-router-dom';

import axios from 'axios';

import { SearchContext } from '../../Context/SearchContext';

import ItemCard from '../Card/ItemCard/ItemCard';

import './index.css';

const Search = () => {

    const search = useContext(SearchContext);

    const [searchParam, setSearchParam] = useSearchParams();

    const [items, setItems] = useState([]);

    const [loading, setLoading] = useState(true);


    console.log("SEARCH QUERY:", search.searchQuery);


    useEffect(() => {

        setSearchParam(
            { query: search.searchQuery || '' },
            { replace: true }
        );

        axios
            .get("http://localhost:5000/api/items")
            .then((res) => {

                console.log("TOTAL ITEMS:", res.data.length);
                console.log("ITEMS:", res.data);

                setItems(res.data);

                setLoading(false);
            })
            .catch((err) => {

                console.log("ERROR:", err);

                setLoading(false);
            });

    }, [search.searchQuery, setSearchParam]);


    const query = (search.searchQuery || '').toLowerCase().trim();


    const filteredItems = items.filter((item) => {

        return (
            item.name?.toLowerCase().includes(query) ||
            item.description?.toLowerCase().includes(query) ||
            item.category?.toLowerCase().includes(query) ||
            item.type?.toLowerCase().includes(query) ||
            item.color?.toLowerCase().includes(query)
        );

    });


    return (

        <div className="search__container">

            {loading ? (

                <div className="search__container__header">
                    <h1>Searching...</h1>
                </div>

            ) : filteredItems.length > 0 ? (

                <div className="search__results">

                    <div className="search__container__header">

                        <h1>
                            Search results for "{search.searchQuery}"
                        </h1>

                    </div>


                    <div className="search__results__products">

                        {filteredItems.map((item) => (

                            <ItemCard
                                key={item._id}
                                item={item}
                            />

                        ))}

                    </div>

                </div>

            ) : (

                <div className="search__container__header">

                    <h1>
                        No results found for "{search.searchQuery}"
                    </h1>

                </div>

            )}

        </div>

    );
};

export default Search;