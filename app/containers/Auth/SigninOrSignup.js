import { Link } from 'react-router'

const SigninOrSignup = ({ user, signout }) => {
  return (
    <div>
      { user &&
        <div>
        Hello { user.email }
        {' '}
        <a href='#' onClick={signout}>Sign out</a>
        </div>
      }
      { !user &&
        <Link to={'/signin'}>Sign in</Link>
      }
    </div>
  )
}

SigninOrSignup.propTypes = {
  user: React.PropTypes.object,
  signout: React.PropTypes.func.isRequired
}

export default SigninOrSignup
