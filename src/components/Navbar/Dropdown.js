import React from "react";
import { Dropdown, Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";
const options = [
  { key: 1, text: "Figures", value: 1 },
  { key: 2, text: "Manga", value: 2 },
  { key: 3, text: "Accesories", value: 3 },
];

const DropdownExampleSimple = () => (
  <Dropdown text="Categories" simple item>
    <Dropdown.Menu>
      <Dropdown.Item text="Figures" as={Link} to="/Category/1" />
      <Dropdown.Item text="Manga" as={Link} to="/Category/2" />
      <Dropdown.Item text="Accesories" as={Link} to="/Category/3" />
    </Dropdown.Menu>
  </Dropdown>
);

export default DropdownExampleSimple;
