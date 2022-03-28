import { Route, Routes } from 'react-router-dom';

// 컴포넌트 연결
import Main from './Components/Main';
import ComplainForm from './Components/ComplainForm';
import AdminPage from './Components/AdminPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/complainform" element={<ComplainForm />} />
      <Route path="/adminpage" element={<AdminPage />} />
    </Routes>
  );
}

export default App;
