import 'bootstrap/dist/css/bootstrap.min.css';
import './Reset.css';
import './App.css';
import React, { useState } from 'react';
import { Dropdown,DropdownToggle, } from 'reactstrap';

export function ActionForm5(props) {
  let className = props.className || ''
  className += ' action-form-detail'

  return (
    <div className={className}>
      <Dropdown>
        <DropdownToggle
          tag="div"
          className="dropdown-toggle"
        >
          <div className="action-form-detail-flex">
            <div><img src="/normal_u503.svg"></img></div>
            <div>Район,адрес,ориентир</div>
          </div>          
        </DropdownToggle>
      </Dropdown>
    </div>
    );
  }
  