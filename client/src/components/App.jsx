import React from 'react';
import styled from 'styled-components';
import Modal from './Modal.jsx';
import LargeImage from './MainLargeImage.jsx';
import SmallImages from './MainSmallImages.jsx';
import $ from 'jquery';
import { dummyData } from '../../../data';

const Parent = styled.div`
  display: flex;
  width: 100%;
  height: 430px;
`;

const Button = styled.button`
  position: absolute;
  top: 390px;
  right: 24px;
  padding: 6px 15px 6px 15px;
  color: #484848;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
`;

class Photos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: dummyData[0],
      show: false,
    };
    this.showModal = this.showModal.bind(this);
  }

  componentDidMount() {
    $.ajax({
      url: '/api/photos/:offering',
      type: 'GET',
      success: (data) => {
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

export default Photos;
