# Pui-react-modals

We provide 3 components that can be used to assemble modals:

1. UI.Modal
1. UI.ModalBody
1. UI.ModalFooter

## Opening and closing the modal with callbacks

Modals will be closed by default. To open the modal,
add a ref property to the modal (i.e. ref='myModal').
Trigger this.refs.myModal.open(); to open the modal,
and `this.refs.myModal.close();` to close the modal.

There are 4 ways to close the modal

1. Clicking the "x" button
1. Clicking on the modal backdrop
1. Clicking the esc key
1. Doing any action that triggers this.refs.myModal.close.

For more detailed usage information, see the [style guide](http://styleguide.cfapps.io/react_beta.html#modal_react).

```js
var Modal = require('pui-react-modal').Modal;
var ModalBody = require('pui-react-modal').ModalBody;
var ModalFooter = require('pui-react-modal').ModalFooter;
var DefaultButton = require('pui-react-buttons').DefaultButton;

var MyModal = React.createClass({
  _openModal: function(){
    this.refs.modal.open();
  },

  _closeModal: function() {
    this.refs.modal.close();
  },

  render: function() {
    return (
      <div>
        <DefaultButton id='openButton' onClick={this._openModal}>Open Modal</DefaultButton>
        <Modal title='What a Header!' ref='modal'>
          <ModalBody>Text in a body</ModalBody>
          <ModalFooter>
            <DefaultButton id='closeButton' onClick={this._closeModal}>Close</DefaultButton>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
});
```

## Properties

Property            | Values        | Description
------------------- | --------------| --------------------------------------------------------------------------
`title`             | String        | Modal header title