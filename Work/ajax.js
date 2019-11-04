// TASK1

document.querySelector('.click').onclick = function(){
    let p = document.querySelector(".time");
    let xhttp = new XMLHttpRequest();
    let out = '';
    let timezone = document.querySelector('.timezone').value;
    xhttp.open('POST', 'http://date.jsontest.com/', true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send();

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let time = JSON.parse(this.response);
            for (let key in time) {
                 out = time.milliseconds_since_epoch;
            }
            function calcTime(offset) {
                let d = new Date();
                let utc = out - 10800000;
                let nd = new Date(utc + (3600000*offset));
                return new Date(nd);
            }
            if(timezone == 'central-time'){
                old = calcTime(-6);
                date(old);
            }
            if(timezone == 'minsk'){
                old = calcTime(3);
                date(old);
            }
            if(timezone == 'astana'){
                old = calcTime(6);
                date(old);
            }
            if(timezone == 'norfolk-island'){
                old = calcTime(11.30);
                date(old);
            }
        }
    }
}
function date(old){
    let format_time = document.querySelector('.format-time').value;
    let p_time = document.querySelector('.p-time');
    Date.prototype.format = function (mask, utc) {
    return dateFormat(this, mask, utc);
    }
    if(format_time == 'one'){
        p_time.innerHTML = old.format("dd.mm.yyyy HH:MM:ss");
    }
    if(format_time == 'two'){
        p_time.innerHTML = old.format("yyyy-mm-dd HH:MM");
    }
    if(format_time == 'three'){
        p_time.innerHTML = old.format("yyyy/mm/dd HH:MM:ss");
    }
}


// TASK2

let random = document.querySelector('.random');
const FILTERED_HTML = document.querySelector('.filtered-numbers')
const MAX_VALUE = 65536;
const ZERO = '0000000000000000';
const NUMBERS = 50;

let num_array = [];
let num_array_str= [];

for(count_cycles = 1;count_cycles <= NUMBERS;count_cycles++){
    let random_number = Math.trunc(Math.random()*(MAX_VALUE));
    random.innerHTML += random_number + ', ';
    bin_string = random_number.toString(2);
    bin_string = (ZERO + bin_string).slice(-16);
    num_array.push(random_number);
    num_array_str.push(bin_string);
}

let filter_array = [...new Array(16)];
let filter_string = ZERO;
document.querySelectorAll('.button').forEach(
    function(item) {
        item.onclick = function(){
            this.classList.toggle("button_selected");
            value = +this.value - 1;
            filter_array[value] = !filter_array[value];
            filter_string = '' + filter_string.substr(0,value) + (filter_array[value] ? '1' : '0') + filter_string.substr(value + 1);

FILTERED_HTML.innerHTML = num_array.filter(function(element, index){
    return compareFilter(num_array_str[index], filter_string)
}).join(', ');
        }
    }
);
function compareFilter(number_string,filter_string){
    for (let i = 0; i < 16; i++) {
        if (number_string[i] < filter_string[i]) {
            return false;
        }
    };
    return true;
}
