import React, { Component } from "react";
import SearchBar from "../components/search-bar/search-bar.component";
import CountryItem from "../components/country-item/country-item.component";

import "./directory.style.scss";

class Directory extends Component {
  constructor() {
    super();

    this.state = { items: [] };
  }

  componentDidMount() {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((res) => res.json())
      .then((json) => this.setState({ items: json }));
  }

  render() {
    const { items } = this.state;
    return (
      <div className="directory">
        <SearchBar />
        {items.map((item, i) => (
          <CountryItem key={i} data={item} />
        ))}
      </div>
    );
  }
}

export default Directory;
