import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Example1 from '../pages/Example1';
import Example2 from '../pages/Example2';
import Navbar from '../components/Navbar';
import Example3 from '../pages/Example3';

const AppRouter = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Example1 />} />
        <Route path='/example2' element={<Example2 />} />
        <Route path='/example3' element={<Example3 />} />
      </Routes>
    </Router>
  );
};
export default AppRouter;
