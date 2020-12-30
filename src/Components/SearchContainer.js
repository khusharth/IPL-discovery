import React, { useState, useEffect } from "react";
import Select from "react-select";
import {
    attributeOptions,
    cityOptions,
    venueOptions,
    winnerOptions,
    seasonOptions,
} from "../Utils/filterOptions";

// Styles for Select
const customStyles = {
    control: (provided) => ({
        ...provided,
        boxShadow: "0 0 2px #047857",
    }),
    option: (provided, { isSelected, isDisabled, isFocused }) => ({
        ...provided,
        backgroundColor: isSelected ? " #059669" : isFocused ? "#a7f3d0" : null,
        ":active": {
            ...provided[":active"],
            backgroundColor:
                !isDisabled && (isSelected ? "#059669" : "#a7f3d0"),
        },
    }),
};

const setOptions = (attribute, setAttrValueOptions, setAttributeValue) => {
    switch (attribute) {
        case "all":
            setAttrValueOptions([]);
            setAttributeValue("");
            break;

        case "Season":
            setAttrValueOptions(seasonOptions);
            setAttributeValue(seasonOptions[0]);
            break;

        case "city":
            setAttrValueOptions(cityOptions);
            setAttributeValue(cityOptions[0]);
            break;

        case "venue":
            setAttrValueOptions(venueOptions);
            setAttributeValue(venueOptions[0]);
            break;

        case "winner":
            setAttrValueOptions(winnerOptions);
            setAttributeValue(winnerOptions[0]);
            break;

        default:
            setAttrValueOptions([]);
            break;
    }
};

const SearchContainer = ({
    searchText,
    setSearchText,
    attribute,
    setAttribute,
    attributeValue,
    setAttributeValue,
}) => {
    const [attributeValueOptions, setAttrValueOptions] = useState([]);
    const [isInputDisabled, setIsInputDisabled] = useState(false);

    useEffect(() => {
        // Disabld search if attribute filter is used
        attribute && attribute.value !== "all"
            ? setIsInputDisabled(true)
            : setIsInputDisabled(false);

        setOptions(attribute.value, setAttrValueOptions, setAttributeValue);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [attribute]);

    return (
        <div className='search'>
            <input
                type='text'
                name='form'
                className='search__input'
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                placeholder='Search by team name or city'
                disabled={isInputDisabled}
            />
            <Select
                className='filter__attribute'
                value={attribute}
                onChange={setAttribute}
                options={attributeOptions}
                styles={customStyles}
                placeholder='Filter By Attribute'
            />

            <span className='filter__equal-sign'>=</span>

            <Select
                className='filter__attribute'
                value={attributeValue}
                onChange={setAttributeValue}
                options={attributeValueOptions}
                styles={customStyles}
                placeholder='All'
            />
        </div>
    );
};

export default SearchContainer;
