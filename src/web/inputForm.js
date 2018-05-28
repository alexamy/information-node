import React, { Component } from 'react';

export class InputForm extends Component {
  render() {
    return (
      <form>
        <label>
          Message:<br />
          <input type="text" name="name" />
        </label>
      </form>
    );
  }
}
