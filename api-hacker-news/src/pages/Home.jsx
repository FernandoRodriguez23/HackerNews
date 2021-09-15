import React from "react";
import Articles from "../components/Articles";
import SearchForm from "../components/SearchForm";

function Home() {
    return (
        <div className="main-container">
            <SearchForm />
            <Articles />
        </div>
    )
}

export default Home
