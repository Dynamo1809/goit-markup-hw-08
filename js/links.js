(() => {
  const links = document.querySelectorAll('.projects-link')
  links.forEach(link => link.addEventListener("click", e => e.preventDefault()) )
})()