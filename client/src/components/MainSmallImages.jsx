import React from 'react';
import styled from 'styled-components';

const Image = styled.div`
  width: 100%;
  height: 100%;
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

  ${Image}:hover {
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
        return <SmallContainer><Image url={item.url} /></SmallContainer>;
      })}
    </Container>
  );
};

export default SmallImages;
