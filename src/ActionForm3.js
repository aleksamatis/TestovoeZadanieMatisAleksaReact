import './Reset.css';
import './App.css';
import { ButtonGroup,Button } from 'reactstrap';
import { Checkbox } from './Checkbox'

import React, { useState } from 'react';
import { Dropdown,DropdownToggle,DropdownMenu } from 'reactstrap';

function toggleItem(idx, items) {
  const result = {
    ...items,
  }
  result[idx] = !items[idx]
  return result
}

export function ActionForm3(props) {
  let className = props.className || ''
  className += ' action-form-detail range-selector'

  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(0);
  const [selectedItems, setItems] = useState({})

  return (
    <div className={className}>
      <Dropdown isOpen={!!open} toggle={() => setOpen(!open)}>
        <DropdownToggle
          tag="div"
          className="dropdown-toggle"
      >
          <div>Жилая недвижимость</div>
        </DropdownToggle>
        <DropdownMenu className="pt-3">
          <div className="group-buttons-arive">
            <ButtonGroup>
              <Button color="primary" active={selected === 0} onClick={() => setSelected(0)}>
                Жилая
              </Button>
              <Button color="primary" active={selected === 1} onClick={() => setSelected(1)}>
                Коммерческая
              </Button>
            </ButtonGroup>
          </div>


          {selected === 0 ? (<div>
            <div onClick={() => setItems(toggleItem(0, selectedItems))} className="pb-3 pt-2">
            <Checkbox 
              className="mx-2"
              checked={!!selectedItems[0]}
            />
              Квартира
            </div>
            <div onClick={() => setItems(toggleItem(1, selectedItems))} className="pb-3">
            <Checkbox 
              className="mx-2"
              checked={!!selectedItems[1]}
            />
              Комната
            </div>
            <div onClick={() => setItems(toggleItem(2, selectedItems))} className="pb-3">
            <Checkbox 
              className="mx-2"
              checked={!!selectedItems[2]}
            />
              Частный доа
            </div>
            <div onClick={() => setItems(toggleItem(3, selectedItems))} className="pb-3">
            <Checkbox 
              className="mx-2"
              checked={!!selectedItems[3]}
            />
              Таунхаус
            </div>
            <div onClick={() => setItems(toggleItem(4, selectedItems))} className="pb-3">
            <Checkbox 
              className="mx-2"
              checked={!!selectedItems[4]}
            />
              Дача
            </div>
            <div onClick={() => setItems(toggleItem(5, selectedItems))} className="pb-3">
            <Checkbox 
              className="mx-2"
              checked={!!selectedItems[5]}
            />
              Часть жилья
            </div>
          </div> ): undefined}

          
          {selected === 1 ? (<div>
            <div onClick={() => setItems(toggleItem(0, selectedItems))} className="pb-3 pt-2">
            <Checkbox 
              className="mx-2"
              checked={!!selectedItems[0]}
            />
              Офис
            </div>
            <div onClick={() => setItems(toggleItem(1, selectedItems))} className="pb-3">
            <Checkbox 
              className="mx-2"
              checked={!!selectedItems[1]}
            />
              Склад
            </div>
            <div onClick={() => setItems(toggleItem(2, selectedItems))} className="pb-3">
            <Checkbox 
              className="mx-2"
              checked={!!selectedItems[2]}
            />
              Торговое помещение
            </div>
            <div onClick={() => setItems(toggleItem(3, selectedItems))} className="pb-3">
            <Checkbox 
              className="mx-2"
              checked={!!selectedItems[3]}
            />
              Салон услуг
            </div>
            <div onClick={() => setItems(toggleItem(4, selectedItems))} className="pb-3">
            <Checkbox 
              className="mx-2"
              checked={!!selectedItems[4]}
            />
              Производство
            </div>
            <div onClick={() => setItems(toggleItem(5, selectedItems))} className="pb-3">
            <Checkbox 
              className="mx-2"
              checked={!!selectedItems[5]}
            />
              Свободного назначения
            </div>
          </div> ): undefined}
        </DropdownMenu>
      </Dropdown>
    </div>
    );
  }
  