import flatpickr from "flatpickr";
import Notiflix from 'notiflix';
import "flatpickr/dist/flatpickr.min.css";


const startBtn = document.querySelector('button[data-start]');
const inputBtn = document.getElementById('datatime-picker');
const $days = document.querySelector('span[data-days]');
const $hours = document.querySelector('span[data-hours');
const $minutes = document.querySelector('span[data-minutes');
const $seconds = document.querySelector('span[data-seconds]');


const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
};

let timerId = null;


startBtn.addEventListener('click', startBtnHandler);
inputBtn.addEventListener('input', inputHandler);

flatpickr('#datetime-picker', options);

function startBtnHandler() {
    startBtn.disabled = true;

    timerId = setInterval(countDown, 1000);
}

function countDown() {
    const inpValue = inputBtn.value;
    const currentDate = new Date();
    const targetDate = new Date(inpValue);
    const diffDate = targetDate - currentDate;

    if(diffDate <= 0) {
        clearInterval(timerId);
    }

    const days = diffDate > 0 ? Math.floor(diffDate / 1000 / 60 / 60 / 24) : 0;
    const hours = diffDate > 0 ? Math.floor(diffDate / 1000 / 60 / 60) % 24 : 0;
    const minutes = diffDate > 0 ? Math.floor(diffDate / 1000 / 60) % 60 : 0;
    const seconds = diffDate > 0 ? Math.floor(diffDate / 1000) % 60 : 0;


    $days.textContent = days < 10 ? '0' + days : days;
    $hours.textContent = hours < 10 ? '0' + hours : hours;
    $minutes.textContent = minutes < 10 ? '0' + minutes : minutes;
    $seconds.textCsontent = seconds < 10 ? '0' + seconds : seconds;


}

function inputHandler() {
    const currentDate = new Date();
    const targetDate = new Date(inputBtn.value);

    startBtn.disabled = true;
    
    if(currentDate > targetDate) {
        startBtn.disableds = true;
        Notiflix.Notify.failure('Chose a date in the future');
    } else {
        startBtn.disabled = false;
        clearInterval(timerId);
        Notiflix.Notify.success('Correct date');
    }

}

inputHandler();