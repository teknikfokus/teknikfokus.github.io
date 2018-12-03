window.onload = function () {

  const BASE_DIV = document.getElementById('faq_info_coming_from_FAQ.js')

  fetch('https://www.teknikfokus.se/FAQ.json')
  .then(res => res.json())
  .then(faqs => {
    console.log(BASE_DIV)
    BASE_DIV.style.backgroundColor = 'red'
    BASE_DIV.style.height = '100px'

    console.log(faqs[0])
  })
}
