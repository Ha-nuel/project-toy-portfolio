import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Main from './pages/Main';
import GlobalStyle from './style/GlobalStyle';

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path='/' element={<Main />} exact />
        </Routes>
      </Router>
    </>
  );
}

export default App;
