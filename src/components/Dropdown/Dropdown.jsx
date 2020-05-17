import React, { useState } from 'react';
import './dropdown.scss'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import FormGroup from '@material-ui/core/FormGroup';
import Checkbox from '@material-ui/core/Checkbox';
const ITEMS = [
  { id: 1, value: 'Recommended' },
  { id: 2, value: 'Newest' },
  { id: 3, value: 'Lowest price' },
  { id: 4, value: 'Highest Price' }
]

const Dropdown = ({ title = 'Filter', items = ITEMS, multiSelect = true }) => {
  const [open, setOpen] = useState(false)
  const [selection, setSelection] = useState([])

  const handleSingleSelection = event => {
    setSelection([{ [event.target.value]: true }])
  }
  const handleMultiSelection = event => {
    setSelection([...selection, { [event.target.name]: event.target.checked }])
  }
  const toggle = () => setOpen(!open)


  return (
    <div className='dd-wrapper' >
      <div className="dd-header"
        tabIndex={0}
        role='button' >
        <div className="dd-header__action" onClick={() => toggle(!open)}>
          <FormLabel component="legend">{title}</FormLabel>
        </div>
        {open && !multiSelect && (
          <div className="dd-list">{
            <li className="dd-list-item">
              <FormControl component="fieldset">
                <RadioGroup aria-label={title} onChange={handleSingleSelection}>
                  {items.map(item =>
                    <FormControlLabel checked={selection.some(select => select[`${item.value}`])} key={item.id} value={item.value} control={<Radio />} label={item.value} />
                  )}
                </RadioGroup>
              </FormControl>
            </li>
          }</div>
        )}
        {open && multiSelect && (
          <div className="dd-list">{
            <li className="dd-list-item">
              <FormControl component="fieldset" >
                <FormGroup>
                  {items.map(item =>
                    <FormControlLabel
                      key={item.id}
                      control={<Checkbox checked={selection.some(select => select[`${item.value}`])} onChange={handleMultiSelection} name={item.value} />}
                      label={item.value}
                    />
                  )}
                </FormGroup>
              </FormControl>
            </li>
          }</div>
        )}
      </div>
    </div>
  );
}

export default Dropdown;