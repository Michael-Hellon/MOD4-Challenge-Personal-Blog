/*
WHEN I submit the form,
THEN blog post data is stored to localStorage.
WHEN the form submits,
THEN I am redirected to the posts page.
WHEN I enter try to submit a form without a username, title, or content,
THEN I am presented with a message that prompts me to complete the form.
WHEN I view the posts page,
THEN I am presented with a header, with a light mode/dark mode toggle, and a "Back" button.
*/

/* declaring variables to save the object methods to */
const userNameInput = document.querySelector('#userName');
const blogTitleInput = document.querySelector('#blogTitle');
const blogContentInput = document.querySelector('#blogContent');
const submitButton = document.querySelector('#submit');
const sendBlog =document.querySelector('#sendIt');

const userNameSpan = document.querySelector('#userName');
const blogTitleSpan = document.querySelector('#blogTitle');
const blogContentSpan = document.querySelector('#blogContent');

renderLastRegistered();

function displayBlog(type, message) {
    sendBlog.textContent = message;
    sendBlog.setAttribute('class', type);
}

// retrieves blog data and renders it to blog page
function renderLastRegistered() {
    let userName = localStorage.getItem('userName');
    let blogTitle = localStorage.getItem('blogTitle');
    let blogContent = localStorage.getItem('blogContent');

    if (!userName || !blogTitle || !blogContent) return;
    userNameSpan.textContent = userName;
    blogTitleSpan.textContent = blogTitle;
    blogContentSpan.textContent = blogContent;
}

submitButton.addEventListener('click', function (event) {
    event.preventDefault();

    const userName = document.querySelector('#userName').value;
    const blogTitle = document.querySelector('#blogTitle').value;
    const blogContent = document.querySelector('#blogContent').value;
  
    if (userName === '') {
      displayMessage('error', 'User Name cannot be blank');
    } else if (blogTitle === '') {
      displayMessage('error', 'Blog Title cannot be blank');
    } else if (blogContent === '') {
        displayMessage('error', 'Blog Content cannot be blank');
    } else {
      displayMessage('success', 'Blog created successfully!!!');

      localStorage.setItem('userName', userName);
      localStorage.setItem('blogTitle', blogTitle);
      localStorage.setItem('blogContent', blogContent);
})