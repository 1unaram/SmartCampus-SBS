import { Route, Routes } from 'react-router-dom';

// 컴포넌트 연결
import Main from './Components/Main';

function App() {
  return (
   <Routes>
     <Route path="/" element={<Main />}/>
  </Routes>
  );
}

export default App;
