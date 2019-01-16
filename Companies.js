window.onload = function () {


  const BASE_DIV = document.getElementById('company_info_coming_from_Companies.js')

  fetch('https://www.teknikfokus.se/Companies.json')
  .then(res => res.json())
  .then(compInfo => {
    //const faqs = JSON_FILE
    // Här har vi precis tagit emot hela FAQ.json --> faqs

    BASE_DIV.style.textAlign = "left"

    compInfo.forEach(compInfo => {
      var h5Tag = document.createElement('h4')
      h5Tag.innerText = compInfo['company']
      BASE_DIV.appendChild(h5Tag)

      pTag = document.createElement('p')
      pTag.innerText = compInfo['description']
      BASE_DIV.appendChild(pTag)

      lineBreak = document.createElement('br')
      BASE_DIV.appendChild(lineBreak)
    })

    // console.log(faqs[0])
  })
}
