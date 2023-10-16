// К сожалению, написать больше тестов не хватило времени(
  import filterMovies from 'features/Utils/filterMovies';
  import sortMovies from 'features/Utils/sortMovies';

  const movie1 = {
    id: 1,
    name: 'Movie 1',
    poster: 'poster1.jpg',
    rating: '1',
    year: 2020,
    shortDescription: 'Short description 1',
    genres: ['Action', 'Adventure'],
    description: 'Description 1',
    movieLength: 120,
    dateAdding: '2021-01-01',
    comment: 'Comment 1',
    myRating: 4,
  };

  const movie2 = {
    id: 2,
    name: 'Movie 2',
    poster: 'poster2.jpg',
    rating: '2',
    year: 2019,
    shortDescription: 'Short description 2',
    genres: ['Drama', 'Thriller'],
    description: 'Description 2',
    movieLength: 90,
    dateAdding: '2021-02-01',
    comment: 'Comment 2',
    myRating: 3,
  };

  const movie3 = {
    id: 3,
    name: 'Movie 3',
    poster: 'poster3.jpg',
    rating: '3',
    year: 2021,
    shortDescription: 'Short description 3',
    genres: ['Comedy', 'Romance'],
    description: 'Description 3',
    movieLength: 150,
    dateAdding: '2021-03-01',
    comment: 'Comment 3',
    myRating: 5,
  };
  
  describe('filterMovies', () => {
    it('should filter movies based on ratingFilter, lengthFilter, and searchTerm', () => {
      
      const movies = [
        movie1, movie2, movie3   
      ];
      const ratingFilter = 4;
      const lengthFilter = 100;
      const searchTerm = 'movie';
  
      const result = filterMovies(movies, ratingFilter, lengthFilter, searchTerm);
  
      const expectedMovies = [
        movie1,
        movie3
      ];
      expect(result).toEqual(expectedMovies);
    });
  });
  
  describe('sortMovies', () => {
    it('should sort movies based on sortBy date', () => {
      const movies = [
        movie1,
        movie2,
        movie3,
      ];
      const sortBy = 'date';
  
      const result = sortMovies(movies, sortBy);
  
      const expectedMovies = [
        movie3,
        movie2,
        movie1,
      ];
      expect(result).toEqual(expectedMovies);
    });
  });
  

export {}