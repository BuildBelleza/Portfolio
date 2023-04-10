// const app = document.getElementById("app");

// let item = [];
// let clickCount = 0;
// let firstCard = "";
// let secondCard = "";
// let cardIds = [];

// const picturesPick = async () => {
//   const x = await fetch(
//     "https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=f315febdc75fb1e9b82dec177517312a&tags=circus&per_page=10&format=json&nojsoncallback=1"
//   );
//   const response = await x.json();
//   console.log([response]);
//   // return data;
// };

// // picturesPick();
// // const getPhotoIds = async () => {
// //   const data = await picturesPick();
// //   const photoIds = [data.photos.photo.id(item)];
// //   console.log(filteredData[photoIds]);
// //   return filteredData[];
// // };

// const getPhotoIds = async () => {
//   const data = await picturesPick();
//   const id = [];
//   const filteredData = data.id((data) => [photo.data.id]);
//   console.log(filteredData);
//   // return fullGameArray;
// };

// getPhotoIds();

const app = document.getElementById("app"); //we are caching the element so we can attach to the DOM

const appCard = document.getElementById("appCard");
const appCard1 = document.getElementByClassName("appCard1");
const appCard2 = document.getElementById("appCard");
const appCard3 = document.getElementById("appCard");
const appCard4 = document.getElementById("appCard");
const appCard5 = document.getElementById("appCard");
const appCard6 = document.getElementById("appCard");

let clickCount = 0;
let firstCard = "";
let secondCard = "";
let cardIds = [];
// let item = [];

const picturesPick = async () => {
  const x = await fetch(
    "https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=f315febdc75fb1e9b82dec177517312a&tags=circus&format=json&nojsoncallback=1"
  );
  const response = await x.json();
  const data = [response.photos];
  // console.log(data);
  return data;
};

const randomPicks = async () => {
  const data = await picturesPick();
  const randomPicks = data[0].photo[Math.floor(Math.random() * 10)];
  console.log(randomPicks);
  return randomPicks;
};

const getPhotoIds = async () => {
  const newArray = await randomPicks();
  // need to iterate over array of objects and return the property with the key of id for each object element in the array and store it in a new array
  let el = newArray[0].photo.map((el) => {
    "el.id", "el.server", "el.secret";
  });
  {
    console.log(el);
    return [el];
  }

  // return el;

  // console.log(el);
  // return el;
  // let newArray = data.map((el) => (el = data.push(el.id)));
  // {
  // }
  // console.log(newArray);
  // // console.log(newArray);
  // return data;

  // const data = newArray.map((el) => el.id);

  // console.log(data);
  // return data;
};
// newArray = [];
// const newData = newArray.map((index === 0) === data.photo);
// newData.forEach((el) => el.id);
// console.log(newArray);
//   const data = newArray.map((el) => el[id]) {
//     console.log(data);
//   };
//     console.log(data);
// };
// return el;

// console.log(data);
// return data;

// getPhotoIds();

const arrayOfUrls = async () => {
  const data = await getPhotoIds();
  // const arrayOfUrls = data[0];
  for (var i = 0; i < 10; i++);
  const arrayOfUrls = data[0].map(
    (el) => `https://live.staticflickr.com/${[1]}/$[0]}_${[2]}_s.jpg`
  );
  // console.log(arrayOfUrls);
  return arrayOfUrls;
  //for length of array interpolate each string element into a template literal and store it in a new array

  // console.log(data);
  {
    // console.log(i);
    // console.log(arrayOfUrls[i]);
  }
};

// const makeBoard = async () => {
//   const data = await arrayOfUrls();
//   let finalResult;
//   const urls = [data];
//   Promise.all(urls.map((i = url) => fetch(urls).then((e) => e.json()))).then(
//     (data) => {
//       finalResult = data.flat();
//       console.log(finalResult);
//     }
//   );
// };

// // console.log(data);
// // return data;
// makeBoard();
// arrayOfUrls();
// arrayOfJson();
//use the new array to fetch json data for each url element in the array and pull the urls.url._content property from the json object and store in a new array

// const picUrl = async () => {
//this function is to fetch the url property from each of the json object elements in the array
//   const data = await arrayOfJson();
//   // console.log(data);
//   const arrayOfPicUrls = [];
//   arrayOfPicUrls = forEach((el) =>
//     data.map((el) => fetch(json.response.urls.url._content))
//   );
//   console.log(...data, arrayOfPicUrls);
//   console.log(picUrl);
// };
// picUrl();

//

// const arrayOfJson = async () => {
//   const data = await arrayOfUrls();
//   const arrayOfJson = data.map((el) => fetch(el.urls.url._content));
//   console.log(arrayOfJson);
// };

// arrayOfJson();

// const newArray = [url1, url2, url3, url4, url5, url6, url7, url8, url9, url10];
// console.log(newArray);

// const url1 = await data[];
// {
//   forEach = ((i = 0), i < 10, i++)(

// function renderItem(name, index) {
//   const div = document.createElement("div");
//   // div.innerText = name;
//   div.setAttribute("data-number", `${getPhotoIds}-${index}`);
//   app.appendChild(div); //entry point to the DOM
//   div.classList = "card";
//   // div.id = createRandomId();
//   console.log(renderItem);
// }

//add a class to elements in the HTML
// app.addEventListener("click", handleClick);

// function handleClick(e) {
// const el = e.target;
// const card = el.getAttribute("data-name");
// let isMatch = firstCard === getCardName(card);
// let isNotMatch = firstCard != getCardName(card);
// console.log(card);
// const isRevealed = el.classList.contains("revealed");

// if (el.classList.contains("card") && !isRevealed) {
//   clickCount += 1;
//   cardIds.push(el.id);

//   if (clickCount === 1) {
//     firstCard = getCardName(card);
//     toggleStyle(el);
//   }

//   if (clickCount === 2) {
//     const secondCard = getCardName(card);
//     checkIsMatch(secondCard);
//   }

//   if (clickCount > 2) {
//     toggleStyle(el);
//   }
// }

// function getCardName(str) {
//   const words = str.split("-");
//   console.log(words[0]);
//   return words[0];
// }

// function toggleStyle(el) {
//   if (!el) {
//     app.querySelectorAll(".card").forEach((el) => {
//       el.classList.remove("active");
//     });
//   } else {
//     el.classList.toggle("active");
//   }
// }

// function checkIsMatch(val) {
//   if (firstCard === val) {
//     cardIds.forEach((cardId) => {
//       document.getElementById(cardId).classList.add("revealed");
//     });
//   } else {
//     toggleStyle();
//   }
//   clickCount = 0;
//   cardIds = [];
//   console.log(firstCard === val);
//   // return firstCard === val;
// }

// function createRandomId() {
//   return (Math.random() + 1).toString(36).substring(7);
