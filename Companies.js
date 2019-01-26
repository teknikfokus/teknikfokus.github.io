window.onload = function () {

  const CompanyList_DIV = document.getElementById('compact_company_list.js')

  const BASE_DIV = document.getElementById('company_info_coming_from_Companies.js')

  let isFirstCompany = true;

  fetch('https://www.teknikfokus.se/Companies.json')
  .then(res => res.json())
  .then(compInfo => {
    //const faqs = JSON_FILE
    // Här har vi precis tagit emot hela FAQ.json --> faqs

    BASE_DIV.style.textAlign = "left"
    CompanyList_DIV.style.textAlign = "center"
    var P = document.createElement('p')

    compInfo.forEach(compInfo => {
      var div = document.createElement('div')
      div.id = compInfo['logoName']
      div.className = "card"
      BASE_DIV.appendChild(div)

      var h5Tag = document.createElement('h4')
      h5Tag.innerText = compInfo['company']
      div.appendChild(h5Tag)

      if(isFirstCompany) {
        isFirstCompany = false
      } else {
        spacer = document.createElement('span')
        spacer.innerText = '\u00A0' +'|'+ '\u00A0'
        P.appendChild(spacer)
      }
      aaa = document.createElement('a')
      aaa.href = '#'+ compInfo['logoName']
      aaa.innerText = compInfo['company']

      P.appendChild(aaa)


      CompanyList_DIV.appendChild(P)
      

      var img = document.createElement('img')
      img.className = "img-fluid"
      img.id = "pic"
      img.src = compInfo['logoName']
      div.appendChild(img)

      pTag = document.createElement('p')
      pTag.innerText = compInfo['description']
      div.appendChild(pTag)

      lineBreak = document.createElement('br')
      div.appendChild(lineBreak)

      p2Tag = document.createElement('p')
      p2Tag.innerText = 'Attending the fair: ' + compInfo['Dag'] + ' february'
      div.appendChild(p2Tag)

    })
  })
}
