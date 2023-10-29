const PosterTextComponent = ({ posterInfo }) => {
    return (
        <div id="poster-text">
            <h1>{posterInfo.desc}</h1>
            <p>「風の吹く秋の日、紅葉の林に鶯の声が響く。林の中には古刹が佇み、その屋根からは苔むした瓦の美しさが穏やかな和風庭園に映えている。石の道が枯葉で覆われ、参拝客たちはゆっくりと足を運ぶ。古刹の境内に立つ塔の影が、秋の日差しを和らげ、禅僧たちが瞑想に耽っている。</p>
            <p>この場所は時の流れを忘れる場所であり、石の燭台に灯る炎が静寂を照らす。茶室のすぐ脇に立つ庭園では、細心の注意を払った枯山水が、泉の音とともに自然の美を称えている。ここでは、茶の湯が儀式的に行われ、茶席に座る人々は、深い感謝の気持ちと共に、茶碗を受け取る。</p>
            <p>古刹の庭園を抜けると、広大な竹林が広がり、竹の葉が風にゆらめいている。竹の中には禅僧たちが静かに歩み、詠唱が木々に響く。自然の音と風景が、この場所の神秘的な平和さをさらに引き立てている。ここは、日本の古典文化と精神が息づく場所であり、その美と静けさは永遠に讃えられるべきものである。」</p>
        </div>
    );
};

export default PosterTextComponent;