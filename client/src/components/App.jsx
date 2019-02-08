import React from 'react';
import { dummyData } from '../../../data';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: dummyData[0],
    };
  }

  componentDidMount() {

  }

  render() {
    return (
      <div>
        {this.state.data.collection.map((item) => {
          return <img src={item.url} alt={item.caption} height="200" width="200w" />;
        })}
      </div>
    );
  }
}

export default App;
