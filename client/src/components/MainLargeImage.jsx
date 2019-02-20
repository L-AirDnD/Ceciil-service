import React from 'react';

const { styled } = window;

const MainImage = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${props => props.data.url});
  background-size: 100% 100%;
  border: 1.5px #484848 solid;
  cursor: pointer;
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
