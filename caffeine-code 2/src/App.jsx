import React, { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import recipes from './recipeData';
import './styles.css';

const App = () => {
  const [coffeeType, setCoffeeType] = useState('');
  const [brewMethod, setBrewMethod] = useState('');
  const [recipe, setRecipe] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (coffeeType && brewMethod) {
      const foundRecipe = recipes[coffeeType]?.[brewMethod];
      if (foundRecipe) {
        setRecipe({
          ...foundRecipe,
          coffeeType,
          brewMethod
        });
        navigate('/recipe');
      } else {
        alert('Recipe not found for this combination');
      }
    }
  };

  return (
    <div className="app">
      <Header />
      <main>
        <Outlet context={{
          coffeeType,
          brewMethod,
          recipe,
          onTypeChange: setCoffeeType,
          onMethodChange: setBrewMethod,
          onSubmit: handleSubmit
        }} />
      </main>
    </div>
  );
};

export default App;
