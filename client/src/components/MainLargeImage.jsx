import React from 'react';
import styled from 'styled-components';

const MainImage = styled.div`
  width: 100%;
  height: 100%;
  background-size: 100% 100%;
  cursor: pointer;
  border: 1.5px #484848 solid;
  background-image: url(${props => props.data.url});
`;

const Container = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;

  ${MainImage}:hover {
    opacity: .7;
  }
`;

const LargeImage = (props) => {
  return (
    <Container>
      <MainImage data={props.data} />
    </Container>
  );
};

export default LargeImage;
