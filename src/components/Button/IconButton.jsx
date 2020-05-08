import React from 'react';
import './IconButton.scss';

const IconButton = ({ iconName, title, onClick, onMouseEnter, onMouseLeave }) => {
    // const [isOpen, setIsOpen] = React.useState(null);

    // const handlePopoverOpen = (event) => setIsOpen(event.currentTarget);

    // const handlePopoverClose = () => setIsOpen(null);

    // const open = Boolean(isOpen);
    return (
        <div>
            <div className="icon-button" onClick={onClick} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                <span className="material-icons">{iconName}</span>
                <p>{title}</p>
            </div>
            {/* {hover && open && hoverComponent} */}
        </div>
    );
}

export default IconButton;