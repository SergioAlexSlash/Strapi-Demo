import React, { useEffect, useState } from 'react';
import { getCategories } from './services/api';
import CategoryList from './components/CategoryList/CategoryList';
import './App.css';

interface Category {
  id: number;
  Name: string;
}

function App() {
  const [category, setCategory] = useState<Category[]>([]);

  useEffect(() => {
    getCategories().then(setCategory);
  }, []);

  return (
    <div className="App">
      <CategoryList categories={category} />
    </div>
  );
}

export default App;
