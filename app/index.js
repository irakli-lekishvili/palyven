import ReactDOM from 'react-dom'

class Ravi extends React.Component {
  render () {
    return (
      <h1>From React</h1>
    )
  }
}

ReactDOM.render(<Ravi />, document.getElementById('app'))
