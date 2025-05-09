import React, { useEffect, useState } from 'react';
import { getCategories } from './services/api';

interface Category {
  id: number;
  attributes: {
    name: string;
    description: string;
  };
}

function App() {
  const [category, setCategory] = useState<Category[]>([]);

  useEffect(() => {
    getCategories().then(setCategory);
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Lista de Categorías</h1>
      <ul>
        {category.map((category) => (
          <li key={category.id}>
            <strong>{category.attributes.name}</strong> — {category.attributes.description}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;