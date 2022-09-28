fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => response.json())
  .then((json) => console.log(json));

fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((resp) => {
    // resp is the data you are fetching from the server, .text or.JSON is the nature of the data
    return resp.text();
  })
  .then((data) => {
    // do something
  });

fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((respo) => {
    return respo.json();
  })
  .then((dat) => {
    // do another thing
  });

myJSON = '["Ford", "BMW", "Fiat"]';
myArray = JSON.Parse(myJSON);
console.log(myArray);
