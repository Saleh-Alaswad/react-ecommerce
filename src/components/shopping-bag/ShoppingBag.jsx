import React from 'react';
// import Popover from '@material-ui/core/Popover';
// import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import IconButton from '../Button/IconButton';
const useStyles = makeStyles((theme) => ({
    popover: {
        pointerEvents: 'none',
    },
    paper: {
        padding: theme.spacing(1),
    },
}));

export default function MouseOverPopover() {
    const classes = useStyles();
    const [isOpen, setIsOpen] = React.useState(null);

    const handlePopoverOpen = (event) => setIsOpen(event.currentTarget);

    const handlePopoverClose = () => setIsOpen(null);

    const open = Boolean(isOpen);

    return (
        <div>
            <div onMouseEnter={handlePopoverOpen} onMouseLeave={handlePopoverClose}>
                {/* <IconButton iconName='shopping_basket' title='Shopping bag' /> */}

            </div>
            {open && <div>I use Popover.</div>}
        </div>
    );
}