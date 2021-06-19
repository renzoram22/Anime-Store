import React from 'react'
import { Dropdown, Menu } from 'semantic-ui-react'

const options = [
  { key: 1, text: 'Figures', value: 1 },
  { key: 2, text: 'Manga', value: 2 },
  { key: 3, text: 'Accesories', value: 3 },
]

const DropdownExampleSimple = () => (
  
    <Dropdown text='Products' options={options} simple item />
  
)

export default DropdownExampleSimple