function timer () {
    let endDateText = document.querySelector('.endDateText')
let endDate = new Date(2024,0,14,7,30) 

weekDays = [
    'Sunday, ',
    'Monday, ',
    "Tuesday, ",
    "Wednesday, ",
    "Thursday, ",
    "Friday, ",
    'Saturday, '
]
months = [
    'Jan ',
    'Feb ',
    'Mar ',
    'Apl ',
    'May ',
    'Jun ',
    'Jul ',
    "Aug ",
    "Sep ",
    "Oct ",
    "Nov ",
    "Dec ",
]
getWeekDate = endDate.getDay()
getMonth = endDate.getMonth()
time = 'am'
minutes = endDate.getMinutes()
hours = endDate.getHours()
if(endDate.getHours() >= 12) {
    time = 'pm'
}
if(minutes < 10){
    minutes = '0' + String(minutes)
}
if(hours < 10){
    hours = '0' + String(hours)
}
endDateText.textContent =  'Giveaway ends on ' + weekDays[getWeekDate] + endDate.getDate() + ' ' + months[getMonth]  + endDate.getFullYear() + ' ' + hours + ':' + minutes + time




let countdaystext = document.querySelector('.days')
let counthourstext = document.querySelector('.hours')
let countminutestext = document.querySelector('.minutes')
let countsecondstext = document.querySelector('.seconds')
let now = new Date()
let nowInMs = now.getTime()
let endInMs = endDate.getTime()
let diff = endInMs - nowInMs


let oneDay = 24 * 60 * 60 * 1000
let oneHour = 60 * 60 * 1000
let oneMinute = 60 * 1000



let endDays = diff / oneDay
let endHours = (diff % oneDay) / oneHour
let endMinutes = (diff % oneHour) / oneMinute
let endSeconds = (diff%oneMinute) / 1000








countdaystext.textContent = Math.floor(endDays)
counthourstext.textContent = Math.floor(endHours)
countminutestext.textContent = Math.floor(endMinutes)
countsecondstext.textContent = Math.floor(endSeconds)
}
timer()

setInterval(timer, 1000)






