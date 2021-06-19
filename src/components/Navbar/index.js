import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import Dropdown from './Dropdown'
import CartWidget from './CartWidget'
import './Menu.css'


export default class MenuExampleContentProp extends Component {
    state = {}
  
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  
    render() {
      const { activeItem } = this.state
  
      return (
        <>
        <Menu>
          
          <Menu.Item>
          <img src='../../logo.jpg' alt='Anime Store' /> <p>Anime Store</p>
          </Menu.Item>
          <Dropdown></Dropdown>
          <Menu.Item
            name='About Us'
            active={activeItem === 'About Us'}
            content='About Us'
            onClick={this.handleItemClick}
          />
  
          <Menu.Item
            name='Stores'
            active={activeItem === 'Stores'}
            content='Stores'
            onClick={this.handleItemClick}
          />
         

        </Menu>
         <CartWidget></CartWidget>
        </>
      )
    }
  }
  

