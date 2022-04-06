import axios from 'axios'

let baseUrl = 'http://buscaroli-shifts-api.herokuapp.com'

export const serverSignUp = ({ name, email, password }) => {
  return new Promise(function (resolve, reject) {
    axios
      .post(baseUrl + '/users/signup', {
        name,
        email,
        password,
      })
      .then((response) => {
        if (response.status >= 200 && response.status < 300) {
          const userData = {
            name: response.data.user.name,
            email: response.data.user.email,
            id: response.data.user.id,
            jwt: response.data.token,
          }
          resolve(userData)
        } else {
          reject({ error: 'Unable to Sign Up, try again later.' })
        }
      })
      .catch((error) => {
        reject({
          error,
        })
      })
  })
}

export const serverLogin = ({ email, password }) => {
  return new Promise(function (resolve, reject) {
    axios
      .post(baseUrl + '/users/login', {
        email,
        password,
      })
      .then((response) => {
        if (response.status >= 200 && response.status < 300) {
          const userData = {
            name: response.data.user.name,
            email: response.data.user.email,
            id: response.data.user.id,
            jwt: response.data.token,
          }
          resolve(userData)
        } else {
          reject({ error: 'Unable to Login, try again later.' })
        }
      })
      .catch((error) => {
        reject({
          error,
        })
      })
  })
}

export const serverLogout = ({ jwt }) => {
  const token = `Bearer ${jwt}`
  return new Promise(function (resolve, reject) {
    axios
      .post(
        baseUrl + '/users/logout',
        {},
        {
          headers: {
            Authorization: token,
          },
        }
      )
      .then((response) => {
        if (response.status >= 200 && response.status < 300) {
          resolve({ response: 'Logged Out successfully.' })
        } else {
          reject({ error: 'Unable to Logout, try again later.' })
        }
      })
      .catch((error) => {
        reject({
          error,
        })
      })
  })
}

export const shiftsGetAll = ({ _id, jwt }) => {
  const token = `Bearer ${jwt}`
  return new Promise(function (resolve, reject) {
    axios
      .get(
        baseUrl + '/shifts',
        {
          _id,
        },
        {
          headers: {
            Authorization: token,
          },
        }
      )
      .then((response) => {
        if (response.status >= 200 && response.status < 300) {
          resolve(response)
        } else {
          reject({ error: 'Unable to retrieve shifts. Try again later.' })
        }
      })
      .catch((error) => {
        reject({ error })
      })
  })
}

export const addShift = (shift, user) => {
  const token = `Bearer ${user.jwt}`
  return new Promise(function (resolve, reject) {
    axios
      .post(
        baseUrl + '/shifts/add',
        {
          owner: user.id,
          when: shift.when,
          where: shift.where,
          description: shift.description,
          billed: shift.billed,
          paid: shift.paid,
        },
        {
          headers: {
            Authorization: token,
          },
        }
      )
      .then((response) => {
        if (response.status >= 200 && response.status < 300) {
          resolve(response)
        } else {
          reject({ error: 'Unable to add shift to the database.' })
        }
      })
      .catch((error) => {
        reject({ error })
      })
  })
}
