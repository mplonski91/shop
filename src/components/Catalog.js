import React, { Component } from "react";
import BigHeading from "./BigHeading";
import ProductList from "./ProductList";
import ProductContainer from "./ProductsContainer";
import ProductService from "../services/products.services";
import Manufacturer from "./Manufacture";

class Catalog extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputSearch: "",
      selected: "All",
      manufactures: []
    };

    this.handleManufactureChange = this.handleManufactureChange.bind(this);
    this.handleClearFilters = this.handleClearFilters.bind(this);
  }

  componentDidMount() {
    const manufactures = ProductService.getManufactures();

    this.setState({
      manufactures
    });
  }

  get manufactures() {
    return ["All", ...this.state.manufactures];
  }

  handleClearFilters() {
    this.setState({ inputSearch: "", selected: "All" });
  }

  handleSearchInput = event => {
    this.setState({ inputSearch: event.target.value });
    console.log({ inputSearch: event.target.value });
  };

  handleManufactureChange(item) {
    return () =>
      this.setState({
        selected: item
      });
  }

  render() {
    const { selected, inputSearch } = this.state;
    const manufacture = selected === "All" ? "" : selected;

    return (
      <div>
        <BigHeading text="Catalog" />
        <div className="catalog">
          <div className="column-left">
            <div className="filter">
              <div className="filter-header">
                <h4>Search</h4>
                <a href="#" className="clear" onClick={this.handleClearFilters}>
                  Clear
                </a>
              </div>
              <div>
                <input
                  type="text"
                  placeholder="search..."
                  value={inputSearch}
                  onChange={this.handleSearchInput}
                />
              </div>
              <h4>Manufacturer</h4>
              <div>
                {this.manufactures.map(item => (
                  <Manufacturer
                    key={item}
                    item={item}
                    checked={item === selected}
                    onChange={this.handleManufactureChange(item)}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="column-right">
            <ProductContainer>
              <ProductList manufacture={manufacture} search={inputSearch} />
            </ProductContainer>
          </div>
        </div>
      </div>
    );
  }
}

export default Catalog;
