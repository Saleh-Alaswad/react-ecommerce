import React, { useState } from 'react';
import './dropdown.scss'
const ITEMS = [
  { id: 1, value: 'Pulp Fiction' },
  { id: 2, value: 'The Prestige' },
  { id: 3, value: 'Blade' }
]

const Dropdown = ({ title = 'test', items = ITEMS, multiSelect = false }) => {
  const [open, setOpen] = useState(true)
  const [selection, setSelection] = useState([])

  const handleOnClick = (item) => {
    if (!selection.some(current => current.id === item.id)) {
      if (!multiSelect) {
        setSelection([item])
      } else if (multiSelect) {
        setSelection([...selection, item])
      }
    } else {
      let selectionAfterRemoval = selection
      selectionAfterRemoval.filter(current => current => current.id !== item.id)
      setSelection([...selectionAfterRemoval])
    }
  }
  const toggle = () => setOpen(!open)
  const isItemInSelection = (item) => selection.find(current => current.id === item.id)

  return (
    <div className='dd-wrapper' >
      <div className="dd-header"
        tabIndex={0}
        role='button'
        onKeyPress={() => toggle(!open)}
        onClick={() => toggle(!open)}  >
        {/* <div className="dd-header__title">
          <p className="dd-header__title--bold">blabl</p>
        </div> */}
        <div className="dd-header__action">
          <p>{open ? 'close' : 'open'}</p>
        </div>
        {open && (
          <div className="dd-list">{
            items.map(item => (
              <li key={item.id} className="dd-list-item">
                <button onClick={() => handleOnClick(item)} >
                  <span>{item.value}</span>
                  {isItemInSelection(item) && <span>selected</span>}
                </button>
              </li>
            ))
          }</div>
        )}
      </div>
    </div>
  );
}

export default Dropdown;