import React from 'react';
import styled from 'styled-components';

const Body = styled.div`
  background: rgba(0, 0, 0, 0.85);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  left: 0px;
  top: 0px;
`;

const Container = styled.div`
  width: 100%;
`;

const TopBar = styled.div`
  height: 86px;
  width: 100%;
`;

const Exit = styled.div`
  right: 0px;
  height: 50px;
  width: 50px;
  font-size: 28px;
  color: white;
  float: right;
  cursor: pointer;
  margin-top: 13px;
`;

const Photo = styled.div`
  align-content: center;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  height: 565px;
  display: flex;
`;

const Image = styled.img`
  margin-left: auto;
  margin-right: auto;
  min-width: 400px;
  max-width: 800px;
  width: 100%;
  height: 100%;
  cursor: pointer;
`;

const Arrow = styled.div`
  display: table;
  padding: 3px;
  width 100px;
  color:white;
  cursor: pointer;
  font-size: 42px;
`;

const Right = styled(Arrow)`
  display: table-cell; 
  vertical-align: middle; 
  text-align: center; 
  padding-top: 280px;
`;

const Left = styled(Arrow)`
  display: table-cell; 
  vertical-align: middle; 
  text-align: center; 
  padding-top: 280px;
`;

const BottomBar = styled.div`
  height: 123px;
  width: 100%;
`;

const Caption = styled.div`
  color: white;
  font-size: 13px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 200;
  text-align: center;
  padding-top: 50px;
  vertical-align: middle;
  line-spacing:
`;

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data,
      currentPhoto: 0,
    };
    this.closeModal = this.closeModal.bind(this);
    this.previousImage = this.previousImage.bind(this);
    this.nextImage = this.nextImage.bind(this);
  }

  closeModal(event) {
    this.props.closeModal && this.props.closeModal(event);
  }

  previousImage() {
    if (this.state.currentPhoto !== 0) {
      this.setState({ currentPhoto: this.state.currentPhoto - 1 });
    }
  }

  nextImage() {
    if (this.state.currentPhoto !== this.state.data.length - 1) {
      this.setState({ currentPhoto: this.state.currentPhoto + 1 });
    }
  }

  render() {
    if (!this.props.show) {
      return null;
    }
    const url = `${this.state.data[this.state.currentPhoto].url}`;
    const caption = `${this.state.data[this.state.currentPhoto].caption}`;
    return (
      <div>
        <Body>
          <Container>
            <TopBar>
              <Exit onClick={this.closeModal}>X</Exit>
            </TopBar>
            <Photo>
              <Left onClick={this.previousImage}>L</Left>
              <Image src={url} alt={caption} />
              <Right onClick={this.nextImage}>R</Right>
            </Photo>
            <BottomBar>
              <Caption>
                {`${this.state.currentPhoto + 1}/${this.state.data.length}:`}  {caption}
              </Caption>
            </BottomBar>
          </Container>
        </Body>
      </div>
    );
  }
}

export default Modal;
