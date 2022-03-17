import './Reset.css';
import './App.css';

export function HeaderModal(props) {
  return (
    <div className="open-header-modal">
      {props.content()}
    </div>
  );
}
