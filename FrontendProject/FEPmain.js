const app = document.getElementById('app');
// app.appendChild(div);

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

//   getArrayOfUrls();

 

const buildBoard = async () => {
    const data = await addPicsToDom();
    const response = data;
    const board = [...data[0], ...data[0]];
    const board2 = response.concat(response);
    const randomBoard = board2.sort(() => Math.random() - 0.5);
    console.log(randomBoard);
    const buildBoard = randomBoard.map((el) => {
        return el;
    });

    //

    console.log(board);
    return board;
};

const addPicsToDom = async () => {
    const response = await buildBoard(); {
     
        const img = document.createElement("img");
        const imgsrc = response[i = 0, i < response.length, i++];
        app.appendChild(imgsrc);
        img.classList = 'activeCard';
        console.log(imgsrc);
        return img;
    };
    };
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
