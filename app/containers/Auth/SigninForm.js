import { Field, reduxForm } from 'redux-form/immutable'

const SigninForm = (props) => {
  const { handleSubmit } = props

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='email'>Last Name</label>
        <Field name='email' component='input' type='email' />
      </div>
      <div>
        <label htmlFor='password'>Email</label>
        <Field name='password' component='input' type='password' />
      </div>
      <button type='submit'>Submit</button>
    </form>
  )
}

SigninForm.propTypes = {
  handleSubmit: React.PropTypes.func.isRequired
}

export default reduxForm({ form: 'signinForm' })(SigninForm)
