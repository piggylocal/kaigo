import React, {useState} from "react";

import MenuContentComponent from "./content.menu";

const MenuComponent = () => {
    const [menuActive, setMenuActive] = useState("");

    const menuOnClick = () => {
        if (menuActive === "") {
            setMenuActive("active");
        } else {
            setMenuActive("");
        }
    }

    return (
        <div id="menu" onClick={menuOnClick}>
            <div className={`menu-line line-top ${menuActive}`}></div>
            <div className={`menu-line line-bottom ${menuActive}`}></div>
            <div className="menu-text">メニュー</div>
            <MenuContentComponent menuActive={menuActive} />
        </div>
    )
};

export default MenuComponent;