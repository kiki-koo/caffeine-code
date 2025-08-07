import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import Welcome from './components/Welcome.jsx';
import CoffeeForm from './components/CoffeeForm.jsx';
import Recipe from './components/Recipe.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Welcome />} />
          <Route path="select" element={<CoffeeForm />} />
          <Route path="recipe" element={<Recipe />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);
