window.onload = function () {

  const BASE_DIV = document.getElementById('faq_info_coming_from_FAQ.js')

  fetch('https://www.teknikfokus.se/FAQ.json')
  .then(res => res.json())
  .then(faqs => {
    // Här har vi precis tagit emot hela FAQ.json --> faqs



    var h5Tag = document.createElement('h5')
    h5Tag.innerText = faqs[0]['question']
    BASE_DIV.appendChild(h5Tag)

    pTag = document.createElement('p')
    pTag.innerText = faqs[0]['answer']
    BASE_DIV.appendChild(pTag)



    console.log(faqs[0])
  })
}
