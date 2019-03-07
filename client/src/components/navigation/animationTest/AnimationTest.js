import React from 'react';
import useAnimation from './use-animation';

function AnimationTest() {
  // Call hook multiple times to get animated values with different start delays
  const animation1 = useAnimation('elastic', 600, 0);
  const animation2 = useAnimation('elastic', 600, 150);
  const animation3 = useAnimation('elastic', 600, 300);

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Ball
        innerStyle={{
          marginTop: animation1 * 400 - 100
        }}
      />

      <Ball
        innerStyle={{
          marginTop: animation1 * 100 - 100
        }}
      />
      <Ball
        innerStyle={{
          marginTop: animation1 * 700 - 100
        }}
      />
      <Ball
        innerStyle={{
          marginTop: animation1 * 400 - 100
        }}
      />
      <Ball
        innerStyle={{
          marginTop: animation1 * 200 - 100
        }}
      />

      <Ball
        innerStyle={{
          marginTop: animation2 * 200 - 100
        }}
      />

      <Ball
        innerStyle={{
          marginTop: animation3 * 330 - 100
        }}
      />
    </div>
  );
}

const Ball = ({ innerStyle }) => (
  <div
    style={{
      width: 38,
      height: 200,
      marginRight: '40px',
      borderRadius: '50px',
      backgroundColor: '#4dd5fa',
      ...innerStyle
    }}
  />
);
export default AnimationTest