/*
* @Author: CJ Ting
* @Date:   2016-07-14 14:47:13
* @Last Modified by:   CJ Ting
* @Last Modified time: 2016-07-14 17:58:15
*/

import "./index.css"

import React, { PropTypes } from "react"
import DOM from "react-dom"

class Dialog extends React.Component {
  destroy = () => {
    const node = this.refs.root.parentNode
    DOM.unmountComponentAtNode(node)
    node.remove()
  }

  render() {
    const klass = this.props.className ?
      "react-dialog " + this.props.className
      :
      "react-dialog"

    let { okButtonCB, cancelButtonCB } = this.props

    cancelButtonCB = cancelButtonCB || this.destroy
    okButtonCB = okButtonCB || this.destroy

    return (
      <div
        ref="root"
        className={ klass }
      >
        <div className="react-dialog__container">
          <header className="react-dialog__header">
            { this.props.title }
            <div
              className="react-dialog__close-btn"
              onClick={ this.destroy }
            >
              ×
            </div>
          </header>

          <div className="react-dialog__content">
            { this.props.children }
          </div>

          <div className="react-dialog__buttons">
            <div
              className="react-dialog__ok-btn"
              onClick={ okButtonCB }
            >
              { this.props.okButtonText }
            </div>

            {
              this.props.hideCancelButton ?
                null
                :
                <div
                  onClick={ cancelButtonCB }
                  className="react-dialog__cancel-btn"
                >
                  { this.props.cancelButtonText }
                </div>
            }
          </div>
        </div>
      </div>
    )
  }
}

Dialog.defaultProps = {
  okButtonText: "Ok",
  cancelButtonText: "Cancel",
  hideCancelButton: false,
}

Dialog.propTypes = {
  className: PropTypes.string,
  okButtonText: PropTypes.string,
  cancelButtonText: PropTypes.string,
  okButtonCB: PropTypes.func,
  cancelButtonCB: PropTypes.func,
  hideCancelButton: PropTypes.bool,
  title: PropTypes.string,
}

const showDialog = Cmp => {
  const div = document.createElement("div")
  div.className = "react-dialog-mountpoint"
  document.body.appendChild(div)
  DOM.render(<Cmp />, div)
}

export default showDialog

export { Dialog, showDialog }
