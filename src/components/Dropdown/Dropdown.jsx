import React, { useState } from 'react';
import './dropdown.scss'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
const ITEMS = [
  { id: 1, value: 'Recommended' },
  { id: 2, value: 'Newest' },
  { id: 3, value: 'Lowest price' },
  { id: 4, value: 'Highest Price' }
]

const Dropdown = ({ title = 'Dropdown', items = ITEMS, multiSelect = false }) => {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState(items[0].value);

  const handleChange = (event) => setValue(event.target.value)

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
                <RadioGroup aria-label={title} onChange={handleChange}>
                  {items.map(item =>
                    <FormControlLabel checked={item.value === value} key={item.id} value={item.value} control={<Radio />} label={item.value} />
                  )}
                </RadioGroup>
              </FormControl>
            </li>
          }</div>
        )}
        {open && multiSelect && (
          <div className="dd-list">{
            <li className="dd-list-item">
              <FormControl component="fieldset">
                <RadioGroup aria-label={title} onChange={handleChange}>
                  {items.map(item =>
                    <FormControlLabel checked={item.value === value} key={item.id} value={item.value} control={<Radio />} label={item.value} />
                  )}
                </RadioGroup>
              </FormControl>
            </li>
          }</div>
        )}
      </div>
    </div>
  );
}

export default Dropdown;