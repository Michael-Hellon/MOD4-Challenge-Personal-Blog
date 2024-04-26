document.addEventListener("DOMContentLoaded", function() {
  const blogForm = document.getElementById("blog-form");
  if (!blogForm) {
      console.log("Form not found");
      return;
  }

/* This JS page is used to set and get the blogArticle obj to Local storage.
This page also checks that input space are filled in and not left emptied.    

/* declaring variables to save the object methods to */
const userNameInput = document.querySelector('#userName');
const blogTitleInput = document.querySelector('#blogTitle');
const blogContentInput = document.querySelector('#blogContent');
const submitButton = document.querySelector('#submit');
const msgSec = document.querySelector('#msg');
const backButton = document.getElementById("#back");


const userNameSpan = document.querySelector('#userName');
const blogTitleSpan = document.querySelector('#blogTitle');
const blogContentSpan = document.querySelector('#blogContent');

renderLastBlog();

// returns error message if inputs spaces are left empty
function displayBlog(type, message) {
  msgSec.textContent = message;
  msgSec.setAttribute('class', type);
}

// this will render the blog entered to the blog.html
function renderLastBlog() {
  const userName = localStorage.getItem('userName');
  const blogTitle = localStorage.getItem('blogTitle');
  const blogContent = localStorage.getItem('blogContent');

  /* checks local storage to ensure the variables are not empty. If they are NOT-empty
  it updates the html elements (displays the blogArticles on the blog screen). If they
  are empty it stops the code execution and does not display anything (because the 
  blogArticle is empty). 
  */
  if (!userName || !blogTitle || !blogContent) return;
  userNameSpan.textContent = userName;
  blogTitleSpan.textContent = blogTitle;
  blogContentSpan.textContent = blogContent;
}

submitButton.addEventListener('click', function(event) {
  event.preventDefault();

  const userName = document.querySelector('#userName').value;
  const blogTitle = document.querySelector('#blogTitle').value;
  const blogContent = document.querySelector('#blogContent').value;

  /* checks that the input variables are not empty before sending to local storage. 
  If they are empty it returns an error message. If not empty returns a Success message.
  */

  if (userName === '') {
    displayBlog('error', 'User Name cannot be blank');
  } else if (blogTitle === '') {
    displayBlog('error', 'Blog Title cannot be blank');
  } else if (blogContent === '') {
    displayBlog('error', 'Blog Content cannot be blank');
  } else {
    displayBlog('success', 'Blog created successfully!!!');


  // creates blogArticle obj from submission - 
  const blogArticle = {
    user: userNameInput.value.trim(),
    title: blogTitleInput.value.trim(),
    content: blogContentInput.value.trim(),
  };

  // TODO: Set new submission to local storage
  const jsonUser = JSON.stringify(blogArticle);
    // build the blogArticleArray
  blogArray.push(blogArticle);
  localStorage.setItem("blogArticle", jsonUser);

  // takes you to the blog.html page
  window.location.href = "blog.html";

  renderLastBlog();
 }
});

})
