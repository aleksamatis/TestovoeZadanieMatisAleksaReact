import { Input } from "reactstrap"

export function SquareFilter(props) {
  let className = props.className || ''
  className += ' action-form-detail price-filter'
  return (
    <div className={className}>
      <div>
        <Input placeholder="Площадь от"></Input>
      </div>
      <div className="position-relative">
        <Input placeholder="до" />
        <div className="pricefilter-currency">м<sup><small>2</small></sup></div>
      </div>
    </div>
  )
}