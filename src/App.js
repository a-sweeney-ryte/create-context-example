import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

const ThemeContext = React.createContext();

function App() {
  const [theme, setTheme] = useState('dark');

  return (
    <ThemeContextProvider value={{ theme, setTheme }}>
      <ChildComponent/>
    </ThemeContextProvider>
  )
}

function ChildComponent() {
  return <GrandChildComponent/>
}

// class method
/*
class GrandChildComponent {
  render() {
    return (
      <ThemeContext.Consumer>
        {({ theme, setTheme })} => {
          return (
            <>
              <div>The theme is {theme}</div>
              <button onClick={() => setTheme('light')}>
                Change To Light Theme
              </button>
            </>
          )
        }
      </ThemeContext.Consumer>
    )
  }
}
*/

function GrandChildComponent() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <>
      <div>The theme is {theme}</div>
      <button onClick={() => setTheme('light')}>
        Change To Light Theme
      </button>
    </>
  )
}

export default App;
