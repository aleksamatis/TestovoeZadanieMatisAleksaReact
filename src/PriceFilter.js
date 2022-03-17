import { Input } from "reactstrap"

export function PriceFilter(props) {
  let className = props.className || ''
  className += ' action-form-detail price-filter'
  return (
    <div className={className}>
      <div>
        <Input placeholder="Цена от"></Input>
      </div>
      <div className="position-relative">
        <Input placeholder="до" />
        <div className="pricefilter-currency">RUB</div>
      </div>
    </div>
  )
}