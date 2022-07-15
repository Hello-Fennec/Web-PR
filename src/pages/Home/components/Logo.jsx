import React from 'react';
import styled from 'styled-components';

const Logo = () => {
  return (
    <div>
      <LogoContainer className='w-96 h-40 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'/>
    </div>
  );
}

export default Logo;

const LogoContainer = styled.div`

  background-color: #666666;
  /* background-image: url(); */
`