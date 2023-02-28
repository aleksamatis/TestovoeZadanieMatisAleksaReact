import './Reset.css';
import './App.css';

import React, { useState } from 'react';
import { Dropdown,DropdownToggle,DropdownMenu } from 'reactstrap';

export function ActionForm1(props) {
  let className = props.className || ''
  className += ' action-form-detail'
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
        <DropdownMenu>
          <div onClick={function noRefCheck(){}}>
            На любой срок
          </div>
          <div onClick={function noRefCheck(){}}>
            На длительный срок
          </div>
          <div onClick={function noRefCheck(){}}>
            На короткий срок
          </div>
        </DropdownMenu>
      </Dropdown>
    </div>
    );
  }
  