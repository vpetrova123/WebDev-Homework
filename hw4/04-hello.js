//Image
let image = document.createElement("img");
image.src = "../images/IMG_1129.jpg";
image.alt = "Image of Viktoriya Petrova";
image.style.display = "block";
image.style.margin = "0 auto";
image.style.width = "200px";
image.style.height = "200px";
image.style.borderRadius = "50%";
image.style.marginTop = "50px";
document.body.append(image);

//First line - needs to be bold
let firstLine = document.createElement("p");
firstLine.textContent = "Hi! My name is Vikoriya Petrova and this is my intro:";
firstLine.style.fontWeight = "bolder";
firstLine.style.width = "50vw";
firstLine.style.margin = "0 auto";
firstLine.style.marginTop = "20px";
document.body.append(firstLine);

//Bio
let intro = document.createElement("p");
intro.className = "description";
intro.textContent = "I am a dental hygienist working towards getting my ";
intro.textContent += "Bachelor's Degree in Computer Science at Portland State ";
intro.textContent += "University. While I love dentistry, I've always had a";
intro.textContent += "passion towards technology. I thrive in a fast-paced";
intro.textContent += " environment and love learning new concepts, which is ";
intro.textContent += "perfect since technology is always evolving. My ";
intro.textContent += "experience has adapted me to work great on my own as ";
intro.textContent += "well as part of a team. While working towards mygoals, ";
intro.textContent += "I'm hoping to have the opportunity to participate in ";
intro.textContent += "an internship to allow me to grow as a programmer.";

intro.style.width = "50vw";
intro.style.marginLeft = "auto";
intro.style.marginRight = "auto";

document.body.append(intro);
