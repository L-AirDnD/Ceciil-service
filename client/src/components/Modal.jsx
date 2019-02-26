import React from 'react';

const { styled } = window;

const Body = styled.div`
  display: flex;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.85);
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const TopBar = styled.div`
  width: 100%;
  height: 86px;
`;

const Exit = styled.div`
  float: right;
  height: 50px;
  margin-top: 6px;
  margin-right: 20px;
  cursor: pointer;
`;

const ExitSvg = styled.img`
  width: 48px;
  height:48px;
`;

const Photo = styled.div`
  display: flex;
  width: 100%;
  height: 510px;
  margin-left: auto;
  margin-right: auto;
  align-content: center;
`;

const Image = styled.img`
  min-width: 400px;
  max-width: 800px;
  max-height: 500px;
  width: 100%;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
  cursor: pointer;
`;

const Arrow = styled.div`
  display: table;
  width 100px;
  padding: 3px;
  cursor: pointer;
`;

const Right = styled(Arrow)`
  display: table-cell; 
  padding-top: 200px;
  text-align: center; 
`;

const RightSvg = styled.img`
  height: 100px;
  width: 100px;
`;

const Left = styled(Arrow)`
  display: table-cell; 
  padding-top: 200px;
  text-align: center; 
`;

const LeftSvg = styled.img`
  height: 100px;
  width: 100px;
`;

const BottomBar = styled.div`
  width: 100%;
  height: 150px;
`;

const Caption = styled.div`
  margin-top: 40px;
  color: white;
  font-size: 13px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 200;
  text-align: center;
  vertical-align: middle;
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
              <Exit onClick={this.closeModal}>
                <ExitSvg src="https://s3-us-west-1.amazonaws.com/lair-dnd/svg/times-white.svg" />
              </Exit>
            </TopBar>
            <Photo>
              <Left onClick={this.previousImage}>
                <LeftSvg src="https://s3-us-west-1.amazonaws.com/lair-dnd/svg/left-angle-white.svg" />
              </Left>
              <Image src={url} alt={caption} />
              <Right onClick={this.nextImage}>
                <RightSvg src="https://s3-us-west-1.amazonaws.com/lair-dnd/svg/right-angle-white.svg" />
              </Right>
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
