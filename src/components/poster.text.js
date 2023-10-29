const PosterTextComponent = ({ posterInfo }) => {
    return (
        <div id="poster-text">
            <h1>{posterInfo.desc}</h1>
            <p>普段、話かけても返答のない利用者さんが、「今日は綺麗ですよ」を聞いて「ありがとうね」と笑顔で話してくれた。</p>
            <p>その時、周りも綺麗に見えてきた。</p>
        </div>
    );
};

export default PosterTextComponent;