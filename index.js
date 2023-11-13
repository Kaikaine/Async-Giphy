require("dotenv").config();
// Print out value of API key stored in .env file
console.log(process.env.API_KEY);

const endpoint = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}&q=dog&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`;

const getImage = async (query) => {
  const randomNumber = Math.floor(Math.random() * 26);
  const response = await fetch(query);
  const data = await response.json();
  const arr = data.data;
  const image = arr[randomNumber].url;
  console.log(image);

  return image;
};

getImage(endpoint);
