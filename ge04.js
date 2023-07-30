let cities = [
  { name: "New York", population: 18.65e6 },
  { name: "Cairo", population: 18.82e6 },
  { name: "Mumbai", population: 19.32e6 },
  { name: "São Paulo", population: 20.88e6 },
  { name: "Mexico City", population: 21.34e6 },
  { name: "Shanghai", population: 23.48e6 },
  { name: "Delhi", population: 25.87e6 },
  { name: "Tokyo", population: 37.26e6 },
];
for (let city of cities) {
  if (city.population < 20e6) {
    console.log(`${city.name} (${city.population})`);
  }
}

let user = {
  name: "Calvin",
  surname: "Hart",
  age: 66,
  email: "CalvinMHart@teleworm.us",
};

for (let key in user) {
  console.log(`${key} -> ${user[key]}`);
}

for (let i = 100; i >= 0; i -= 10) {
  console.log(i);
}

let upperLimit = Number(prompt("Enter upper limit"));
let lowerLimit = Number(prompt("Enter lower limit"));

if (
  !Number.isNaN(upperLimit) &&
  !Number.isNaN(lowerLimit) &&
  upperLimit > lowerLimit
) {
  for (i = upperLimit; i >= lowerLimit; i -= 10) {
    console.log(i);
  }
}

let numbers = [21, 45, 100, 12, 11, 78, 61, 4, 39, 22];

for (number of numbers) {
  console.log(number);
}

for (number of numbers) {
  if (number % 2 === 0) {
    console.log(number);
  }
}

for (number of numbers) {
  if (number > 10 && number < 60) {
    console.log(number);
  }
}

let movies = [];
while (true) {
  let title = prompt("Enter movie title");
  let rating = prompt("Enter movie rating (imdb)");

  if (title === null || rating === null) {
    break;
  } else {
    movies.push({
      title: title,
      rating: Number(rating),
    });
  }
}

console.log("All with ratings under 7:");
for (movie of movies) {
  if (movie.rating < 7) {
    console.log(`${movie.title} (${movie.rating})`);
  }
}

console.log("All with ratings over 7:");
for (movie of movies) {
  if (movie.rating >= 7) {
    console.log(`${movie.title} (${movie.rating})`);
    break;
  }
}
const quessy = prompt("what is the movie name");
