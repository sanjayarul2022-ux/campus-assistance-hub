import React from 'react';

/**
 * CategoryFilter Component
 * Demonstrates reusable filter pills with dynamic count badges and active states.
 */
export default function CategoryFilter({ 
  categories, 
  selectedCategory, 
  onSelectCategory, 
  getCategoryCount 
}) {
  return (
    <nav className="category-filter-nav" aria-label="Filter campus services by category">
      {categories.map((category) => {
        const count = getCategoryCount(category);
        const isActive = selectedCategory === category;
        return (
          <button
            key={category}
            type="button"
            className={`filter-btn ${isActive ? 'active' : ''}`}
            onClick={() => onSelectCategory(category)}
            aria-pressed={isActive}
          >
            <span>{category}</span>
            <span className="filter-count-badge">{count}</span>
          </button>
        );
      })}
    </nav>
  );
}
