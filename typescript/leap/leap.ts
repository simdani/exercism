function isLeapYear(year:number): boolean {
    let isLeap: boolean = true

    if (year % 4 !== 0) {
        isLeap = false
    } else if (year % 400 === 0) {
        isLeap = true
    } else if (year % 100 === 0) {
        isLeap = false
    }

    return isLeap
}

export default isLeapYear