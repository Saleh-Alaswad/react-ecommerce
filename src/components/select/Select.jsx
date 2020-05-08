import React from 'react';
import Select from 'react-select';
import './Select.scss';


const ReactSelect = ({ options, onChange }) => {
    const op = options.map(size => ({ value: size, label: size }))
    return (
        <Select
            onChange={onChange}
            className='select'
            defaultValue={op[0]}
            label="Single select"
            options={op}
            theme={theme => ({
                ...theme,
                borderRadius: 0,
                colors: {
                    ...theme.colors,
                    primary25: 'gray',
                    primary: 'black',
                },
            })}
        />
    );
}
export default ReactSelect;