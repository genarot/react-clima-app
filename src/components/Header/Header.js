import React from 'react';

const Header = (props) => {
    return (
        <header>
            <nav>
                <div className="nav-wrapper light-blue darken-2">
                    <a className="brand-logo">{props.titulo}</a>
                </div>
            </nav>
        </header>
    );
};

export default Header;