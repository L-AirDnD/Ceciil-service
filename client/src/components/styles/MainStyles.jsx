import styled from 'styled-components';

//
// MainLargeImage.jsx Styles
//

const MainImage = styled.div`
width: 100%;
height: 100%;
background-size: 100% 100%;
cursor: pointer;
border: 1.5px #484848 solid;
background-image: url(${props => props.data.url});
`;

//
// MainSmallImages.jsx Styles
//

const MiniImage = styled.div`
  width: 100%;
  height: 100%;
  background-size: 100% 100%;
  cursor: pointer;
  border: 1.5px #484848 solid;
  background-image: url(${props => props.url});
`;

const SmallContainer = styled.div`
  flex-wrap: wrap;
  min-width: 50%;
  height: 50%;
`;

//
// App.jsx Styles
//

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

  ${MainImage}:hover {
    opacity: .7;
  }

  ${MiniImage}:hover {
    opacity: .7;
  }
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

module.exports = {
  Parent,
  Button,
  MainImage,
  MiniImage,
  Container,
  SmallContainer,
};
