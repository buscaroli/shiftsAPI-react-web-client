const today = () => {
  let now = new Date()
  let dayOfWeek = dayToString(now.getDay())
  let day = addPadding(now.getDate())
  let month = addPadding((1 + now.getMonth()).toString())
  let year = now.getFullYear()

  let nowString = `${dayOfWeek} ${day}-${month}-${year}`
  return nowString
}

const todayUS = () => {
  let now = new Date()
  let day = addPadding(now.getDate())
  let month = addPadding((1 + now.getMonth()).toString())
  let year = now.getFullYear()

  let nowString = `${month}-${day}-${year}`
  return nowString
}

const addPadding = (value) => {
  if (value.length === 1) {
    return `0${value}`
  } else {
    return value
  }
}

const dayToString = (num) => {
  const days = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ]
  if (num < 0 || num > 6) return ''
  return days[num]
}

module.exports = { today, todayUS, addPadding }
