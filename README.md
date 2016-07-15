# React Dialog

[![License](http://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](http://mit-license.org/2016)

a simple dialog component for React

## Installation

### npm
```shell
npm i --save @fate-lovely/react-dialog
```

### cdn
```html
<script src="https://npmcdn.com/@fate-lovely/react-dialog/dist/index.js"></script>
```

## Usage

```javascript
import { showDialog, Dialog } from "@fate-lovely/react-dialog"

const MyDialog = () =>
  <Dialog>
    <h1>Hello World</h1>
  </Dialog>

class App extends React.Component {
  ...
  onClick() {
    showDialog(MyDialog)
  }
}
```

## Props

- `className: PorpTypes.string`
- `okButtonText: PropTypes.string`
- `cancelButtonText: PropTypes.string`
- `okButtonCB: PropTypes.func`, dialog instance as `this`, you can call `this.destroy()` to destroy dialog
- `cancelButtonCB: PropTypes.func`, dialog instance as `this`, you can call `this.destroy()` to destroy dialog
- `hideCancelButton: PropTypes.bool`
- `title: PorpTypes.string`

## License
Released under the [MIT license](http://mit-license.org/2016)
