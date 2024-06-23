import React from 'react';
import "./App.css" ; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TaskList from './components/TaskList';
import TaskDetail from './components/TaskDetail';
import TaskForm from './components/TaskForm';


function App() {
  return (
    <div>
      <Router>
        {/* <div> */}
          <Routes>
            <Route exact path="/" element={<TaskList />} />
            <Route path="/tasks/:id" element={<TaskDetail />} />
            <Route path="/add" element={<TaskForm />} />
            <Route path="/edit/:id" element={<TaskForm />} />
          </Routes>
        {/* </div> */}
      </Router>
      <div className="App">
            <div className="content pb-12">
                {/* Other components and content */}
            </div>
            <Footer />
      </div>
    </div>
  );
}
function Footer() {
  const currentYear = new Date().getFullYear();
  return (
      <footer style={footerStyle}>
          <p>Made by Dev Soni - {currentYear}</p>
      </footer>
  );
}

const footerStyle = {
  position: 'fixed',
  left: '0',
  bottom: '0',
  width: '100%',
  backgroundColor: 'black',
  color: 'white',
  textAlign: 'center',
  padding: '10px 0',
};

export default App;
