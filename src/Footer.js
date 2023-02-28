import 'bootstrap/dist/css/bootstrap.min.css';

export function Footer() {
  return(
  <footer>
    <div className="container-fluid main-footer">
      <div className="row">
        <div className="col-3 col-xl-3 col-md-4 footer-item">
          <img className="margin-logo" src="/normal_u36.svg" alt=""/>
          <img src="/normal_dconto_u35.svg" alt="" />
          <div className="mt-3">© 2022 Deposit FM AS</div>
          <div className="col-12 footer-item footer-visibility-one">
            <div>Новое объявление</div>
            <div>Новой контракт</div>
          </div>
        </div>
        <div className="col-3 footer-item footer-visibility-two">
          <div>Новое объявление</div>
          <div>Новой контракт</div>
        </div>
        <div className="col-3 col-xl-3 col-md-4 footer-item d-none d-md-block">
          <div>Недвижимость в аренду</div>
          <div>Недвижимость на продажу</div>
          <div>Найти арендаторов</div>
          <div>Найти соорендаторов</div>
          <div>Найти услуги</div>
        </div>
        <div className="col-3 col-xl-3 col-md-4 footer-item d-none d-md-block">
          <div>О сервисе</div>
          <div>Условия использования</div>
          <div>Политика обработки данных</div>
          <div>Политика в отношение cookies</div>
          <div>Сообщить об ошибке</div>
        </div>
      </div>
    </div>
  </footer>)
}