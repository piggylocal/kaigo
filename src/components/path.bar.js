const PathBarComponent = ({ posterInfo }) => {
    return (
        <div id="path-bar">
            <p>{`ホーム > 介護職の癒し > ${posterInfo.desc}`}</p>
        </div>
    );
};

export default PathBarComponent;