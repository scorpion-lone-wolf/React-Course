const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

// * <--------------------------- Destructuring of Objects and Arrays ----------------------------------->

// Object Destructuring
const { title, author, pages, publicationDate, genres, reviews } = getBook(3);

console.log("genres :", genres);
// Array Destructuring
const [primaryGenra, secondaryGenra] = genres;
console.log(primaryGenra, " and ", secondaryGenra); // science fiction  and  humor



// * <------------------------------ Spread and Rest Operators -------------------------------------------->

// restOperators
const [firstGenra, ...otherGenra] = genres;
console.log("otherGenra :", otherGenra); // otherGenra : [ 'humor', 'speculative fiction', 'short stories', 'fantasy' ]

// This works same for Object as well.(spreadOperator)
const newGenras = [...otherGenra, 'epic fantasy']; //
console.log("newGenras : ", newGenras); // newGenras :  [ 'humor',  'speculative fiction', 'short stories','fantasy','epic fantasy' ]



// * <------------------------------- Template Literals ---------------------------------------------------->

console.log(`${title} is the title of the book`); // The Cyberiad is the title of the book


// * <------------------------------ Ternary Operators instead of IF/ELSE ---------------------------------->

// "JSX doesn't allow standalone if/else statements directly within the render method. Using ternary operator lets you inline conditional logic neatly."

const pagesRange = pages > 1000 ? 'over a thousand' : 'less then one thousand';
console.log(pagesRange); // less then one thousand


// * <------------------------------ Arrow Functions ------------------------------------------------------->

function getYearTraditionalWay(dateInString) {
  return dateInString.split('-')[0];
}
const getYearNewWay = (dateInString) => dateInString.split('-')[0];

console.log(getYearTraditionalWay(publicationDate));
console.log(getYearNewWay(publicationDate));


// * <------------------------------ Short-circuting and Logical-Operators ---------------------------------->
// falsy values are => 0 , '' , false , null, undefined, NaN

console.log(true && "Hello I will be printed"); // Hello I will be printed
console.log(false && "Hello I will not be printed"); // false


console.log(true || "Hello I will be printed"); // true
console.log(false || "Hello I will be printed"); // Hello I will be printed


//  time where || operator fails
const rating = 0; // Means rating is 0 , which is also a value
const count1 = rating || "No rating";
console.log(count1); // No rating


// The nullish coalescing operator(??) is a logical operator that returns its right side operant when its left side is either null or undefined;
// It only treat  null, undefined as falsy values not 0 , "" , NaN, false
const count2 = rating ?? "No rating";
console.log(count2); // 0


// * <----------------------------------------- Optional Chaning --------------------------------------------------->

function getTotalReviewCount(reviews) {
  const goodReadCount = reviews?.goodreads?.reviewsCount ?? 0;
  const librarythingCount = reviews?.librarything?.reviewsCount ?? 0;
  return goodReadCount + librarythingCount;

}
console.log(getTotalReviewCount(reviews));


// * <----------------------------------------- map , filter and reduce ---------------------------------------------->
const array = [1, 2, 3, 4, 5];
const square = array.map(function (element) {
  return element * element;
});
console.log("Square : ", square);


const filtered = array.filter(function (element) {
  return element % 2 === 0;
});

console.log("filtered : ", filtered);

const reduced = array.reduce(function (acc, element) {
  return acc + element;
}, 0);
console.log("reduced : ", reduced);

// * <------------------------------------------- Array sort fn ------------------------------------------------------->

const marks = [34, 5, 33, 1, 0, 9, 55, 3, 4];
// const sortedMarks = [...marks].sort((a, b) => a - b);
const sortedMarks = marks.slice().sort((a, b) => a - b);
console.log(sortedMarks);
//  This will not be mutated by the array sort function as we have sort on newly created array using slice()
console.log(marks);


// * <-------------------------------------------Working with Immutable arrays ------------------------------------------------------->
const books = getBooks();

//  1. Adding a new book without mutating the existing one
const newBook = {
  id: 6,
  titile: "Harry Potter and the chamber of secrets",
  author: "J.K. Rowling",
  pages: 1000
};

const bookAfterAdding = [...books, newBook];

console.log(bookAfterAdding);

// 2. deleting the book
const bookAfterDeleting = bookAfterAdding.filter(book => book.id != 5);

console.log(bookAfterDeleting);

// 3. Update the book with pages = 1200 for id =6
const bookAfterUpdate = bookAfterAdding.map(book => book.id == 6 ? { ...book, pages: 1200 } : book);
console.log(bookAfterUpdate);

// * <--------------------------------------------- Asynchronous JS Promise -------------------------------->
fetch('https://jsonplaceholder.typicode.com/todos/1').then((response)=>response.json()).then(data =>console.log(data));

console.log("I will be executed first before fetch call");

// using async-await
async function getData(){
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  const jsonData = await response.json();
  console.log(jsonData);
}
getData();

console.log("I will be executed first before fetch(await) call");


