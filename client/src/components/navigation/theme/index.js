import React from 'react';
import useDarkMode from './use-dark-mode';
import Toggle from './Toggle';
import Content from './Content';
import './styles.scss';

function Theme() {
  const [darkMode, setDarkMode] = useDarkMode();

  return (
    <div>
        <Toggle darkMode={darkMode} setDarkMode={setDarkMode} />
    </div>
  );
}

export default Theme