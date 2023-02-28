import './Reset.css';
import './App.css';

import React, { useState } from 'react';
import { Dropdown,DropdownToggle,DropdownMenu,ButtonGroup,Button} from 'reactstrap';

export function ActionForm4(props) {
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
            Комнат
          </div>
        </DropdownToggle>
        <DropdownMenu>
          <ButtonGroup>
            <Button
              color="primary"
              onClick={function noRefCheck(){}}
            >
            One
            </Button>
            <Button
              color="primary"
              onClick={function noRefCheck(){}}
            >
            One
            </Button>
            <Button
              color="primary"
              onClick={function noRefCheck(){}}
            >
            One
            </Button>
          </ButtonGroup>
        </DropdownMenu>
      </Dropdown>
    </div>
    );
  }
  