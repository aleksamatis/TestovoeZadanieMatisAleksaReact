import './Reset.css';
import './App.css';

export function HeaderUserMenu() {
  return (
    <div>
      <div className="menu-style-txt">
        <img src="normal_u473.svg"/>Мой профиль
      </div>
      <div className="menu-style-txt">
        <img src="normal_u506.svg"/>
        <div>Аккаунты</div>
        <img src="normal_vector_u147.svg"/>
      </div>
      <hr />
      <div className="menu-style-txt">
        <img src="normal_u481.svg"/>
        <div>Мои объявления</div>
      </div>
      <div className="menu-style-txt">
        <img src="normal_u477.svg"/>
        <div>Моя недвижимость</div>
      </div>
      <div className="menu-style-txt">
        <img src="normal_vector_u114.svg"/>
        <div>Домовые книги</div>
      </div>
      <div className="menu-style-txt">
        <img src="normal_vector_u130.svg"/>
        <div>Мои контракты</div>
      </div>
      <hr />
      <div className="menu-style-txt">
        <img src="normal_u360.svg"/>
        <div>Пригласить пользователя</div>
      </div>
      <div className="menu-style-txt">
        <img src="normal_vector_u364.svg"/>
        <div>Настройки</div>
      </div>
      <div className="menu-style-txt">
        <img src="normal_vector_u501.svg"/>
        <div>Выйти</div>
      </div>
   </div>
  );
  }