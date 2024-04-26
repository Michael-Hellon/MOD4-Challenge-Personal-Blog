
document.addEventListener("DOMContentLoaded", function() {
    const blogList = document.getElementById("blog-Article");
  
  // this pull the blogArticle from local storage, if its not found it
  // will return an empty array
      function getBlogArticleFromLocStor() {
          return JSON.parse(localStorage.getItem("blog-Array")) || []
      }
  
      // clears the input fields of the previous blog content
      function displayBlogArticles() {
          blogList.innerHTML = "";
      
      //loops through each blogArticle element saved to the array and creates 
      // a container for each
      const blogArray = getBlogArticleFromLocStor();
        blogArray.forEach((blogArticle, index) => {
          const blogContainer = createBlogElement(blogArticle, index);
          blogList.appendChild(blogContainer);            
          });
      }
  
      function createBlogElement(post, index) {
          const blogContainer = document.createElement("section");
          blogContainer.classList.add("blog-entry");
  
          const postedBy = createTextElement("p", "Posted By: " + blogArticle.userName);
          const title = createTextElement("h3", "Title: " + blogArticle.blogTitle);
          const content = createTextElement("p", "Content: " + blogArticle.blogContent);
  
          postedBy.classList.add("postedby");
  
          
          blogContainer.appendChild(title);
          blogContainer.appendChild(content);
          blogContainer.appendChild(postedBy);
  
          return blogContainer;
      }
  
  
  })
  
  