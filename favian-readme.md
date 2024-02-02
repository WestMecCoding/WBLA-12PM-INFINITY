
# Project Documentation for Favian

## Project Summary

Lorem: Are website is called Elevate. the site is selling products/tips so people would be healthier than what they are at the moment. information about the tips itself so people would get a better view of how important to be healthy and the outcomes they would get from doing the tips they get from else.are vision to see the website be successful on helping people that are need of supplements and give them a boost in life. the colors that we use in are website is some reds, 
pink, and a very dark green and we picked the colors by the meaning of them so red means courage, green means renewal, and pink means compassion .  

 the role that i did,is that i made the navbar for the website.  i put the icons into the right side of the navbar and i applyed css into it so it would match the websites colors and the links with smooth scroll that goes through the page and you could see all the photos of are products in are website. another thing that i did was doing the github to send the are website in a repo and make it to a page.  

## Code Descriptions

> Code example 1 : this javascript is for the navbar to follow the page when you scroll down so you could click the links by not taking seconds to scroll up.

```js

 const scrollLinks = document.querySelectorAll('.scroll-link');
      scrollLinks.forEach(link => {
        link.addEventListener('click', (e) => {
          e.preventDefault();
          const id = e.target.getAttribute('href').slice(1);
          const element = document.getElementById(id);
          const vhInPixels = window.innerHeight * 0.20;
          let Position = element.offsetTop - vhInPixels;

          window.scrollTo({
            left: 0,
            top: Position,

          })

        })
      })
```

> Code example 2: this is the html for the navbar, the icons , and the hrefs are for sections that the navbar would smooth scroll to.

```html
 <div class="col-lg-12 ">

      <div class="mx-auto">

        <nav class="navbar">

          <div id="icon-pics">
            <img class="icon" src="./assets/logo.PNG">
            <img class="name"
              src="https://yt3.googleusercontent.com/I91agX0HDztjOBzWO4xeIX3DnOd975BhSkvimblxFXrTljLoNiDnWK0ENLXgle2T-ekxMiG5NA=s900-c-k-c0x00ffffff-no-rj">
          </div>
          <ul>
            <li> <a class="scroll-link" href="#health-supplements"> Health Supplements </a></li>
            <li> <a class="scroll-link" href="#erganomics"> Ergonomic Equipment </a></li>
            <li> <a class="scroll-link" href="#productivity-tools"> Productivity Tools</a></li>
            <li> <a class="scroll-link" href="#wellness-tools"> Wellness Tools </a></li>
          </ul>
        </nav>
      </div>
    </div>
```

> Code example 3: the css of the whole entire nav and the code that are inside of it.  

```css
 .icon {

      height: 70px;
      display: inline-block;
    }

    .name {

      width: 100px;
      display: inline-block;
      border: 10px;
    }

    ul {
      display: inline-flex;
      width: 0%;
      justify-content: right;
      font-size: x-large;

    }

    .scroll_link {}

    li {
      display: inline-block;
      list-style: none;
      border-inline: solid;
      border-inline-color: black;
      font-family: horizon;
      padding: 25px;
    }

    a {
      text-decoration: none;
      color: #F49E95;
    }

    #col-lg-12 {
      background-color: rgb(180, 101, 94);
    }

```



