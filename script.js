
const fortunes=[
    "大吉　素敵な出会いがあるかも",
    "吉　よかったね",
    "中吉　少し勇気を出すといいことが起きる",
    "小吉　今日はゆっくり過ごそう",
    "凶　無理せず慎重に行動しよう",
];

const button = document.getElementById("kodama");
const result = document.getElementById("kodaman");
const advice = document.getElementById("advice");

button.addEventListener("click", function(){
    const randomNumber = Math.floor(Math.random() * fortunes.length);
    const resultText = fortunes[(randomNumber)];

    result.textContent = fortunes[(randomNumber)];

    if (resultText.includes("大吉")){
        result.style.color = "purple"
        advice.textContent = "いいですね。とても"; 
    } else if (resultText.includes("小吉")){
        result.style.color = "blue"; 
    } else {
        result.style.color = "black";
    }
});