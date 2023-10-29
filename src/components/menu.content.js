import React from "react";
import { Link } from "react-router-dom";

const MenuContentComponent = (props) => {
    const {menuActive} = props;

    return (
        <div id="menu-content" className={`${menuActive}`}>
            <div className="menu-content-text">
                <Link to="/">ホーム</Link>
            </div>
            <div className="menu-content-text">
                <Link to="/">自己紹介</Link>
            </div>
            <div className="menu-content-text">
                <Link to="/">お問い合わせ</Link>
            </div>
        </div>
    )
};

export default MenuContentComponent;