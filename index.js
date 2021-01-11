const convertToMinutes = (string) => {
    let newString = string.replace(':', '');
    let hours, minutes, totalMinutes;

    switch ( newString.length) {
        case 4:
            hours = newString.slice(0,2);
            break
        case 3:
            hours = newString.slice(0,1);
            break
        default:
            hours = 0;
    }
    minutes = newString % 100;
    hours = parseInt(hours);
    totalMinutes = (hours * 60) + minutes;

    return totalMinutes;
}
const calculateTotal = (starting, finishing) => {

    // (if starting > 10pm && finishing < 10pm) + 24h
    if(starting > 600 && finishing < 600) {
        finishing += 1440;
    }
    let total = finishing - starting;

    return total;
}
const convertToString = (number) => {

    var hours = Math.floor(number / 60);  
    var minutes = number % 60;

    minutes < 10 ? minutes = '0' + minutes : minutes += 0;

    return hours + ":" + minutes; 
}
const getMondayDate = (date) => {
    let weekday = date.getDay();
    
    let monday = new Date(date.getTime());

    monday.setDate(monday.getDate() - (weekday - 1) )
    monday.toISOString()

    return monday
}
const getTotalObj = (starting, finishing) => {
    let totalObj = {}
    const startingMinutes = convertToMinutes(starting);
    const finishingMinutes = convertToMinutes(finishing);
    const totalMinutes = calculateTotal(startingMinutes, finishingMinutes)
    const totalString = convertToString(totalMinutes)

    totalObj.totalMinutes = totalMinutes
    totalObj.totalString = totalString

    return totalObj
}
modules.export = {
    getTotalObj: getTotalObj,
    getMondayDate: getMondayDate,
    convertToMinutes: convertToMinutes,
    convertToString: convertToString,
    calculateTotal: calculateTotal
}
