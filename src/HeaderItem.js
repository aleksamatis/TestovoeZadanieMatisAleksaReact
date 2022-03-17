import React, { useState, useEffect, useRef } from 'react';

/**
 * Hook that alerts clicks outside of the passed ref
 */
 function useOutsideAlerter(ref, setOpen) {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpen(false)
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, setOpen]);
}


export function HeaderItem(props) {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, setOpen);

  let className = props.className || ''
  className += " position-relative"

  const itemsClass = props.keepOnSmallScreen ? '' : 'd-none d-lg-block'

  return (
    <div className={className} >
      <div onClick={() => setOpen(!open)} className="header-item">
        <div className="header-item-icon">
          <img src={props.image} alt="" />
        </div>
        <div className={itemsClass}>
          {props.text}
        </div>
        <img alt="" src="/normal_vector_u585.svg" className={itemsClass}/>
      </div>
      {open && props.content ? (
        <div  ref={wrapperRef}>
          {props.content()}
        </div>
      ) : undefined}
    </div>
  )
}
