// Script to smoothly scroll to sections
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    window.scrollTo({
      top: element.offsetTop,
      behavior: 'smooth'
    });
  }
  