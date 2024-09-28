import React, { useContext, useEffect, useState } from "react";
import { SEARCH_RESULT } from "../../utils/constants";
import Shimmer from "../shimmer/Shimmer";
import DishCard from "./DishCard";
import { useLocation, Link } from "react-router-dom";
import GlobalContext from "../../contexts/GlobalContext";
import RestaurantCard from "./RestaurantCard";

const SearchResult = () => {
    const [resultInfo, setResultInfo] = useState(null);
    let location = useLocation();
    let query = new URLSearchParams(location.search).get("query");

    const { coordinates } = useContext(GlobalContext);

    const { lat, lng } = coordinates;

    const searchResultApi =
        SEARCH_RESULT +
        `lat%3D${lat}%26lng%3D${lng}%26str%3D${query}%26trackingId%3Dnull%26submitAction%3DENTER%26queryUniqueId%3Dnull`;

    const fetchResult = async () => {
        try {
            const response = await fetch(searchResultApi);

            if (!response.ok) {
                throw new Error("Failed to fetch data");
            }

            const json = await response.json();

            setResultInfo(json);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        fetchResult();
    }, [searchResultApi]);

    if (resultInfo === null) {
        return <Shimmer />;
    }

    const dish = (
        resultInfo?.data?.cards[1]?.groupedCard?.cardGroupMap?.DISH?.cards || []
    ).filter((item) => {
        return (
            item?.card?.card?.["@type"] ===
            "type.googleapis.com/swiggy.presentation.food.v2.Dish"
        );
    });

    const restaurant = (
        resultInfo?.data?.cards[1]?.groupedCard?.cardGroupMap?.RESTAURANT
            ?.cards || []
    ).filter((item) => {
        const card = item?.card?.card;
        return (
            card &&
            card["@type"] ===
                "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
        );
    });

    return (
        <div className="lg:w-7/12 mx-auto">
            {resultInfo?.data?.cards[1]?.groupedCard?.cardGroupMap?.DISH ? (
                <div className="bg-orange-50 lg:flex lg:flex-wrap lg:justify-center gap-3 py-4 ">
                    {dish.map((item) => {
                        return (
                            <DishCard
                                key={item.card.card.info.id}
                                item={item}
                            />
                        );
                    })}
                </div>
            ) : (
                <div className="bg-orange-50 lg:flex lg:flex-wrap lg:justify-center gap-3 py-4 ">
                    {restaurant.map((item) => {
                        const {
                            name: restaurant,
                            locality,
                            areaName,
                            id,
                        } = item?.card?.card?.info;

                        return (
                            <Link
                                to={`/restaurants/${(restaurant || "")
                                    .toLowerCase()
                                    .replace(/\s/g, "-")}-${(locality || "")
                                    .toLowerCase()
                                    .replace(/\s/g, "-")}-${(areaName || "")
                                    .toLowerCase()
                                    .replace(/\s/g, "-")}-${id}`}
                                key={id}
                            >
                                <RestaurantCard item={item} />
                            </Link>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default SearchResult;
