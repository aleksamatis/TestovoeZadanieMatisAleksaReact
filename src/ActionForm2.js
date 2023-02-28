import 'bootstrap/dist/css/bootstrap.min.css';
import './Reset.css';
import './App.css';
import { ButtonGroup,Button } from 'reactstrap';
import { Checkbox } from './Checkbox';

import React, { useState } from 'react';
import { Dropdown,DropdownToggle,DropdownMenu } from 'reactstrap';

function toggleItem(idx, items) {
  const result = {
    ...items,
  }
  result[idx] = !items[idx]
  return result
}

export function ActionForm2(props) {
  let className = props.className || ''
  className += ' action-form-detail range-selector'
  const [open, setOpen] = useState(false);
  const [selectedItems, setItems] = useState({})

  return (
    <div className={className}>
      <Dropdown isOpen={!!open} toggle={() => setOpen(!open)}>
        <DropdownToggle
          tag="div"
          className="dropdown-toggle"
        >
          <div>
            На любых условиях
          </div>
        </DropdownToggle>
        <DropdownMenu className="pt-3">
          <div onClick={() => setItems(toggleItem(0, selectedItems))} className="pb-3">
            <Checkbox 
              className="mx-2"
              checked={!!selectedItems[0]}
            />
            <img src="/normal_u727.svg" alt="" className="mr-2"/>
            Аренда и оплата
          </div>
          <div onClick={() => setItems(toggleItem(1, selectedItems))} className="pb-3">
            <Checkbox 
              className="mx-2"
              checked={!!selectedItems[1]}
            />
            <img src="/normal_u731.svg" alt="" className="mr-2"/>
            С бонусами и штрафами
          </div>
          <div onClick={() => setItems(toggleItem(2, selectedItems))} className="pb-3">
            <Checkbox 
              className="mx-2"
              checked={!!selectedItems[2]}
            />
            <img src="/normal_u735.svg" alt="" className="mr-2"/>
            Аренда за помощь
          </div>
          <div onClick={() => setItems(toggleItem(3, selectedItems))} className="pb-3">
            <Checkbox 
              className="mx-2"
              checked={!!selectedItems[3]}
            />
            <img src="/normal_u739.svg" alt="" className="mr-2"/>
            Аренда с заработком
          </div>
          <div onClick={() => setItems(toggleItem(4, selectedItems))} className="pb-3">
            <Checkbox 
              className="mx-2"
              checked={!!selectedItems[4]}
            />
            <img src="/normal_u743.svg" alt="" className="mr-2"/>
            Аренда и обучение
          </div>
          <div onClick={() => setItems(toggleItem(5, selectedItems))} className="pb-3">
            <Checkbox 
              className="mx-2"
              checked={!!selectedItems[5]}
            />
            <img src="/normal_u747.svg" alt="" className="mr-2"/>
            Бесплатная аренда
          </div>
        </DropdownMenu>
      </Dropdown>
    </div>
    );
  }
  