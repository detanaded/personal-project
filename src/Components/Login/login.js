import React, {Component} from 'react'
import axios from 'axios'


class Login extends Component {
  constructor(){
  super()
  this.state ={
    username: '',
    password: ''
  }
}
handleLoginInfoUpdate = (e) => {
  this.setState({
    [e.target.name]: e.target.value
  })
    }

    handleUserLogin = (e) => {
      e.preventDefault()
      const {username, password} = this.state
      axios.post('/auth/login', {username, password}).then((res) => {
        this.props.history.push('/details')
      })
      .catch((err) => {
        console.log(err)
      })
      e.target.username.value = ''
      e.target.password.value = ''
    }
  
    render(){
      console.log('THIS.STATE',this.state)
      return (
        <div>
          <form onSubmit={this.handleUserLogin}>
            <input type='text' name='username' placeholder='Username' onChange={this.handleLoginInfoUpdate}/>
            <input type='password' name='password' placeholder='Password' onChange={this.handleLoginInfoUpdate}/>
            <button>Log In</button>
          </form>
        </div>
      )
    }
  }


export default Login