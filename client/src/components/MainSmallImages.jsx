import React from 'react';
import styled from 'styled-components';

const MiniImage = styled.div`
  width: 100%;
  height: 100%;
  max-height: 400px;
  background-size: 100% 100%;
  cursor: pointer;
  border: 1.5px #484848 solid;
  background-image: url(${props => props.url});
`;

const Container = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;

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
