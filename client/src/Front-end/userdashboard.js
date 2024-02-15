const { JSDOM } = require('jsdom');
const { document } = new JSDOM('').window;

// HTML
const html = document.createElement('html');
html.setAttribute('lang', 'en');

// Head 
const head = document.createElement('head');

const title = document.createElement('title');
title.textContent = 'User Dashboard - Vivahaa';

const metaCharset = document.createElement('meta');
metaCharset.setAttribute('charset', 'UTF-8');

const metaViewport = document.createElement('meta');
metaViewport.setAttribute('name', 'viewport');
metaViewport.setAttribute('content', 'width=device-width, initial-scale=1.0'); 

head.appendChild(title);
head.appendChild(metaCharset);  
head.appendChild(metaViewport);

// Body
const body = document.createElement('body');

// Navbar
const navbar = document.createElement('div');
navbar.classList.add('navbar');  

const profileLink = document.createElement('a');
profileLink.setAttribute('href', '#'); 
profileLink.textContent = 'Profile';
   
const searchInput = document.createElement('input'); 
searchInput.setAttribute('type', 'search');
searchInput.setAttribute('placeholder', 'Search services...');

const signOutLink = document.createElement('a');
signOutLink.setAttribute('href', '#');
signOutLink.textContent = 'Sign Out';  

navbar.appendChild(profileLink);
navbar.appendChild(searchInput);
navbar.appendChild(signOutLink);

// Container 
const container = document.createElement('div'); 
container.classList.add('container');

// Services
const services = [ 
  { 
    title: 'Venues',
    desc: 'Find the perfect location for your special day'
  },
  {
    title: 'Photographers',
    desc: 'Capture every moment with the best professionals' 
  }, 
  {
    title:'Make-up Artists',
    desc:'Look your best with expert make-up artists'
  },
  {
    title: 'Florist and Decor',
    desc: 'Beautiful arrangements to brighten your venue.' 
  }, 
  {
    title:'Musicians and Dancers',
    desc:'Entertain your guests with live performances.'
  },
  {
    title:'Pandits',
    desc:'Find experienced pandits for traditional rituals.'
  },
  {
    title: 'Food/Catering Services',
    desc: 'Delight your guests with exquisite cuisines.' 
  }, 
  {
    title:'DIY - Assistance',
    desc:'Get help with your do-it-yourself projects.'
  }
]; 

services.forEach(service => {

  const serviceDiv = document.createElement('div');  
  serviceDiv.classList.add('service');
   
  const title = document.createElement('h4');
  title.textContent = service.title; 
   
  const desc = document.createElement('p');
  desc.textContent = service.desc;

  serviceDiv.appendChild(title);
  serviceDiv.appendChild(desc); 
  container.appendChild(serviceDiv);

});

// Advertising
const advertisingDiv = document.createElement('div'); 
advertisingDiv.classList.add('service', 'advertising');  

const adTitle = document.createElement('h4');
adTitle.textContent = 'Advertising Space';

const adDesc = document.createElement('p');  
adDesc.textContent = 'Your ad could be here!';

advertisingDiv.appendChild(adTitle);
advertisingDiv.appendChild(adDesc);
container.appendChild(advertisingDiv);

// Append elements  
body.appendChild(navbar);
body.appendChild(container);  

html.appendChild(head);
html.appendChild(body);

console.log(html.outerHTML);