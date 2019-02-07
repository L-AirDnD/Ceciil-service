import React from 'react';
import { dummyData } from '../../../data';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: dummyData,
    };
  }

  componentDidMount() {

  }

  render() {
    return (
      <div>
        {this.state.data.map(item => {
          return <img src={item.collection[0].url} height="200" width="200w"></img>
        })}
      </div>
    );
  }
}

export default App;
