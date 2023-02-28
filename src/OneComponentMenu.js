import './Reset.css';
import './App.css';


export function OneComponentMenu(props) {
  return (
    <li className="">
        {props.content=() => "Контент"}
    </li>
    );
  }
  