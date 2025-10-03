const timeFormat = (minutes) => {
    // this will give u the first value after division (102 / 10 = 10.2 bu it will return  10 removing the .2)
    const hours = Math.floor(minutes/60)
    // this will return the remaoinder after the division 
    const minutesRemainder = minutes % 60
    return `${hours}h ${minutesRemainder}m`
}

export default timeFormat;