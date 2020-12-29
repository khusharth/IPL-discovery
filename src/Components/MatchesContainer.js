import React from "react";
import { matchesData } from "../Data/matches";
import MatchCard from "./MatchCard";
import Error from "./Error";

const searchFilter = (matches, searchText) => {
    return matches.filter((match) => {
        const searchMatchProperties = ["team1", "team2", "city"];
        const search = searchText.toLowerCase();
        return searchMatchProperties.some((key) =>
            match[key].toLowerCase().includes(search)
        );
    });
};

const filterByAttribute = (matches, attribute, attributeValue) => {
    return matches.filter((match) => match[attribute] === attributeValue);
};

const MatchesContainer = ({ searchText, attribute, attributeValue }) => {
    let matches = matchesData.slice(0, 30);

    // Search
    if (searchText) {
        matches = searchFilter(matchesData.slice(0, 30), searchText);
    }

    // Filter
    if (attribute.value !== "all") {
        matches = filterByAttribute(
            matchesData.slice(0, 30),
            attribute.value,
            attributeValue.value
        );
    }

    return (
        <div className='match__container'>
            {matches &&
                matches.map((match) => {
                    return <MatchCard key={match.id} matchData={match} />;
                })}
            {matches.length === 0 && <Error message='No matches found!' />}
        </div>
    );
};

export default MatchesContainer;
