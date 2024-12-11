const projects = [
    {
      title: "Mochee Cheesecake Logo",
      image: "cheesecakelogo/01.png",
      link: "logo.html"
    },
    {
      title: "Starbucks Carousel Post",
      image: "creative/10.png",
      link: "creative.html"
    },
    {
      title: "Flowever Brand Guideline",
      image: "flowever/Brand Guideline - Flowever.png",
      link: "brandguideline.html"
    }
  ];
  
  // Random suggestion //
const suggestionLink = document.getElementById("suggestion-link");
const suggestionImage = document.getElementById("suggestion-image");
const suggestionTitle = document.getElementById("suggestion-title");
  
  
  // No repeated suggestion //
  const currentPage = window.location.pathname.split("/").pop();
  const otherProjects = projects.filter(project => project.link !== currentPage);
  const randomProject = otherProjects[Math.floor(Math.random() * otherProjects.length)];
  
    suggestionLink.href = randomProject.link;
    suggestionImage.src = randomProject.image;
    suggestionTitle.textContent = randomProject.title;
  
  

    
//* back to top  */
    window.addEventListener('scroll',()=> {
      const backToTopButton = document.getElementById('backToTop');
      if (window.scrollY > 200) {
          backToTopButton.style.display = 'block'; //show the button //
      } else {
          backToTopButton.style.display = 'none' ; // button hidden // 
      }
  }
  )
  
      document.getElementById('backToTop').addEventListener('click',()=> {
      window.scrollTo({top:0, behavior:'smooth'});
      })
  