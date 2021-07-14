import React, { Component } from "react";
import { Accordion, Icon, Button } from "semantic-ui-react";
import "./CartWidget.css";
import { CartContent } from "./CartContent";
export default class AccordionExampleStyled extends Component {
  state = { activeIndex: 0 };

  handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({ activeIndex: newIndex });
  };

  render() {
    const { activeIndex } = this.state;

    return (
      <div className="CartContainer">
        <Accordion>
          <Accordion.Title
            active={activeIndex === 1}
            index={1}
            onClick={this.handleClick}
          >
            <Button animated="vertical">
              <Button.Content hidden>Cart </Button.Content>
              <Button.Content visible>
                <Icon name="shop" />
              </Button.Content>
            </Button>
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 1}>
            <CartContent></CartContent>
          </Accordion.Content>
        </Accordion>
      </div>
    );
  }
}
