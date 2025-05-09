import React from 'react';
import './CategoryList.css';

interface Category {
  id: number;
  Name: string;
}

interface Props {
  categories: Category[];
}

const CategoryList: React.FC<Props> = ({ categories }) => {
  return (
	<div className="category-container">
	  <h1 className="category-title">Lista de Categorías</h1>
	  <ul className="category-list">
		{categories.map((category) => (
		  <li key={category.id} className="category-item">
			{category.Name}
		  </li>
		))}
	  </ul>
	</div>
  );
};

export default CategoryList;