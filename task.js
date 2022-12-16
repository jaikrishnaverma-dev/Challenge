// ======================================= SOLUTION 1 BLOCK ===============================================================================

let str='26y7 7r23 89b 23d5'
str=str.split(" ")
const regexp = /[A-z]/gi;
str.sort((a,b)=>(a.match(regexp)[0].toLowerCase()<b.match(regexp)[0].toLowerCase())?-1:1)
document.getElementById('result').innerText+=str.map(x=>x.replace(regexp, "")).join(" ")

// ======================================= SOLUTION 2 DIVIDER =======================================================================================


// bution action Handler getFriday for Date related question 
var months = ["January", "February", "March", "April", "May", "June", "July","August", "September", "October", "November", "December"];
var day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function getFriday() {
    let first = parseInt(document.getElementById('first').value)
    let last = parseInt(document.getElementById('last').value)
    if (first && last) {
        document.getElementById('res2').innerHTML=""
       let dates= (first<last)?FindMonth(first, last):FindMonth(last,first)
       dates.map(x=> document.getElementById('res2').innerHTML+='<div class="col-12 pt-2 pb-1 px-3">'+x+'</div>' )
    } else {
        alert("Enter all Inputs Please.")
    }
}

// this is recursion function to find day of 13 friday 
function FindMonth(from, to, month = 0, arr = []) {
    if (from > to)
        return arr
    let date = months[month] + " 13, " + from + " 23:15:00";
    var dt = new Date(date);
    if (day[dt.getDay()] == 'Friday')
        arr.push(months[month]+" - "+from)
    if (month == 11)
        return FindMonth(from + 1, to, 0, arr)
    else
        return FindMonth(from, to, month + 1, arr)

}