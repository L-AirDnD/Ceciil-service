import React from 'react';
import PropTypes from 'prop-types';
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

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.closeModal = this.closeModal.bind(this);
  }

  closeModal(event) {
    this.props.closeModal && this.props.closeModal(event);
  }

  render() {
    if (!this.props.show) {
      return null;
    }
    return (
      <div>
        <Body>
          <Container>
            <TopBar><Exit>X</Exit></TopBar>
            <Photo>
              <Left>L</Left>
              {/* <Arrow><Right /></Arrow>
              {this.props.children}
              <div>
                <button type="button" closeModal={this.closeModal}>Close</button>
              </div>
              <Arrow><Right /></Arrow> */}
              <Image src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80.jpg" alt="" />
              <Right> R</Right>
            </Photo>
            <BottomBar><Caption>1/61: Welcome to my apartments!!Please use it as your stay in Tokyo. You will enjoy it.</Caption></BottomBar>
          </Container>
        </Body>
      </div>
    );
  }
}

Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
};

export default Modal;
