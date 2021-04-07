// current day/hour in moment.js
let hour = moment().format("H");
let day = moment().format("dddd, MMMM Do");

const dayDiv = $("#currentDay");
dayDiv.text(day);

let times = JSON.parse(localStorage.getItem("event:")) ||
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
];

function plannerMaker() {
    console.log("times.length:", times.length);
    for(i=0; i < times.length; i++) {
        $("#loadRows").append("<div class='row' id='row" + i + "'></div>");
        let userInput = $("<textarea class='col inputCol'>" + times[i].event + "</textarea>")
        $("#row" + i).append("<div class='col-1 time'>" + times[i].hour + "</div>");
        //styles the textarea being added depending on whether it's before or after the current hour
        if (hour == times[i].dataHour) {
            $(userInput).attr("class", "present col inputCol");
        } else if (hour < times[i].dataHour) {
            $(userInput).attr("class", "past col inputCol");
        } else if (hour > times[i].dataHour) {
            $(userInput).attr("class", "future col inputCol");
        }
        console.log("times.dataHour:", times[i].dataHour);
         //adds text area for users to add events or puts an event in the div if there is one
        $("#row" + i).append(userInput)
        $("#row" + i).append("<button type='button' class='btn col-1'><i class='fas fa-save'></i></button>")
        //jQuery eventlistener!
        $(".btn").click(function (){ 
            for (n=0; n < times.length; n++) {
                //returns the text value of the text area in the same row the time being selected
                if (times[n].hour === $(this).siblings(".time").text()) {
                    console.log("$(this):", $(this).siblings(".time").text());
                    console.log("text:", $(this).siblings(".inputCol").val());
                    //sets text value of current hour to local storage
                    times[n].event = $(this).siblings(".inputCol").val()
                    localStorage.setItem("event:", JSON.stringify(times))
                }
            }
        })
    };
}
    

window.onload = function dayPlanner() {
    plannerMaker();
}