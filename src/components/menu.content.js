import React from "react";

const MenuContentComponent = (props) => {
    const {menuActive} = props;

    return (
        <div id="menu-content" className={`${menuActive}`}>
            <div className="menu-content-text">
                { // eslint-disable-next-line
                }<a href="#">ホーム</a>
            </div>
            <div className="menu-content-text">
                { // eslint-disable-next-line
                }<a href="#">自己紹介</a>
            </div>
            <div className="menu-content-text">
                { // eslint-disable-next-line
                }<a href="#">お問い合わせ</a>
            </div>
        </div>
    )
};

export default MenuContentComponent;