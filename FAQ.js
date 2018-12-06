window.onload = function () {


  const BASE_DIV = document.getElementById('faq_info_coming_from_FAQ.js')

  fetch('https://www.teknikfokus.se/FAQ.json')
  .then(res => res.json())
  .then(faqs => {
    //const faqs = JSON_FILE
    // Här har vi precis tagit emot hela FAQ.json --> faqs

    BASE_DIV.style.textAlign = "left"

    faqs.forEach(faq => {
      var h5Tag = document.createElement('h4')
      h5Tag.innerText = faq['question']
      BASE_DIV.appendChild(h5Tag)

      pTag = document.createElement('p')
      pTag.innerText = faq['answer']
      BASE_DIV.appendChild(pTag)

      lineBreak = document.createElement('br')
      BASE_DIV.appendChild(lineBreak)
    })

    console.log(faqs[0])
  })
}
