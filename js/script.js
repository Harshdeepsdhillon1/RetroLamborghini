//<!--Myself Harshdeep Singh (Student number 200555911) and Muskanpreet Kaur (Student Number 200555994 ) are teaming up to create a website about Lamborghini Countach 1985-->
//This is our Javsscript file

// Using JavaScript for hover effects

// Hover effect for navigation menu items
const navItems = document.querySelectorAll("nav menu li a");

navItems.forEach((item) => {
  item.addEventListener("mouseover", () => {
    item.style.color = "white";
    item.style.backgroundColor = "black";
  });

  item.addEventListener("mouseout", () => {
    item.style.color = "rgb(220, 191, 29)";
    item.style.backgroundColor = "transparent";
  });
});

// Hover effect for buttons
const buttons = document.querySelectorAll(".button a");

buttons.forEach((button) => {
  button.addEventListener("mouseover", () => {
    button.style.backgroundColor = "gold";
    button.style.color = "black";
  });

  button.addEventListener("mouseout", () => {
    button.style.backgroundColor = "black";
    button.style.color = "gold";
  });
});

//Hover effect to h1, h2 of index.html
const headings = document.querySelectorAll(".heading h2");

headings.forEach((heading) => {
  heading.addEventListener("mouseover", () => {
    heading.style.color = "white";
  });

  heading.addEventListener("mouseout", () => {
    heading.style.color = "red";
  });
});
const headings1 = document.querySelectorAll(".heading h1");

headings1.forEach((heading) => {
  heading.addEventListener("mouseover", () => {
    heading.style.color = "red";
  });

  heading.addEventListener("mouseout", () => {
    heading.style.color = "white";
  });
});

//Hover effect to h1, h2 and p in .sport of Explore page
const headings2 = document.querySelectorAll(".heading1 h1, .heading1  h2");

headings2.forEach((heading) => {
  heading.addEventListener("mouseover", () => {
    heading.style.color = "gold";
  });

  heading.addEventListener("mouseout", () => {
    heading.style.color = "white";
  });
});

const headings3 = document.querySelectorAll(".sport p");

headings3.forEach((heading) => {
  heading.addEventListener("mouseover", () => {
    heading.style.color = "gold";
  });

  heading.addEventListener("mouseout", () => {
    heading.style.color = "white";
  });
});


//Hover effect to h1 in dealerships section of dealerships page
const headings6 = document.querySelectorAll(".dealerships h1");

headings6.forEach((heading) => {
  heading.addEventListener("mouseover", () => {
    heading.style.color = "gold";
  });

  heading.addEventListener("mouseout", () => {
    heading.style.color = "white";
  });
});



// Enlarging hover effect for the logo
const logo = document.querySelector(".logo");

logo.addEventListener("mouseover", () => {
  logo.style.transform = "scale(1.2)";
});

logo.addEventListener("mouseout", () => {
  logo.style.transform = "scale(1)";
});