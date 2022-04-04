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

// HOW TO USE
// serverSignUp(userObj)
//   .then(res => console.log(res))
//   .catch(err => console.log(err))
