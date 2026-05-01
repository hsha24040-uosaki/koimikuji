
const fortunes=[
    "大吉　素敵な出会いがあるかも",
    "吉　よかったね",
    "中吉　少し勇気を出すといいことが起きる",
    "小吉　今日はゆっくり過ごそう",
    "凶　無理せず慎重に行動しよう",
];

const button = document.getElementById("kodama");
const result = document.getElementById("kodaman");

button.addEventListener("click", function(){
    const randomNumber = Math.floor(Math.random() * fortunes.length);

    result.textContent = fortunes[(randomNumber)];
});

"5pfdibe3"

if (result.textContent === fortunes[0]) {
    // Do something special for the first fortune
    result.style.color = "red";
}