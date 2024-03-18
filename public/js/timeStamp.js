const dateDisplay = $('#display-time-detail');
const timeDisplay = $('#time-display');
const date = dateDisplay.text().slice(0,16);
const time = dateDisplay.text().slice(17,26)

dateDisplay.html(` ${date}`);
timeDisplay.html(time);

function fixTimestamp() {
    const timestamps = $('.timestamp');
    const hourDisplay = $('.timestamp2');
    for (let i = 0; i < timestamps.length; i++) {
        let text = timestamps[i].innerHTML;
        let date = text.slice(0, 16);
        let time = text.slice(17,25)
        timestamps[i].innerHTML = "Posted on " + date + " at " + time ;
    }
}
fixTimestamp();