const url =
  "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic";

let app = document.querySelector("#results");

const addToDOM = (item) => {
  console.log(item);
  let element = document.createElement("div");
  let img = document.createElement("img");
  let name = document.createElement("p");

  element.className = "figure";
  element.style.height = "60%";
  element.style.width = "200px";
  element.style.margin = "10px";

  img.style.width = "100%";
  img.style.height = "100%";

  name.style.height = "60px";
  name.style.marginTop = "10px";
  name.style.marginBottom = "50px";
  name.style.fontSize = "24px";

  img.src = item.strDrinkThumb;
  name.textContent = item.strDrink;

  element.append(img);
  element.append(name);
  app.append(element);
};

const fetchData = (url) => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data.drinks);
      data.drinks.forEach((item) => {
        addToDOM(item);
      });
    })
    .catch((error) => {
      console.log(error);
      let element = document.createElement("div");
      element.textContent = "An error occured. Please try again.";
      app.append(element);
    })
    .finally(() => {
      let loader = document.querySelector("#loading");
      app.removeChild(loader);
    });
};

fetchData(url);
