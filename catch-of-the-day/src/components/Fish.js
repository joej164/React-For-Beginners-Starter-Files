import React from "react";
import { formatPrice } from "../helpers";

class Fish extends React.Component {
  render() {
    return (
      <li className="menu-fish">
        <img src={this.props.details.image} alt={this.props.details.image} />
        <h3 className="fish-name">{this.props.details.name}</h3>
        <span className="price">{formatPrice(this.props.details.price)}</span>
        <p>{this.props.details.desc}</p>
        <button>Add To Cart</button>
      </li>
    );
  }
}

export default Fish;
