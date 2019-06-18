import { Movie } from './types';
import { movies } from './mocks/movies';
import { categories } from './mocks/categories';

export const getMoviesForCategory = (categoryName: string): Movie[] => {
  return movies.filter(movie =>
    movie.category_ids
      .map(categoryId =>
        categories
          .find(category => category.id === categoryId)
          .name.toUpperCase()
      )
      .includes(categoryName.toUpperCase())
  );
};
