'use strict'

let currentEl = {}
currentEl.exerciseNumber = 0
currentEl.thisSet = 0
currentEl.exerInSet = 0
currentEl.totalExerInSet = 0
currentEl.totalSecondsSoFar = 0
currentEl.totalTimerSoFar = 0
currentEl.thisExerciseTime = 0
currentEl.speed = 0
currentEl.strength = 0
currentEl.position = 0

let data = [
    ["Exercise number", "Set", "Exer in set", "Total Exer in set", "Total seconds so far", "Total timer so far", "This exercise time", "Spreed", "Strength", "Position"],
    [0, 0, 0, 0, 0, "0: 00", 10, 0, 0, "getReady"],
    [1, 1, 1, 11, 30, "0: 30", 30, 85, 4, "DOWN"],
    [2, 1, 2, 11, 45, "0: 45", 15, 100, 5, "DOWN"],
    [3, 1, 3, 11, 75, "01: 15", 30, 120, 5, "DOWN"],
    [4, 1, 4, 11, 105, "1: 45", 30, 85, 4, "DOWN"],
    [5, 1, 5, 11, 135, "2: 15", 30, 120, 5, "DOWN"],
    [6, 1, 6, 11, 150, "2: 30", 15, 85, 5, "DOWN"],
    [7, 1, 7, 11, 180, "3: 00", 30, 120, 5, "DOWN"],
    [8, 1, 8, 11, 210, "3: 30", 30, 85, 4, "DOWN"],
    [9, 1, 9, 11, 240, "4: 00", 30, 120, 5, "DOWN"],
    [10, 1, 10, 11, 255, "4: 15", 15, 85, 5, "DOWN"],
    [11, 1, 11, 11, 285, "4: 45", 30, 120, 5, "DOWN"],
    [12, 2, 1, 11, 315, "5: 15", 30, 100, 4, "DOWN"],
    [13, 2, 2, 11, 345, "5: 45", 30, 65, 9, "UP"],
    [14, 2, 3, 11, 350, "5: 50", 5, 130, 5, "DOWN"],
    [15, 2, 4, 11, 395, "6: 35", 45, 100, 4, "DOWN"],
    [16, 2, 5, 11, 425, "7: 5", 30, 130, 5, "DOWN"],
    [17, 2, 6, 11, 455, "7: 35", 30, 100, 4, "DOWN"],
    [18, 2, 7, 11, 470, "7: 50", 15, 130, 5, "DOWN"],
    [19, 2, 8, 11, 500, "8: 20", 30, 65, 9, "UP"],
    [20, 2, 9, 11, 515, "78: 35", 15, 130, 5, "DOWN"],
    [21, 2, 10, 11, 560, "9: 20", 45, 100, 4, "DOWN"],
    [22, 2, 11, 11, 590, "9: 50", 30, 130, 5, "DOWN"],
    [23, 3, 1, 8, 620, "10: 20", 30, 85, 4, "DOWN"],
    [24, 3, 2, 8, 650, "10: 50", 30, 65, 10, "UP"],
    [25, 3, 3, 8, 695, "11: 35", 45, 65, 10, "UP"],
    [26, 3, 4, 8, 710, "11: 50", 15, 75, 10, "UP"],
    [27, 3, 5, 8, 725, "12: 5", 15, 65, 7, "DOWN"],
    [28, 3, 6, 8, 800, "13: 20", 75, 65, 10, "UP"],
    [29, 3, 7, 8, 815, "13: 35", 15, 65, 7, "DOWN"],
    [30, 3, 8, 8, 890, "14: 50", 75, 65, 10, "UP"],
    [31, 4, 1, 11, 920, "15: 20", 30, 120, 5, "DOWN"],
    [32, 4, 2, 11, 950, "15: 50", 30, 100, 4, "DOWN"],
    [33, 4, 3, 11, 980, "16: 20", 30, 130, 5, "DOWN"],
    [34, 4, 4, 11, 1010, "16: 50", 30, 100, 4, "DOWN"],
    [35, 4, 5, 11, 1040, "17: 20", 30, 130, 5, "DOWN"],
    [36, 4, 6, 11, 1070, "17: 50", 30, 65, 10, "UP"],
    [37, 4, 7, 11, 1190, "19: 50", 120, 130, 5, "DOWN"],
    [38, 4, 8, 11, 1220, "20: 20", 30, 100, 4, "DOWN"],
    [39, 4, 9, 11, 1250, "20: 50", 30, 130, 5, "DOWN"],
    [40, 4, 10, 11, 1280, "21: 20", 30, 65, 10, "UP"],
    [41, 4, 11, 11, 1400, "23: 20", 120, 130, 5, "DOWN"],
    [42, 5, 1, 13, 1430, "23: 50", 30, 85, 5, "DOWN"],
    [43, 5, 2, 13, 1460, "24: 20", 30, 60, 7, "UP"],
    [44, 5, 3, 13, 1490, "24: 50", 30, 85, 7, "UP"],
    [45, 5, 4, 13, 1520, "25: 20", 30, 90, 7, "DOWN"],
    [46, 5, 5, 13, 1550, "25: 50", 30, 85, 7, "UP"],
    [47, 5, 6, 13, 1580, "26: 20", 30, 65, 5, "DOWN"],
    [48, 5, 7, 13, 1610, "26: 50", 30, 65, 7, "UP"],
    [49, 5, 8, 13, 1640, "27: 20", 30, 85, 7, "UP"],
    [50, 5, 9, 13, 1670, "27: 50", 30, 90, 7, "DOWN"],
    [51, 5, 10, 13, 1700, "28: 20", 30, 65, 5, "DOWN"],
    [52, 5, 11, 13, 1730, "28: 50", 30, 65, 7, "UP"],
    [53, 5, 12, 13, 1760, "29: 20", 30, 85, 7, "UP"],
    [54, 5, 13, 13, 1790, "29: 50", 30, 90, 7, "DOWN"],
    [55, 6, 1, 18, 1820, "30: 20", 30, 100, 4, "DOWN"],
    [56, 6, 2, 18, 1850, "30: 50", 30, 130, 5, "DOWN"],
    [57, 6, 3, 18, 1910, "31: 50", 60, 100, 4, "DOWN"],
    [58, 6, 4, 18, 1940, "32: 20", 30, 130, 5, "DOWN"],
    [59, 6, 5, 18, 1970, "32: 50", 30, 85, 4, "DOWN"],
    [60, 6, 6, 18, 2000, "33: 20", 30, 130, 4, "DOWN"],
    [61, 6, 7, 18, 2005, "33: 25", 5, 130, 4, "UP"],
    [62, 6, 8, 18, 2010, "33: 30", 5, 130, 4, "DOWN"],
    [63, 6, 9, 18, 2015, "33: 35", 5, 130, 4, "UP"],
    [64, 6, 10, 18, 2020, "33: 40", 5, 130, 4, "DOWN"],
    [65, 6, 11, 18, 2080, "34: 40", 60, 100, 4, "DOWN"],
    [66, 6, 12, 18, 2110, "35: 10", 30, 130, 5, "DOWN"],
    [67, 6, 13, 18, 2140, "35: 40", 30, 85, 4, "DOWN"],
    [68, 6, 14, 18, 2170, "36: 10", 30, 130, 4, "DOWN"],
    [69, 6, 15, 18, 2175, "36: 15", 5, 130, 4, "UP"],
    [70, 6, 16, 18, 2180, "36: 20", 5, 130, 4, "DOWN"],
    [71, 6, 17, 18, 2185, "36: 25", 5, 130, 4, "UP"],
    [72, 6, 18, 18, 2190, "36: 30", 5, 130, 4, "DOWN"],
    [73, 7, 1, 11, 2250, "37: 30", 60, 100, 4, "DOWN"],
    [74, 7, 2, 11, 2295, "38: 15", 45, 65, 10, "UP"],
    [75, 7, 3, 11, 2415, "40: 15", 120, 65, 7, "DOWN"],
    [76, 7, 4, 11, 2460, "41: 0", 45, 65, 9, "DOWN"],
    [77, 7, 5, 11, 2490, "41: 30", 30, 65, 11, "UP"],
    [78, 7, 6, 11, 2520, "42: 0", 30, 65, 10, "DOWN"],
    [79, 7, 7, 11, 2550, "42: 30", 30, 65, 12, "UP"],
    [80, 7, 8, 11, 2580, "43: 0", 30, 65, 10, "DOWN"],
    [81, 7, 9, 11, 2610, "43: 30", 30, 65, 12, "UP"],
    [82, 7, 10, 11, 2625, "43: 45", 15, 65, 10, "DOWN"],
    [83, 7, 11, 11, 2670, "44: 30", 45, 65, 12, "UP"]
]

let btnTarget = document.getElementById('center')
let el = document.createElement("button")
el.id = "startBtn"
el.innerHTML = "Start"
el.addEventListener("click", start)
document.getElementById('center').appendChild(el)

let thisStatus = "waitingToStart"

let counter = 0
let exercise = {}
let timeOutNextExercise = {}

// starting the course
function start() {

    if (document.getElementById('center').firstChild) {
        document.getElementById('center').removeChild(document.getElementById('center').firstChild)
    }

    let btnTarget = document.getElementById('center')
    let el = document.createElement("button")
    el.id = "pauseBtn"
    el.innerHTML = "Pause"
    el.addEventListener('click', pause)
    document.getElementById('center').appendChild(el)

    thisStatus = "working"
    console.log('started')
    nextExercise()
}


function nextExercise() {
    counter++

    if (counter > data.length - 1) {
        counter = 0
        return
    }

    document.getElementById('ex-number').innerHTML = counter-1

    if (data[counter - 1][4]>0){
        document.getElementById('progress').innerHTML = ((data[counter - 1][4] / 2670) * 100).toFixed(2) + "%"
    }
    
    

    document.getElementById('speed').innerHTML = data[counter][7]
    document.getElementById('strength').innerHTML = data[counter][8]
    document.getElementById('position').innerHTML = data[counter][9]

    //document.getElementById('total-timer').innerHTML = data[counter][4]
    document.getElementById('timer-of-current').innerHTML = 0
    document.getElementById('total-of-current').innerHTML = data[counter][6]

    if (counter + 1 < data.length) {
        document.getElementById('next-speed').innerHTML = data[counter + 1][7]
        document.getElementById('next-strength').innerHTML = data[counter + 1][8]
        document.getElementById('next-position').innerHTML = data[counter + 1][9]
    } else {
        document.getElementById('next-speed').innerHTML = "stop"
        document.getElementById('next-strength').innerHTML = "stop"
        document.getElementById('next-position').innerHTML = "stop"
    }

    let thisTimeExercise = (data[counter][6] + 1) * 1000
    console.log(thisTimeExercise)

    exercise = setInterval(clockTick, 1000)

    timeOutNextExercise = setTimeout(() => {

        clearInterval(exercise);
        next()

    }, thisTimeExercise + 1);


}

function next() {
    nextExercise()
}


function clockTick() {
    let thisTime = +document.getElementById('timer-of-current').innerHTML
    //console.log(thisTime)
    thisTime++
    document.getElementById('timer-of-current').innerHTML = thisTime
}

function pause() {

    document.getElementById('center').removeChild(document.getElementById('center').firstChild)
    thisStatus = "paused"

    let restartBtn = document.createElement('button')
    restartBtn.innerHTML = "Continue"
    restartBtn.addEventListener('click', continueExercise)
    document.getElementById('left').appendChild(restartBtn)

    let finishBtn = document.createElement('button')
    finishBtn.innerHTML = "Finish"
    finishBtn.addEventListener('click', finish)
    document.getElementById('right').appendChild(finishBtn)

    clearInterval(exercise)
    clearTimeout(timeOutNextExercise)
    console.log('stopped')


    counter = counter - 1
}

function continueExercise() {
    document.getElementById('left').removeChild(document.getElementById('left').firstChild)
    document.getElementById('right').removeChild(document.getElementById('right').firstChild)

    btnTarget = document.getElementById('center')
    el = document.createElement("button")

    start()

}


// finishing the course
function finish() {
    document.getElementById('ex-number').innerHTML = "0"
    document.getElementById('progress').innerHTML="0%"

    document.getElementById('left').removeChild(document.getElementById('left').firstChild)
    document.getElementById('right').removeChild(document.getElementById('right').firstChild)

    btnTarget = document.getElementById('center')
    el = document.createElement("button")

    el.id = "startBtn"
    el.innerHTML = "Start"
    el.addEventListener("click", start)
    document.getElementById('center').appendChild(el)

    document.getElementById('timer-of-current').innerHTML = "0:00"
    document.getElementById('total-of-current').innerHTML = "0:00"


    document.getElementById('speed').innerHTML = "0"
    document.getElementById('strength').innerHTML = "0"
    document.getElementById('position').innerHTML = "-"

    document.getElementById('next-speed').innerHTML = "0"
    document.getElementById('next-strength').innerHTML = "0"
    document.getElementById('next-position').innerHTML = "-"



    thisStatus = "waitingToStart"
    counter = 0
    exercise = {}
    timeOutNextExercise = {}

}