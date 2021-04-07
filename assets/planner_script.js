// current day/hour in moment.js
let hour = moment().format("H")
let day = moment().format("dddd, MMMM Do");

const dayDiv = $("#currentDay");
dayDiv.text(day);

let times = JSON.parse(localStorage.getItem("plannerEvents")) ||
    [
        {
            dataHour: 9,
            hour: "9:00am",
            event: ""
        },
        {
            dataHour: 10,
            hour: "10:00am",
            event: ""
        },
        {
            dataHour: 11,
            hour: "11:00am",
            event: ""
        },
        {
            dataHour: 12,
            hour: "12:00pm",
            event: ""
        },
        {
            dataHour: 13,
            hour: "1:00pm",
            event: ""
        },
        {
            dataHour: 14,
            hour: "2:00pm",
            event: ""
        },
        {
            dataHour: 15,
            hour: "3:00pm",
            event: ""
        },
        {
            dataHour: 16,
            hour: "4:00pm",
            event: ""
        },
        {
            dataHour: 17,
            hour: "5:00pm",
            event: ""
        },
    ]

function plannerMaker() {
    console.log("times.length:", times.length);
    for(i=0; i < times.length; i++) {
        $("#loadRows").append("<div class='row'></div>");
        $(".row").append("<div class='col-1 time'></div>");
        $(".time").text(times.hour);
        //adds text area for users to add events or puts an event in the div if there is one
        $(".row").append("<textarea class='col'>" + times.event + "</textarea>")
        $(".row").append("<button type='button' class='btn'><i class='fas fa-save'></i></button>")
        
        if (hour == times.dataHour) {
            $(timeEl).attr("class", "present col");
        } else if (hour < times.dataHour) {
            $(timeEl).attr("class", "past col");
        } else if (hour > times.dataHour) {
            $(timeEl).attr("class", "future col");
        }
    }
};
    

window.onload = function dayPlanner() {
    plannerMaker();
}