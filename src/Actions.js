import 'bootstrap/dist/css/bootstrap.min.css';
import './Reset.css';
import './App.css';
import { Button } from 'reactstrap';
import { ActionForm1 } from './ActionForm1';
import { ActionForm2 } from './ActionForm2';
import { ActionForm3 } from './ActionForm3';
import { ActionForm4 } from './ActionForm4';
import { ActionForm5 } from './ActionForm5';
import { PriceFilter } from './PriceFilter';
import { SquareFilter } from './SquareFilter';

export function Actions(props) {
  return (
      <div className="main-actions">
        <h1>Свежий взгляд на рынок недвижимости</h1>
        <div className="main-actions-flex mx-4 mx-xl-auto">
          <div>
            <Button className="action-button" color="primary active"><img src="u935_selected.svg" className="d-none d-xl-inline" />Снять</Button>
          </div>
          <div>
            <Button className="action-button" color="primary"><img src="normal_u938.svg" className="d-none d-xl-inline" />Купить</Button>
          </div>
          <div>
            <Button className="action-button" color="primary"><img src="normal_u941.svg" className="d-none d-xl-inline" />Арендаторы</Button>
          </div>
          <div className="d-none d-sm-block">
            <Button className="action-button" color="primary"><img src="normal_u944.svg" className="d-none d-xl-inline" />Соорендаторы</Button>
          </div>
          <div className="d-none d-sm-block">
            <Button className="action-button" color="primary"><img src="normal_u947.svg" className="d-none d-xl-inline" />Услуги</Button>
          </div>
        </div>
        <div className="pb-5">
          <div className="row actions-filters mx-4 mx-xl-auto">
            <ActionForm1 className="col-4 col-xl-3 width"/>
            <ActionForm2 className="col-4 col-xl-3 width"/>
            <ActionForm3 className="col-4 col-xl-3 width"/>
            <PriceFilter className="col-4 col-xl-3 width"/>
            <ActionForm4 className="col-4 col-xl-3 width"/>
            <SquareFilter className="col-4 col-xl-3 d-none d-lg-flex"/>
            <ActionForm5 className="col-6 col-md-4 col-xl-6 width"/>
            <div className="main-actions-flex main-actions-buttons">
              <div>
                <Button className="action-button flat-button" color="primary">
                  <img src="normal_u630.svg" alt="" className="mr-2" />
                  Еще фильтры
                </Button>
              </div>
              <div>
                <Button className="action-button flat-button clear-button" color="secondary"><span aria-hidden="true">&times;</span>Очистить</Button>
                <Button className="action-button mr-3" color="primary btn-visible" outline><img src="normal_u573.svg" />На карте</Button>
                <Button className="action-button" color="primary active btn-visible">1678 объявлений</Button>
              </div>
          </div>
          </div>
        </div>
      </div>
    );
  }
  