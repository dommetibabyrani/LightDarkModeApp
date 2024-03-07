// Write your code here
import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {isDarkMode: true}

  onChangeMode = () => {
    const {isDarkMode} = this.state

    this.setState({isDarkMode: !isDarkMode})
  }

  render() {
    let modeCls
    const {isDarkMode} = this.state

    const modeText = isDarkMode
      ? ((modeCls = 'dark-mode'), 'Light Mode')
      : ((modeCls = 'light-mode'), 'Dark Mode')

    return (
      <div className="bg-container">
        <div className={modeCls}>
          <h1 className="heading">Click To Change Mode</h1>
          <button className="button" onClick={this.onChangeMode} type="button">
            {modeText}
          </button>
        </div>
      </div>
    )
  }
}
export default LightDarkMode
