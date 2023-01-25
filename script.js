function toggleMode() {
  const html = document.documentElement;
  html.classList.toggle('light'); // troca do modo dark para o light e vice-versa

  // pegar a tag img
  const img = document.querySelector("#profile img")

  // Substituir a imagem
  if(html.classList.contains('light')) {
    // se tiver o light-mode, adicionar a imagem light
    img.setAttribute('src', './assets/avatar-gustavo .png')
  } else {
    // se tivert no dark-mode, adicionar a imagem dark
    img.setAttribute('src', './assets/avatar-gustavo .png')
  }


}