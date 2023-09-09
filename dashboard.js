
const weekDay = document.getElementById('today')

const timeUTC = document.getElementById('time')

const currentDay = new Date()

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

const today = days[currentDay.getDay()]


weekDay.textContent = today
timeUTC.textContent = currentDay.getTime()