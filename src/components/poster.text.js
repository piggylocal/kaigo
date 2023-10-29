import PathBar from "./path.bar";

const PosterTextComponent = ({ posterInfo }) => {
    return (
        <div id="poster-text">
            <div id="poster-title-wrapper">
                <h1>
                    {posterInfo.desc}
                    <img src="https://i.imgur.com/gJpJ0tD.png" alt="" />
                </h1>
            </div>
            <PathBar posterInfo={posterInfo} />
            <div style={{textAlign: "center", margin: "3rem 0"}}><img src={posterInfo.url} alt="" style={{maxHeight: "100vh", maxWidth: "40vw"}} /></div>
            <p>普段、話かけても返答のない利用者さんが、「今日は綺麗ですよ」を聞いて「ありがとうね」と笑顔で話してくれた。</p>
            <p>その時、周りも綺麗に見えてきた。</p>
        </div>
    );
};

export default PosterTextComponent;