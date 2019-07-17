const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM <br> Is  <br> Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street <br> Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};


// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// Varibles representing each section of page

  // Nav variable
let nav1 = document.getElementsByTagName('nav a'[1]); // selects first array in nav 

  // Header variables
let ctaHeader = document.querySelector("h1"); 
let headerImg = document.getElementById("cta-img");
let button = document.querySelector('button');

  // Top content variables
let features = document.getElementsByTagName("h4")[0];
let featuresContent = document.getElementsByTagName("p")[0];
let about = document.getElementsByTagName("h4")[1];
let aboutContent = document.getElementsByTagName("p")[1];

  // Middle content variable
let middle = document.getElementById("middle-img");

  // Bottom content variables
let services = document.getElementsByTagName("h4")[2];
let servicesContent = document.getElementsByTagName("p")[2];
let product = document.getElementsByTagName("h4")[3];
let productContent = document.getElementsByTagName("p")[3];
let vision = document.getElementsByTagName("h4")[4];
let visionContent = document.getElementsByTagName("p")[4];

  // Contact content variables
let contact = document.getElementsByTagName("h4")[5];
let addressContent = document.getElementsByTagName("p")[5];
let phoneContent = document.getElementsByTagName("p")[6];
let emailContent = document.getElementsByTagName("p")[7];

  // Footer content variables 
let footer = document.getElementsByTagName("p")[8];

document.getElementsByTagName("a")[0].style.color = "green";
document.getElementsByTagName("a")[2].style.color = "green";
document.getElementsByTagName("a")[4].style.color = "green";

// Navigation 
nav1[0].innerHTML = siteContent["nav"]["nav-item-1"];
  
nav1[1].innerHTML = siteContent["nav"]["nav-item-2"];
nav1[2].innerHTML = siteContent["nav"]["nav-item-3"];
nav1[3].innerHTML = siteContent["nav"]["nav-item-4"];
nav1[4].innerHTML = siteContent["nav"]["nav-item-5"];
nav1[5].innerHTML = siteContent["nav"]["nav-item-6"];



// Header
ctaHeader.innerHTML = siteContent["cta"]["h1"];

button.innerHTML = siteContent["cta"]["button"];

headerImg.setAttribute('src', siteContent["cta"]["img-src"]);

// Top Content

features.innerHTML = siteContent["main-content"]["features-h4"];
featuresContent.innerHTML = siteContent["main-content"]["features-content"];

about.innerHTML = siteContent["main-content"]["about-h4"];

aboutContent.innerHTML = siteContent["main-content"]["about-content"];

// Middle Content

middle.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

// Bottom Content
services.innerHTML = siteContent["main-content"]["services-h4"];


servicesContent.innerHTML = siteContent["main-content"]["services-content"];


product.innerHTML = siteContent["main-content"]["product-h4"];


productContent.innerHTML = siteContent["main-content"]["product-content"];


vision.innerHTML = siteContent["main-content"]["vision-h4"];


visionContent.innerHTML = siteContent["main-content"]["vision-content"];

// Contact Content

contact.innerHTML = siteContent["contact"]["contact-h4"];

addressContent.innerHTML = siteContent["contact"]["address"];

phoneContent.innerHTML = siteContent["contact"]["phone"];

emailContent.innerHTML = siteContent["contact"]["email"];


// Footer Content


footer.innerHTML = siteContent["footer"]["copyright"];



// console.log(nav1);

