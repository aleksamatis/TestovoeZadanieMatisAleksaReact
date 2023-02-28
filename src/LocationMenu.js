import { Pointer } from "./assets/icons"

export function LocationMenu(props) {
  let className = props.className || ''
  className = className + 'location-menu header-item'
  return (
    <div className={className}>
      <div className="header-item-icon">
        <Pointer />
      </div>
      {props.text}
    </div>
  )
}
