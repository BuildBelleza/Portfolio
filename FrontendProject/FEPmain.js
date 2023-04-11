// const app = document.getElementById('app');


let clickCount = 0;
let firstCard = "";
let secondCard = "";
let cardIds = [];
let i = 0;


const picturesPick = async () => {
    const x = await fetch(
      "https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=f315febdc75fb1e9b82dec177517312a&tags=clowns%2C+carnival%2C+circus&content_type=1&content_types=0&extras=url_n%2C+path_alias&per_page=10&page=1&format=json&nojsoncallback=1"
    );
    const response = await x.json();
    const data = [response.photos];
    // console.log(data);
    return data;
  };
  

  const getArrayOfUrls = async () => {
  const newArray = await picturesPick();
  // need to iterate over array of objects and return the property with the key of id for each object element in the array and store it in a new array
  let el = newArray[0].photo.map((el) => {
    return el.url_n;
    });
    // console.log(el);
    return el;
  };

  getArrayOfUrls();

 
const boardBiz = async () => {
    const board = await getArrayOfUrls();
    const cards = board.concat(board);
    cards.sort(() => 0.5 - Math.random());
    const grid = document.createElement("div");
    grid.classList.add("grid");
    app.appendChild(grid);
    board.forEach((cards) => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.setAttribute("data-id", i);
        card.addEventListener("click", flipCard);
        grid.appendChild(card);
        i++;
      });
        // console.log(img);
        // console.log(div);
        // console.log(grid);
        console.log(cards);
        // console.log(board);
        return grid + cards;
        
    };
    
    boardBiz();



  

    const flipCard = async () => {
        const card = await boardBiz();
        const cardIds = card.getAttribute("data-id");
        cardIds.push(cardIds);
        card.classList.add("flip");
        if (cardIds.length === 2) {
            setTimeout(checkForMatch, 500);
        }
    };


    const checkForMatch = async () => {
        const cardset = await boardBiz();
        const firstCard = cardset[cardIds[0]];
        const secondCard = cardset[cardIds[1]];
        if (firstCard.dataset.id === secondCard.dataset.id) {
            firstCard.removeEventListener("click", flipCard);
            secondCard.removeEventListener("click", flipCard);
            clickCount++;
            cardIds = [];
            if (clickCount === 10) {
                alert("You win!");
            }
        } else {
            firstCard.classList.remove("flip");
            secondCard.classList.remove("flip");
            cardIds = [];
        }
    };


    // checkForMatch();

    



// const dataset = async () => {
//     const cards = await boardBiz();
//     const card = cards.map((el) => {
//         return el.dataset.id;
//     });
//     console.log(card);
//     return card;
// };

// dataset();

// const cardIds = async () => {
//     const cards = await boardBiz();
//     const card = cards.map((el) => {
//         return el.dataset.id;
//     });
//     console.log(card);
//     return card;
// };

// cardIds();

// const boardBiz = async () => {
//     const board = await getArrayOfUrls();
//     const app = document.getElementById('app');
//     const duplicateBoard = board.concat(board);
//     const shuffleBoard = duplicateBoard.sort(() => 0.5 - Math.random());
//     const buildBoard = shuffleBoard.map((el) => {
//         const div = document.createElement('div');
//         div.classList = 'activeCard';
//         div.setAttribute('id', i);
//         app.appendChild(div);
//         div.appendChild(el);
//         i++;
//         return div;
//     });
//     return buildBoard;
//     // console.log(shuffledBoard);
//     // return shuffledBoard;
// };

// boardBiz();
// const addPicsToDom = async () => {
//     const response = await buildBoard(); {
     
//         const img = document.createElement("img");
//         const imgsrc = response[i = 0, i < response.length, i++];
//         app.appendChild(imgsrc);
//         img.classList = 'activeCard';
//         console.log(imgsrc);
//         return img;
//     };
//     };
// buildBoard();

// const board2 = async () => {
//     const response = await buildBoard();
//     const board2 = response.concat(response);
//duplicate the array of cards to make a match for each card
    
    // }});
    
    // console.log(board);
    // return buildBoard;
// };

// const buildBoard2 = async () => {
//     await buildBoard();  
    
//     const board3 = buildBoard().concat(buildBoard());
//     const randomBoard = board3.sort(() => Math.random() - 0.5);
//     console.log(randomBoard);
//     const buildBoard = randomBoard.map((el) => {
//         return el;
//     })};
    
// board2();
//   function renderItem() {
//     // div.innerText = name;
//     // div.setAttribute('url', URL);
//     app.setAttribute('url', URL);
//     div.appendChild(app);
//     app.appendChild(img); //entry point to the DOM
//     div.classList = 'activeCard';
//     // app.appendChild(addPicsToDom);
//   };

//   renderItem();
