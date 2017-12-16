import React from 'react'
import {connect} from 'react-redux'
import { googleAuth } from '../../actions/google-auth';

export class Login extends React.Component {
  googleSignin = () => {
    this.props.dispatch(googleAuth())
  }

  render () {
    return (
      <div> {
        this.props.auth.login ? 
        this.props.auth.code :
        <button onClick={this.googleSignin}>Login With Google</button>
      }
      </div>
    )
  }
}


export default connect(({auth}) => {return {auth}})(Login)