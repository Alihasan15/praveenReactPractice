import React from "react";

const Header = ( { isDark,classNameProp,childrenElements })=>{
    isDark=!!isDark?"dark":"light";
    classNameProp=classNameProp ?" "+classNameProp :""; 
    return (
        <nav
            className={
                `navbar navbar-${isDark} bg-${isDark} ${classNameProp}` 
            }
            >
            <span className="navbar-brand">{childrenElements}</span>
        </nav>
    );
}

export default Header

