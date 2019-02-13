import React from 'react';
import styled from 'styled-components';
import Modal from './Modal.jsx';
import { dummyData } from '../../../data';

// How do I make this dynamic?
const Image = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(https://cdn.theatlantic.com/assets/media/img/mt/2017/06/shutterstock_319985324/lead_720_405.jpg?mod=1533691890);
  background-size: 100% 100%;
  cursor: pointer;
  border: 1.5px #484848 solid;
`;

const Parent = styled.div`
  width: 100%;
  height: 430px;
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

const Button = styled.button`
  position: absolute;
  top: 390px;
  right: 24px;
  padding: 6px 15px 6px 15px;
  border-radius: 4px;
  font-size: 14px;
  color: #484848;
  cursor: pointer;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // data: dummyData[0],
      show: false,
    };
    this.showModal = this.showModal.bind(this);
  }

  showModal() {
    this.setState({
      show: !this.state.show,
    });
  }

  render() {
    if (this.state.show) {
      return (<Modal closeModal={this.showModal} show={this.state.show}>Showing</Modal>)
    }
    return (
      <div>
        <Modal closeModal={this.showModal} show={this.state.show}>Message in Modal</Modal>
        <Parent>
          <Container>
            {/* These images should be dynamic */}
            <Image />
            {/* {this.state.data.collection[0]} */}
          </Container>
          <Container>

            <SmallContainer>
              <Image />
            </SmallContainer>
            <SmallContainer>
              <Image />
            </SmallContainer>
            <SmallContainer>
              <Image />
            </SmallContainer>
            <SmallContainer>
              <Image />
            </SmallContainer>
            {/* {this.state.data.collection.map((item) => {
            return <SmallContainer><Image></Image></SmallContainer>;
          })} */}
            <Button onClick={this.showModal}>View Photos</Button>
          </Container>
        </Parent>
      </div>
    );
  }
}

export default App;
