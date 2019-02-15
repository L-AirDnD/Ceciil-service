import React from 'react';
import styled from 'styled-components';
import Modal from './Modal.jsx';
import LargeImage from './MainLargeImage.jsx';
import SmallImages from './MainSmallImages.jsx';
import $ from 'jquery';
import { dummyData } from '../../../data';

const Parent = styled.div`
  width: 100%;
  height: 430px;
  display: flex;
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
      data: dummyData[0],
      show: false,
    };
    this.showModal = this.showModal.bind(this);
  }

  // This code does not work
  // Running into runtime issues
  componentDidMount() {
    console.log('Attempting to load component...')
    $.ajax({
      url: '/api/photos/:offering',
      type: 'GET',
      success: (data) => {
        console.log('Set the state of the component...');
        this.setState({ data: data });
      },
      error: () => {
        console.log('There was an error in your AJAX request...')
      }
    });
  }

  showModal() {
    this.setState({
      show: !this.state.show,
    });
  }

  render() {
    if (this.state.show) {
      return (
        <Modal data={this.state.data.photos} closeModal={this.showModal} show={this.state.show} />
      );
    }
    return (
      <div>
        <Parent>
          <LargeImage data={this.state.data.photos[0]} />
          <SmallImages data={this.state.data.photos.slice(1, 5)} />
          <Button onClick={this.showModal}>View Photos</Button>
        </Parent>
      </div>
    );
  }
}

export default App;
