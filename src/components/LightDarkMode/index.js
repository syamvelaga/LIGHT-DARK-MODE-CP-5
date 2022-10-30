// Write your code here
import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {isClick: false}

  clickEvent = () => {
    this.setState(prev => ({
      isClick: !prev.isClick,
    }))
  }

  trueCondition = () => (
    <div className="main-bg">
      <div className="inner-bg">
        <h1>Click to Change to Mode</h1>
        <div>
          <button onClick={this.clickEvent} type="button">
            Dark Mode
          </button>
        </div>
      </div>
    </div>
  )

  falseCondition = () => (
    <div className="main-bg">
      <div className="second-bg">
        <h1 className="white-color">Click to Change to Mode</h1>
        <div>
          <button onClick={this.clickEvent} type="button">
            Light Mode
          </button>
        </div>
      </div>
    </div>
  )

  render() {
    const {isClick} = this.state
    return <>{isClick ? this.trueCondition() : this.falseCondition()}</>
  }
}

export default LightDarkMode
