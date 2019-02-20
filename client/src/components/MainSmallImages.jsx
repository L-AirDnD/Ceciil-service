import React from 'react';

const { styled } = window;

const MiniImage = styled.div`
  width: 100%;
  height: 100%;
  max-height: 400px;
  background-image: url(${props => props.url});
  background-size: 100% 100%;
  border: 1.5px #484848 solid;
  cursor: pointer;
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 50%;
  height: 100%;

  ${MiniImage}:hover {
    opacity: .7;
  }
`;

const SmallContainer = styled.div`
  flex-wrap: wrap;
  min-width: 50%;
  height: 50%;
`;

const SmallImages = (props) => {
  return (
    <Container>
      {props.data.map((item) => {
        return <SmallContainer><MiniImage url={item.url} /></SmallContainer>;
      })}
    </Container>
  );
};

export default SmallImages;
