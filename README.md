# MOD4 Challenge - Personal Blog
 A Personal Blog

## Description

For this week’s project I was given general guidelines of how the Blog site was supposed to look and function. The assignment was to create a blog page that allowed a user to create a blog. The first page (index.html) was supposed to have a light/dark mode button, and have a form to enter username, blog title, and blog content. Then when the user clicks “submit” the data entered would be stored in local storage, and they would also be redirected to the blog page that would display all their blogs that were stored in local storage. The blog page is supposed to have a back button too. 

- My main motivation for this project was to apply the API material we learned during the week. 
- This project started out very quickly and had most of it wrote last Friday. The light/dark mode was easy, but my main challenge was trying to get the blogs to display on the blog page. I spent a day trying to figure out why I could not get the blogs to save to local storage, I forgot to include Input on the variable name when building the object. I had multiple blog entries in my local storage but could not get them to display on the blog page. Now, I can only store 1 blog entry in local storage, and it still will not display on the blog page. The back button does not work either.
- I’ll have to work on this and resubmit once I get the bugs out.
- What problem does solve? This allows the user to write personal blogs that are stored in the local storage on their device and then display them on another page.


## User Story

```md
AS A marketing student,
I WANT a personal blog
SO THAT I can showcase my thoughts and experiences.
```

## Acceptance Criteria

```md
GIVEN a personal blog
WHEN I load the app,
THEN I am presented with the landing page containing a form with labels and inputs for username, blog title, and blog content.
WHEN I submit the form,
THEN blog post data is stored to localStorage.
WHEN the form submits,
THEN I am redirected to the posts page.
WHEN I enter try to submit a form without a username, title, or content,
THEN I am presented with a message that prompts me to complete the form.
WHEN I view the posts page,
THEN I am presented with a header, with a light mode/dark mode toggle, and a "Back" button.
WHEN I click the light mode/dark mode toggle,
THEN the page content's styles update to reflect the selection.
WHEN I click the "Back" button,
THEN I am redirected back to the landing page where I can input more blog entries.
WHEN I view the main content,
THEN I am presented with a list of blog posts that are pulled from localStorage.
WHEN I view localStorage,
THEN I am presented with a JSON array of blog post objects, each including the post author's username, title of the post, and post's content.
WHEN I take a closer look at a single blog entry in the list,
THEN I can see the title, the content, and the author of the post.
WHEN I view the footer,
THEN I am presented with a link to the developer's portfolio.
```

## Installation

There are no special installation steps for this project. All you need to do is clone the repository from GitHub onto your computer.

## Usage

Once you have it in your local repository, on your computer, you can use Visual Studio Code to open the folder. There will you see several files and folders. Starting off you will see 2 HTML files, the README.md and the license and two folders. Inside the asset folder you will find the css folder with 3 css file, and a JS folder with 3 JavaScript files. You can then review the files, and then open the index.html in a browser. Then you can write your blog.

To see the project on the browser visit <https://michael-hellon.github.io/MOD4-Challenge-Personal-Blog/>.

![screenshot](/assets/images/screenshot_light.png)

![screenshot](/assets/images/screenshot_dark.png)

## Credits

I worked on this project myself with no other collaborators. I used the several pages from W3Schools <https://www.w3schools.com/> and MDN <https://developer.mozilla.org/en-US/> as references for this project. There were no other sources of information used for this project.

## License

Please refer to the LICENSE in the repo.
