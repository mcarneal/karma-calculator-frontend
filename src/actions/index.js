export const login = (user) => {
  return {
    type: 'LOGIN',
    payload: user
  }
}

export const selectedUser = (id) => {
  return {
    type: 'SELECTEDUSER',
    payload: id
  }
}

export const newCords = (cords) => {
  return {
    type: 'NEWCORDS',
    payload: cords
  }
}

export const addMap = () => {
  return {
    type: 'ADDMAP',
    payload: true
  }
}

export const myEvents = (events) => {
  return {
    type: 'MYEVENTS',
    payload: events
  }
}

export const mapPosition = (cords) => {
  return {
    type: 'MAPPOSITION',
    payload: cords
  }
}


export const events = (events) => {
  return {
    type: 'EVENTS',
    payload: events
  }
}

export const comments = (comments) => {
  return {
    type: 'COMMENTS',
    payload: comments
  }
}


export const signmeUp = (user, routerHistory) => {
  return dispatch => {
    fetch('http://localhost:3000/api/v1/users', {
      method: 'POST',
      headers: {
        "Accepts": "application/json",
        "content-type": "application/json"
      },
      body: JSON.stringify({
        user: user
      })
    })
      .then(res => res.json())
      .then(data => {
        if (data.errors) {
          alert(data.errors)
        } else {
        dispatch({
          type: 'SIGNME_UP',
          payload: data.user
        })
        dispatch({
          type: 'LOGIN', payload: data
        })
          localStorage.setItem('token', data.token)
          routerHistory.push('/home')
      }
      })
  }
}


export const autoLogin = () => {
  return dispatch => {
    fetch('http://localhost:3000/api/v1/auto_login', {
      headers: {
        'Authorization': localStorage.getItem('token')
      }
    })
      .then(res => res.json())
      .then(data => {
        if (data.error) {
          alert(data.error)
        } else {
            dispatch({ type: 'LOGIN', payload: data})
             
        }
      })
  }
}

export const myProfile = () => {
  return{
    type: 'MY_PROFILE'
  }
}


export const fetchData = () => {
  return dispatch => {
    fetch("http://localhost:3000/api/v1/events")
    .then(res => res.json())
    .then(data => {
      if (data.error){
        alert(data.error)
      } else {
        console.log(data)
        dispatch({
          type: 'FETCH_ALL',
          payload: data
        })
      }
    })
  }
}
