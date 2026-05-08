
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
const omikujiImg = document.getElementById("omikuji-img");

omikujiImg.innerHTML ="<img src='happy.png'>";

button.addEventListener("click", function(){
    const randomNumber = Math.floor(Math.random() * fortunes.length);
    const resultText = fortunes[(randomNumber)];

    result.textContent = fortunes[(randomNumber)];

    if (resultText.includes("大吉")){
        result.style.color = "purple"
        advice.textContent = "いいですね。とても"
        omikujiImg.innerHTML ="<img src='happydai.png'>";
    } else if (resultText.includes("小吉")){
        result.style.color = "blue"
        advice.textContent = ""
        omikujiImg.innerHTML ="<img src='happysyo.png'>";
    }else if (resultText.includes("凶")){
        result.style.color = "green"
        advice.textContent = ""
        omikujiImg.innerHTML ="<img src='happykyo.png'>";
    }else if (resultText.includes("中吉")){
        omikujiImg.innerHTML ="<img src='happytyu.png'>"
        advice.textContent = "";
    }else if (resultText.includes("吉")){
        result.style.color = "yellow"
        omikujiImg.innerHTML ="<img src='happykiti.png'>"
        advice.textContent = "";
    } else {
        result.style.color = "black"
        advice.textContent = "";
    }
});