import Header from './components/header/Header';
import './styles/index.scss'
import { useCallback, useEffect } from 'react'
import { useDispatch } from 'react-redux/es/exports';
import { setLanguage } from './redux/features/actions';
import Navigation from './components/navigation/Navigation';
const App = () => {
  const dispatch = useDispatch()

  const getLanguage = useCallback(() => {
    const language = localStorage.getItem('kamalyan-webLanguage')
    if (language) {
      dispatch(setLanguage(language))
    } else {
      dispatch(setLanguage('en'))
      localStorage.setItem('kamalyan-webLanguage', 'en')
    }
  }, [dispatch])

  useEffect(() => {
    getLanguage()
  }, [getLanguage])

  return (
    <div className="App">
      <Header />
      <Navigation />
    </div>
  );
}

export default App;
