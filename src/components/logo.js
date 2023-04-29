const LogoComponent = () => {
    return (
        <div id="logo">
            <img src={`${process.env.PUBLIC_URL}/bird512.png`} alt="" />
            <p>ありがとう</p>
            <p>介護職</p>
        </div>
    );
};

export default LogoComponent;