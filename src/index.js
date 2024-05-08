import React from 'react';
import ReactDOM from 'react-dom';

const myfirstelement = <h1> PI: {Math.PI}</h1>

ReactDOM.render(myfirstelement, document.getElementById('root'));

class Hello extends React.Component {
  render() {
    return <h1><i>Hello BorntoDev</i></h1>;
  }
}
ReactDOM.render(<Hello />, document.getElementById('root'));
