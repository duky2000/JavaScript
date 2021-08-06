let images = ['https://e.gamevui.vn/web/pikachu/images/pieces34.png', 'https://e.gamevui.vn/web/pikachu/images/pieces2.png', 'https://e.gamevui.vn/web/pikachu/images/pieces12.png',
    'https://e.gamevui.vn/web/pikachu/images/pieces36.png', 'https://e.gamevui.vn/web/pikachu/images/pieces32.png', 'https://e.gamevui.vn/web/pikachu/images/pieces14.png', 'https://e.gamevui.vn/web/pikachu/images/pieces3.png',
    'https://e.gamevui.vn/web/pikachu/images/pieces16.png', 'https://e.gamevui.vn/web/pikachu/images/pieces15.png', 'https://e.gamevui.vn/web/pikachu/images/pieces25.png', 'https://e.gamevui.vn/web/pikachu/images/pieces30.png',
    'https://e.gamevui.vn/web/pikachu/images/pieces7.png', 'https://e.gamevui.vn/web/pikachu/images/pieces33.png', 'https://e.gamevui.vn/web/pikachu/images/pieces9.png',
    'https://e.gamevui.vn/web/pikachu/images/pieces31.png', 'https://e.gamevui.vn/web/pikachu/images/pieces27.png', 'https://e.gamevui.vn/web/pikachu/images/pieces12.png',
    'https://e.gamevui.vn/web/pikachu/images/pieces29.png', 'https://e.gamevui.vn/web/pikachu/images/pieces6.png', 'https://e.gamevui.vn/web/pikachu/images/pieces13.png']
let interval
let time
let score = document.getElementById("score1");
let audio = document.getElementById("audio");

function countDown() {
    console.log(time)
    time--;
    document.getElementById('time').innerText = time + '';
    if (time < 1) {
        clearInterval(interval);
        document.getElementById("score2").innerText = "Số điểm của bạn là : " + score.innerText;
        document.getElementById("ketqua").style.display = "block";
    }
}

function khoiTao() {
    audio.play()
    let squares = document.getElementsByTagName("td");
    let square1;
    let square2;
    let target1;
    time = 60;
    score.innerText = "0"
    interval = setInterval(countDown, 1000);
    document.getElementById("game").style.display = "block";
    let table = document.getElementById("table");
    let str = "";
    for (let i = 0; i < 8; i++) {
        str += "<tr>";
        for (let j = 0; j < 18; j++) {
            let a = Math.floor(Math.random() * 20);
            let img = images[a];
            str += `<td> <img src="${img}" width="100%" height="100%"/></td>`
        }
        str += "</tr>";
    }
    table.innerHTML = str;
    document.getElementById("batdau").style.display = "none"
    document.getElementById("ketqua").style.display = "none"
    for (let i = 0; i < squares.length; i++) {
        squares[i].addEventListener("click", function (e) {
            console.log("test")
            if (!square1) {
                square1 = e.target.src;
                target1 = e.target;
            } else if (target1 != e.target) {
                square2 = e.target.src;
                if (square1 == square2) {
                    e.target.style = "display: none";
                    target1.style = "display: none";
                    +(score.innerText)++;
                }
                square1 = "";
                square2 = "";
            }
        })
    }

}


