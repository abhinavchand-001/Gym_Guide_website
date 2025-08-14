





let imgchange = (e) => {
    document.querySelector('.big_image').style.backgroundImage = `url(${e})`;
}


var loader = document.querySelector(".loader");
setTimeout(function() {
    loader.style.top = "-100%"
}, 2500);

// Add a class to the welcome div after 1 second
setTimeout(() => {
    document.querySelector('.welcome').classList.add('show');
  }, 3500);

  function showContent(contentId) {
    let menuSection = document.querySelector(".menu_section");
    let contentToDisplay;
  
    switch (contentId) {
      case "content-1":
        contentToDisplay = document.querySelector(".menu_for_li1");
        break;
      case "content-2":
        contentToDisplay = document.querySelector(".menu_for_li2");
        break;
      case "content-3":
        contentToDisplay = document.querySelector(".menu_for_li3");
        break;
      default:
        console.error(`Unknown content ID: ${contentId}`);
        return;
    }
  
    // Hide all content sections
    document.querySelectorAll(".menu_for_li1, .menu_for_li2, .menu_for_li3").forEach((element) => {
      element.style.display = "none";
    });
  
    // Show the selected content section
    contentToDisplay.style.display = "";

  }
  showContent("content-1");

  document.querySelectorAll(".btn").forEach((element) => {
    element.addEventListener("click", () => {
      showContent(element.getAttribute("data-content-id"));
    });
  });

  // let Scrollbar = window.Scrollbar;

  // const options = {
  //    'damping': 0.01,
  //    'alwaysShowTracks' : true
  // }
  // Scrollbar.init(document.querySelector('.container'), options);

