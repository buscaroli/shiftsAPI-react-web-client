const today = () => {
  let now = new Date()

  let day = addPadding(now.getDate())
  let month = addPadding((1 + now.getMonth()).toString())
  let year = now.getFullYear()

  let nowString = `${day}-${month}-${year}`
  return nowString
}

const todayWithDay = () => {
  let now = new Date()
  let dayOfWeek = dayToString(now.getDay())
  let day = addPadding(now.getDate())
  let month = monthToString(now.getMonth())
  let year = now.getFullYear()

  let nowString = `${dayOfWeek} ${day} ${month} ${year}`
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
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  if (num < 0 || num > 6) return ''
  return days[num]
}

const monthToString = (num) => {
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ]
  if (num < 0 || num > 11) return num
  return months[num]
}

module.exports = { today, todayUS, addPadding, todayWithDay }
