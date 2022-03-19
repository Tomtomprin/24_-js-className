const btnMorning = document.querySelector('.btn_morning');
const btnNight = document.querySelector('.btn_night');


// 以下が今回重要な記述

// （１）querySelectorAllの戻り値は、ElementオブジェクトをまとめたNodeListオブジェクト。
const planets = document.querySelectorAll('.planet');
// =>（返り値）NodeList(2) [div.milky_way_galaxy.solar_system.planet, div.milky_way_galaxy.solar_system.planet]



btnMorning.onclick = function () {
    // （２）NodeListオブジェクトは、配列に対して繰り返し処理を行うfor-of文で処理できる。
    for (let planet of planets) {
        planet.style.backgroundColor = 'rgb(244, 244, 129)';
    }
}

btnNight.onclick = function () {
    // （２）NodeListオブジェクトは、配列に対して繰り返し処理を行うfor-of文で処理できる。
    for (let planet of planets) {
        planet.style.backgroundColor = 'rgb(118, 135, 152)';
    }
}