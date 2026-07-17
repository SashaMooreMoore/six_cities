import MainPage from '../mainPage/mainPage';

type AppProps ={
  count: number;
}

function App({count}: AppProps): JSX.Element {
  return <MainPage count={count} />;
}

export default App;
