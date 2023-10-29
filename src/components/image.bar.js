import ImageLinkComponent from "./image.link";

const ImageBarComponent = () => {
    const imgUrls = [
        {url: "https://i.imgur.com/yfWUuS2.jpg", desc: "食事介助"},
        {url: "https://i.imgur.com/M6Awrq7.jpg", desc: "入浴介助"},
        {url: "https://i.imgur.com/kfW0vhB.jpg", desc: "レクリエーション"},
        {url: "https://i.imgur.com/xMFAqbt.jpg", desc: "今日も綺麗"},
        {url: "https://i.imgur.com/s1K9SQP.jpg", desc: "就寝の見回り"},
        {url: "https://i.imgur.com/FRg9b1q.jpg", desc: "楽しい日々"},
    ];

    return (
        <div id="image-bar">
            <ImageLinkComponent description="dummy description" />
            {imgUrls.map((imgUrl, index) => {return (
                <ImageLinkComponent src={imgUrl.url} description={imgUrl.desc} index={index} total={imgUrls.length} />
            )})}
        </div>
    );
};

export default ImageBarComponent;