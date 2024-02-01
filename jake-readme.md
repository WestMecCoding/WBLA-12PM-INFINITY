# Project documentation for Jake

## Project Summary
For the WBLA, I was put in charge of the design process. I created our wire frame using Figma. This included the colors, theme, and overall layout of the website. I gave everyone inspiration for how the site would end up looking. Once people made rough drafts of their areas, I provided feedback if it was not cohesive. I also started the final presentation, and themed it similar to our website. Although I did not write the main back of the code, I removed a lot of code which was not working, and fixed a few bugs. They mainly had to do with positioning and sizing, to match with the wire frame which I created.

## Code Descriptions 
> 1: I removed the search bar, as we decided on doing a nav bar instead. This was a super necessary feature, so we decided to move away from it.
```css
    /* 
  .search{
    border: 2px solid black;
    border-radius: 5px;
    height: 40px;
    width: 50%;
    padding: 4px 10px 5px 15px;
    outline: 0;
    background-color: #d26b6b;
  } */
```

> 2: At first, we had "float: center;" for the text in the three big boxes at the bottom of the page, which was not working. So I changed it to "text-align: center;", which positioned it correctly and made it all look more clean.
```css
    #bottom-three-boxes {
      text-align: center;
      display: flex;
      justify-content: space-between;
      padding: 10px;
      margin: 20px;
    }
```

> 3: I added the background color of the page, as well as managing the entire color scheme for the page.
```css
    body {
      background-color: #0A160C;
      color: white;
      overflow-x: hidden;
    }
```


