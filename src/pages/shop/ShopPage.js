import React, { Component } from "react";
import SHOP_DATA from "./ShopData";
import PreviewCollection from "../../components/preview-collection/PreviewCollection";
export class ShopPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA,
    };
  }
  render() {
    // const { collections } = this.State;
    return (
      <div className="shop-page">
        {this.state.collections.map(({ id, ...otherCollection }) => (
          <PreviewCollection key={id} {...otherCollection} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
