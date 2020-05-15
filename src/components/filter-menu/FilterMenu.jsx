import React from 'react';
import CheckIcon from '@material-ui/icons/Check';
import ToggleButton from '@material-ui/lab/ToggleButton';

export default function FilterMenu() {
    const [selected, setSelected] = React.useState(false);

    return (
        <div className="menu">
            <h4 className="title">SORT BY ^</h4>
            <label >
                <input type='checkbox' value={true} />
            </label>

        </div>
    );
}