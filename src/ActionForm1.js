import './Reset.css';
import './App.css';

import React, { useState } from 'react';
import { Dropdown,DropdownToggle,DropdownMenu } from 'reactstrap';

export function ActionForm1(props) {
  let className = props.className || ''
  className += ' action-form-detail range-selector'
  const [open, setOpen] = useState(false);
  return (
    <div className={className}>
      <Dropdown isOpen={!!open} toggle={() => setOpen(!open)}>
        <DropdownToggle
          tag="div"
          className="dropdown-toggle"
        >
          <div>
            На любой срок
          </div>
        </DropdownToggle>
        <DropdownMenu className="pt-3 px-3"> 
          <div onClick={function noRefCheck(){}} className="pb-3">
            На любой срок
          </div>
          <div onClick={function noRefCheck(){}} className="pb-3">
            На длительный срок
          </div>
          <div onClick={function noRefCheck(){}} className="pb-3">
            На короткий срок
          </div>
        </DropdownMenu>
      </Dropdown>
    </div>
    );
  }
  