import React, {
  useState,
  useEffect,
  useContext,
  useCallback,
  useMemo,
} from 'react';
import { ThemeContext } from '../../contexts';
import CONSTANTS from '../../constants';

const { THEMES } = CONSTANTS;

const stylesMap = {
  [THEMES.LIGHT]: {
    backgroundColor: 'white',
    color: 'black',
  },
  [THEMES.DARK]: {
    backgroundColor: 'black',
    color: 'white',
  },
};

function computeValue (num) {
  let i = 0;
  for (let j = 0; j < 40000000; j++) {
    i += j;
  }

  return num ** 3;
}

const Home = () => {
  const [theme, setTheme] = useContext(ThemeContext);
  const [value, setValue] = useState(1);

  // const switchTheme = () => {
  //   setTheme(theme === THEMES.DARK ? THEMES.LIGHT : THEMES.DARK);
  // };

  const switchTheme = useCallback(() => {
    setTheme(theme => (theme === THEMES.DARK ? THEMES.LIGHT : THEMES.DARK));
  }, []);

  const logValue = useCallback(() => {
    console.log(value);
  }, [value]);

  const changeValue = useCallback(({ target: { value } }) => {
    setValue(Number(value));
  }, []);

  const layoutValue = useMemo(() => computeValue(value), [value]);

  return (
    <div style={stylesMap[theme]}>
      <h1>{layoutValue}</h1>
      <input type='number' value={value} onChange={changeValue} />
      <button onClick={switchTheme}>Switch Theme!</button>
    </div>
  );
};

export default Home;
