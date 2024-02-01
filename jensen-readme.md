# project documentation for Jensen Hutchinson

## project summary 
lorem: some information about the team project and my contributions (2-3 paragraph)

Our team project was called Elevate, a company whoses mission is to give people access to products and services that will help them live a more
comfortable and productive life. The company is focused on making its resources affordable for a very broad audience without having to lower the quality of the products and services. An important feature of the website was to demostrate through statments and others personal experience how 
effective and benefical the products are. The website needed to have a young and fresh design/ style because in the descriptions give to use they
said they are always evolving and staying on top of lastest wellness trends. 

My contribution to the project was mainly the footer and helping with any section that needed it. Getting my code to function properly with everyone else's was a challenge. It took my a while to get my footer looking right and functioning due to the fact that there were so many other people trying to implement their code. Also, I helped with creating a couple slides for our presentaiton. I made sure that after our practice presentation with our expert that I fixed or added any information she recommended we have.
## code descriptions (only 3 examples total)
> code example 1: The code below was for the positioning and stlye of the social media icons. The code makes it so when the user hovers over one of the icons they smoothly move up.
```css
.icons a {
      display: inline-block;
      font-size: 23px;
      color: white;
      padding: 10px;
      margin-left: -12px;
      transition: all .40s ease;
    }

    .icons a:hover {
      color: white;
      transform: translateY(-5px);
    }
```

> code example 2: This is the code used in the HTML for the customer service section of the footer. I created a list so all the different catagories would be evenly spaced and aligned. Then in the CSS I made it so the bullet points weren't visible and the link underline wasn't there anymore aswell.
```html
<div class="footer-content">
        <h3>Customer Service</h3>
        <li id="service"><a href="">General Terms and Condition</a></li>
        <li id="service"><a href="">Privacy Policy</a></li>
        <li id="service"><a href="">Customer Service</a></li>
        <li id="service"><a href="">Sitemap</a></li>
      </div>
```

> code example 3: This is where I changed the decorations and effects of the words in the footer. This made sure that everyhting was in the positiont that I had pictured and matched every other part of the website. Some parts were added or changed once I implemented it into the final with everyone else's code because some of it was competing with other parts of the code.
```css
.footer-content li a {
      padding: 5px;
      display: block;
      color: #F4D2DA;
      font-size: 15px;
      font-weight: 500;
      transition: all .40s ease;
      text-decoration: none;
      font-family: Arial, Helvetica, sans-serif;
      border: none;
    }
```