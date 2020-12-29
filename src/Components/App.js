import React, { useState } from "react";
import Header from "./Header";
import SearchContainer from "./SearchContainer";
import MatchesContainer from "./MatchesContainer";

const App = () => {
    const [searchText, setSearchText] = useState("");
    const [attribute, setAttribute] = useState("");
    const [attributeValue, setAttributeValue] = useState("");

    return (
        <>
            <Header />
            <main>
                <SearchContainer
                    searchText={searchText}
                    setSearchText={setSearchText}
                    attribute={attribute}
                    setAttribute={setAttribute}
                    attributeValue={attributeValue}
                    setAttributeValue={setAttributeValue}
                />
                <MatchesContainer
                    searchText={searchText}
                    attribute={attribute}
                    attributeValue={attributeValue}
                />
            </main>
        </>
    );
};

export default App;
