function getTime(date) {
    let dateArr = date.split(' ');
    let time = dateArr[1];
    let timeArr = time.split(':');
    return timeArr[0] + ':' + timeArr[1];
}
module.exports = getTime;