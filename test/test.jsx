/*
* @Author: CJ Ting
* @Date:   2016-07-14 14:56:23
* @Last Modified by:   rong.hua
* @Last Modified time: 2016-10-12 18:08:50
*/

import React from "react"
import DOM from "react-dom"

import showDialog, { Dialog } from "src/index.jsx"

class App extends React.Component {
  constructor(props, context) {
    super(props, context)
  }

  onClick(evt) {
    showDialog(MyDialog)
  }

  render() {
    return (
      <h1 onClick={ this.onClick }>
        click to show dialog
      </h1>
    )
  }
}

const MyDialog = () =>
  <Dialog
    okButtonCB={ () => {
      showDialog(MyDialog2)
    }}
    disableOKButton = { true }
  >
    <h1>this is dialog content</h1>
  </Dialog>

const MyDialog2 = () =>
  <Dialog
    title="this is my dialog"
    okButtonCB={ () => {
      showDialog(MyDialog)
    }}
  >
    <h1>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, quo. Nam laudantium deleniti accusamus dolor officiis odio incidunt harum, optio. Fugiat totam, reiciendis debitis fugit sint culpa rem tempora. Ea.
    </h1>
  </Dialog>

module.hot.accept()

DOM.render(<App />, document.getElementById("app-container"))
