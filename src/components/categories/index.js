import React from 'react';
import './index.css';

export const Categories = ({ tree, source }) => {
  return (
    <ol>
      {
        tree.map(cat =>
          <CategoryItem key={ cat.id } {...cat} source={ source }/>)
      }
    </ol>
  );
};

function getCatById(source, id) {
  for (let i = 0; i < source.length; i++) {
    if (source[i].id === id) {
        return source[i];
    }
  }
}

const CategoryItem = ({ id, name, sub, source, parentId }) => {
  const shouldRenderChildren = !!sub.length;
  const subTree = sub.map(id => getCatById(source, id));

  return (
    <li className="cat-item">
      { name }
      {
        shouldRenderChildren && (
          <Categories tree={ subTree } source={ source }/>
        )
      }
    </li>
  );
};
