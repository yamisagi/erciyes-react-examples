import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Example1 from '../pages/Example1';
import Example2 from '../pages/Example2';
import Navbar from '../components/Navbar';
import Example3 from '../pages/Example3';
import Example4 from '../pages/Example4';
import Example5 from '../pages/Example5';
import Example6 from '../pages/Example6';
import DetailsPage from '../pages/DetailsPage';

const AppRouter = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Example1 />} />
        <Route path='/example2' element={<Example2 />} />
        <Route path='/example3' element={<Example3 />} />
        <Route path='/example4' element={<Example4 />} />
        <Route path='/example5' element={<Example5 />} />
        <Route path='/example6' element={<Example6 />}/>
        <Route path='/example6/:id' element={<DetailsPage />} />
      </Routes>
    </Router>
  );
};
export default AppRouter;
