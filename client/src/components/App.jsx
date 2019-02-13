import React from 'react';
import styled from 'styled-components';
import { dummyData } from '../../../data';

const Image = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(https://news.nationalgeographic.com/content/dam/news/2018/05/17/you-can-train-your-cat/02-cat-training-NationalGeographic_1484324.ngsversion.1526587209178.adapt.1900.1.jpg);
  background-size: 100% 100%;
`;

const Parent = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
`;

const Container = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;

  ${Image}:hover {
    opacity: .7;
  }
`;

const SmallContainer = styled.div`
  flex-wrap: wrap;
  min-width: 50%;
  height: 50%;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: dummyData[0],
    };
  }

  render() {
    return (
      <Parent>
        <Container>
          <Image />
          {/* {this.state.data.collection[0]} */}
        </Container>
        <Container>

          {/* <Image background-image={this.state.data.collection[1].url} />
          {this.state.data.collection.map((item) => {
            return <SmallContainer><Image></Image></SmallContainer>;
          })} */}

        </Container>
      </Parent>
    );
  }
}

export default App;
