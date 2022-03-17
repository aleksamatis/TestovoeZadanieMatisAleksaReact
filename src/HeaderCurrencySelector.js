import './Reset.css';
import './App.css';

import { Dropdown,DropdownToggle } from 'reactstrap';

export function HeaderCurrencySelector(props) {
  let className = props.className || ''
  className += ' header-currency-selector'
  return (
    <div className={className}>
      <div className="my-2">Язык</div>
      <Dropdown toggle={() => {}}>
        <DropdownToggle
          tag="div"
          className="dropdown-toggle"
        >
          <div>Норвежский</div>
        </DropdownToggle>
      </Dropdown>
      <div className="mt-4">Валюта</div>
      <Dropdown toggle={() => {}} className="mt-2">
        <DropdownToggle
            tag="div"
            className="dropdown-toggle"
          >
            RUB
        </DropdownToggle>
      </Dropdown>
      </div>
    );
  }