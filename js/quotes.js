const quotes = [
    {
        quote: "가장 불만에 가득 찬 고객은 가장 위대한 배움의 원천이다.",
        author: "빌 게이츠, 전 마이크로소프트 창업자 / 현 기술고문",
    },
    {
        quote: "가끔은 혁신을 추구하다 실수할 때도 있다. 하지만 빨리 인정하고 다른 혁신을 개선해 나가는 것이 최선이다.",
        author: "스티븐 잡스, 애플 창업자",
    },
    {
        quote: "우리의 가장 큰 약점은 포기한다는 것에 있다. 성공하기위한 가장 확실한 방법은 한번만 더 시도해보는 것이다.",
        author: "토마스 에디슨, 발명가 / GE외 13개사 창업자",
    },
    {
        quote: "목표라는 것은 기한이 있는 꿈일 뿐이다.",
        author: "나폴레옹 힐, 미국 자기개발 작가",
    },
    {
        quote: "교육은 세상을 바꿀 수 있는 가장 강력한 무기다.",
        author: "넬슨 만델라, 전 남아공 대통령 / 인권 운동가",
    },
    {
        quote: "당신이 나서지 않는다면 아무것도 되지않을 것이다.",
        author: "마야 앤젤루, 미국 작가 / 배우 / 인권 운동가",
    },
    {
        quote: "성공을 하려면 실패를 두려워하는 마음보다 성공을 원하는 마음이 더 커야 한다.",
        author: "빌 코스비, 미국 전설의 코미디언",
    },
    {
        quote: "당신이 상상을 할 수 있다면 그것을 이룰 수 있고, 당신이 꿈꿀 수 있다면 그 꿈대로 될 수 있다.",
        author: "윌리엄 아더 워드, 미국 작가 / 시인",
    },
    {
        quote: "만약 평범하지 않는것에 대한 위험부담을 지기 싫다면 평범함으로 만족해야 한다.",
        author: "짐 론, 미국 사업가 / 작가",
    },
    {
        quote: "포기하지 말고 희망을 잃지 말며 자신을 저버리지 말라.",
        author: "크리스토퍼 리브, 미국 영화배우(오리지널 슈퍼맨)",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todayQoute = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQoute.quote;
author.innerText = todayQoute.author;