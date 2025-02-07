// 🎟️ Create a Movie Ticket Booking System where users can book tickets and check seat availability.
// 1. Create an enum called MovieGenre with at least 5 movie genres.
// 2. Create a tuple type called Seat which holds (rowLetter: string, seatNumber: number).
// 3. Create a type alias called Movie which contains: movieId (number), title (string), genre (MovieGenre), availableSeats (Seat[]).
// 4. Create a function called addMovie which adds a movie to the movies array. The function needs to return a Movie object.
// 5. Create a function called bookSeat which removes a seat from availableSeats if available. The return needs to be a string.
// 6. Create a function called checkSeatAvailability which returns true if a seat is available and false otherwise.

enum MovieGenre {
  Action,
  Romance,
  SF,
  Fantasy,
  Comedy
}

type Seat = [string, number]

type Movie = {
  movieId: number,
  title: string,
  genre: MovieGenre,
  availableSeats: Seat[]
}

const movies: Movie[] = [];

function addMovie(movieId: number, title: string, genre: MovieGenre, availableSeats: Seat[]): Movie {
  let newMovie = { movieId, title, genre, availableSeats }
  movies.push(newMovie)
  return newMovie
}

function bookSeat(movieId: number, rowLetter: string, seatNumber: number): string {
  let thisMovie: Movie | undefined
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].movieId === movieId) {
      thisMovie = movies[i]
      break
    }
  }

  if (!thisMovie) {
    return 'Movie not found.'
  }

  let thisSeat: Seat | undefined
  if (thisMovie && thisMovie.availableSeats.length > 0) {
    for (let i = 0; i < thisMovie.availableSeats.length; i++) {
      if (thisMovie.availableSeats[i][0] === rowLetter && thisMovie.availableSeats[i][1] === seatNumber ) {
        thisSeat = thisMovie.availableSeats[i]
      }
    }

    if (!thisSeat) {
      return `Seat ${rowLetter}${seatNumber} not available.`
    }
    
    thisMovie.availableSeats = thisMovie.availableSeats.filter(seat => seat[0] !== rowLetter || seat[1] !== seatNumber)
    return `Seat ${rowLetter}${seatNumber} booked successfully.`
  } else {
    return 'No seats available.'
  }
}

function checkSeatAvailability(movieId: number, rowLetter: string, seatNumber: number): boolean | string {
  let thisMovie: Movie | undefined
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].movieId === movieId) {
      thisMovie = movies[i]
      break
    }
  }

  if (!thisMovie) {
    return 'Movie not found.'
  }

  if (thisMovie && thisMovie.availableSeats.length > 0) {
    for (let i = 0; i < thisMovie.availableSeats.length; i++) {
      if (thisMovie.availableSeats[i][0] === rowLetter && thisMovie.availableSeats[i][1] === seatNumber ) {
        return true
      }
    }
    return false
  }

  return 'No seats available.'
}

// Test cases (Create more if needed)
console.log(addMovie(1, "Avengers", MovieGenre.Action, [["A", 1], ["A", 2]])) // { movieId: 1, title: "Avengers", genre: MovieGenre.Action, availableSeats: [["A", 1], ["A", 2]] }
console.log(bookSeat(1, "A", 1)) // "Seat A1 booked successfully"
console.log(checkSeatAvailability(1, "A", 1)) // false
console.log(movies[0].availableSeats)