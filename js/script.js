var currentDate = new Date();
var enteredDate = prompt("Tarixi daxil edin: dd.mm.yyyy");
var enteredTime = prompt("Deqiq vaxti daxil edin: hh.mm.ss");
var value = enteredDate + "." + enteredTime;

function TimeAgo(value) {
    value = value.split(".");
    var given = new Date(value[2], value[1] - 1, value[0], value[3], value[4], value[5]);
    timeDiff = currentDate.getTime() - given.getTime();
    seconds = timeDiff / 1000;
    minutes = timeDiff / 1000 / 60;
    hours = timeDiff / 1000 / 60 / 60;
    days = Math.floor(timeDiff / 1000 / 60 / 60 / 24);
    months = (Math.floor(timeDiff / 1000 / 60 / 60 / 24 / 30)) - 1;
    if (timeDiff < 0) {
        show = "Wrong given data!";
    } else if (seconds < 60) {
        show = Math.floor(seconds) + " seconds ago";
    } else if (minutes < 60) {
        show = Math.floor(minutes) + " minutes ago";
    } else if (hours < 24) {
        show = Math.floor(hours) + " hours ago";
    } else if (days < 7) {
        show = Math.floor(days) + " days ago";
    } else if (days == 7) {
        show = "1 week ago";
    } else if (days > 7 && days < 14) {
        show = "1 week " + (Math.floor(days - 7)) + " days ago";
    } else if (days == 14) {
        show = "2 weeks ago";
    } else if (days > 14 && days < 21) {
        show = "2 weeks " + (Math.floor(days - 14)) + " days ago";
    } else if (days == 21) {
        ahow = "3 weeks ago";
    } else if (days > 21 && days < 28) {
        show = "3 weeks " + (Math.floor(days - 21)) + " days ago";
    } else if (days == 28) {
        show = "4 weeks ago";
    } else if (days > 28 && days < 30) {
        show = "4 weeks " + (Math.floor(days - 28)) + " days ago";
    } else if (days >= 30 && months == 1) {
        show = "1 month ago";
    } else if (months == 12) {
        show = "1 year ago"
    } else if (months > 12) {
        show = given;
    } else {
        var i = 1;
        while (months > i) {
            i++
        }
        show = i + " months ago";
    }
    return show;
}

var result = TimeAgo(value);
console.log(result);