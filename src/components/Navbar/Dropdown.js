import React from "react";
import { Dropdown } from "semantic-ui-react";
import { Link } from "react-router-dom";

const CategoryList = () => (
  <Dropdown text="Categories" simple item>
    <Dropdown.Menu>
      <Dropdown.Item text="Figures" as={Link} to="/Category/1" />
      <Dropdown.Item text="Manga" as={Link} to="/Category/2" />
      <Dropdown.Item text="Accesories" as={Link} to="/Category/3" />
    </Dropdown.Menu>
  </Dropdown>
);

export default CategoryList;
