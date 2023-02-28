export function IconHeaderItem(props) {
  return (
    <div className="icon-header-item">
      <img src={props.image} alt=""/>
      {props.number ? (<div>{props.number}</div>): undefined}
    </div>
  )
}
