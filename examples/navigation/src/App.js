import React from 'react'
import ReactTV from '../../../src/ReactTVEntry'

class App extends React.Component {
  componentDidMount() {
    if (waterfall) {
      waterfall(document.querySelector('.waterfall'));
    }
  }

  render() {
    let items = []
    /*
      onFocus={() => console.log('focus ' + i)}
          onBlur={() => console.log('blur ' + i)}
          onPress={() => console.log('press ' + i)}*/
    for (let i = 1; i <= 5; i++) {
      items.push(
        <div
          class="item"
          focusable
        >
          {i}
        </div>
      )
    }

    return (
      <div id='container'>
        <div class="waterfall">
          {items}
        </div>
      </div>
    )
  }
}

ReactTV.render(<App/>, document.querySelector('#root'))
