import { Button } from 'reactstrap';

export function Checkbox(props) {
  let className = props.className || ''
  className += ' flat-button checkbox'
  return <Button 
    color="primary"
    className={className}
    active={!!props.checked} 
    outline 
    onClick={props.onClick}
  >
    {props.checked ? (
      <svg viewBox="0 0 24 24">
        <path fill="currentColor" d="M9,20.42L2.79,14.21L5.62,11.38L9,14.77L18.88,4.88L21.71,7.71L9,20.42Z" />
      </svg> ) : undefined
    }
  </Button>
}