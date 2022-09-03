import React from 'react';
import styled from 'styled-components';
const Banners = ({ imgUrl, children, draco }) => {
  return (
    <Wrapper
      className={draco ? 'draco' : null}
      style={{ background: `url(${imgUrl}) center/cover no-repeat` }}
    >
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 2rem 0;
  height: 100vh;
  position: relative;
  background-position-x: 50%;
  background-position-y: 50%;
`;
export default Banners;
