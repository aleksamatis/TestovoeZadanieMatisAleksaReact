import 'bootstrap/dist/css/bootstrap.min.css';
import {HeaderItem} from './HeaderItem';
import {IconHeaderItem} from './IconHeaderItem';
import { LocationMenu } from './LocationMenu';
import { HeaderModal } from './HeaderModal';
import { HeaderCreateMenu } from './HeaderCreateMenu';
import { HeaderUserMenu } from './HeaderUserMenu';
import { HeaderCurrencySelector } from './HeaderCurrencySelector';

export function Header() {
  return(
  <header>
  <nav className="main-nav px-3">
    <div className="flex-grow-0 flex-shrink-0 header-logo my-3">
      <img className="margin-logo" src="/normal_u36.svg" alt=""/>
      <img src="/normal_dconto_u35.svg" alt=""/>
    </div>
    <div className="menu-flex justify-content-between flex-grow-1 align-items-center">
      <ul className="location-menu-visibility">
        <li className="list-style-type">
          <LocationMenu text="Калининград" />
        </li>
        <li className="list-style-type">
          <HeaderItem image="normal_u462.svg" text="RUB" keepOnSmallScreen={true}
            content={() => <HeaderModal content={() => <HeaderCurrencySelector />}></HeaderModal>}></HeaderItem>
        </li>
        </ul>
        <ul className="header-icons">
          <li className="list-style-type d-none d-sm-flex">
            <IconHeaderItem image="normal_u606.svg" number="1" />
          </li>
          <li className="list-style-type">
            <IconHeaderItem image="normal_vector_u603.svg" number="" />
          </li>
          <li className="list-style-type d-none d-lg-flex">
            <IconHeaderItem image="normal_vector_u611.svg" number="2"/>
          </li>
        </ul>
        <ul>
        <li className="list-style-type">
          <HeaderItem className="header-item-create" image="normal_vector_u617.svg" text="Создать"
            content={() => <HeaderModal content={() => <HeaderCreateMenu />}></HeaderModal>}></HeaderItem>
        </li>
        <li className="list-style-type">
          <HeaderItem image="normal_u597.svg" text="Константин С."
            content={() => <HeaderModal content={() => <HeaderUserMenu />}></HeaderModal>}></HeaderItem>
        </li>
        </ul>
    </div>
  </nav>
</header>)
}