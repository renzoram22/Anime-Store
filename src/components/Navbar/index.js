import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";
import Dropdown from "./Dropdown";
import CartWidget from "../Cart/CartWidget"
import "./Menu.css";

export default class MenuExampleContentProp extends Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <>
        <Menu>
          <Link to="/">
            <Menu.Item
              name="Home"
              active={activeItem === "Home"}
              onClick={this.handleItemClick}
            >
              <img src="../../logo.jpg" alt="Anime Store" /> <p>Anime Store</p>
            </Menu.Item>
          </Link>
          <Dropdown></Dropdown>
          <Link to="/contact">
            <Menu.Item
              name="Contact"
              active={activeItem === "Contact"}
              content="Contact"
              onClick={this.handleItemClick}
            />
          </Link>
          <Link to="/stores">
            <Menu.Item
              name="Stores"
              active={activeItem === "Stores"}
              content="Stores"
              onClick={this.handleItemClick}
            />
          </Link>
        </Menu>
        <CartWidget></CartWidget>
      </>
    );
  }
}
