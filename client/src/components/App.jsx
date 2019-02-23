import React from 'react';
import Modal from './Modal.jsx';
import LargeImage from './MainLargeImage.jsx';
import SmallImages from './MainSmallImages.jsx';
import $ from 'jquery';
import { dummyData } from '../../../data';

const { styled } = window;

const Parent = styled.div`
  display: flex;
  width: 100%;
  height: 430px;
`;

const PhotosButton = styled.button`
  position: absolute;
  top: 372px;
  right: 24px;
  padding: 6px 15px 6px 15px;
  color: #484848;
  border-radius: 4px;
  font-size: 14px;
  line-height: 22px;
  cursor: pointer;
`;

const ShareButton = styled.button`
  position: absolute;
  top: 23px;
  right: 134px;
  padding: 6px 15px 6px 15px;
  color: #484848;
  border-radius: 4px;
  font-size: 14px;
  line-height: 22px;
  cursor: pointer;
  opacity: 1;
`;

const SaveButton = styled.button`
  position: absolute;
  top: 23px;
  right: 24px;
  padding: 6px 15px 6px 15px;
  color: #484848;
  border-radius: 4px;
  font-size: 14px;
  line-height: 22px;
  cursor: pointer;
`;

const Svg = styled.img`
  width: 14px;
  height: 14px;
  margin-right: 10px;
`;

export default class Photos extends React.Component {
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
      url: 'http://localhost:3001/api/photos/',
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
    console.log('Modal toggle')
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
          <ShareButton><Svg src="https://s3-us-west-1.amazonaws.com/lair-dnd/svg/upload-solid.svg" />Share</ShareButton>
          <SaveButton><Svg src="https://s3-us-west-1.amazonaws.com/lair-dnd/svg/heart-regular.svg" />Save</SaveButton>
          <PhotosButton onClick={this.showModal}>View Photos</PhotosButton>
        </Parent>
      </div>
    );
  }
};

