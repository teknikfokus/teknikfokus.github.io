function printNews() {


  const CompanyList_DIV = document.getElementById('compact_company_list.js')

    var compact_12 = document.createElement('div')
    var head12 = document.createElement('p')
     head12.innerText = "News regarding TeknikFokus 2020"
     head12.style.fontWeight = "bold"
     var pageLink = document.createElement('a')
     pageLink.appendChild(head12)
     compact_12.appendChild(pageLink)
    var P12 = document.createElement('p')
    compact_12.appendChild(P12)
    CompanyList_DIV.appendChild(compact_12)


  const BASE_DIV = document.getElementById('company_info_coming_from_Companies.js')

    CompanyCards_12 = document.createElement('div')
    var div = document.createElement('div')
    CompanyCards_12.appendChild(div)
    BASE_DIV.appendChild(CompanyCards_12)

  fetch('https://www.teknikfokus.se/newsInfo.json')
  .then(res => res.json())
  .then(compInfo => {
    BASE_DIV.style.textAlign = "left"
    CompanyList_DIV.style.textAlign = "center"

    compInfo.forEach(compInfo => {
      if((compInfo['Header'] && compInfo['Date'] && compInfo['Container']) != null){
        //creating the companycards:
      var div = document.createElement('div')
      div.id = compInfo['Time']
      div.className = "card"
      //CompanyCards_13.appendChild(div)

      var h5Tag = document.createElement('h4')
      h5Tag.innerText = compInfo['Header']
      div.appendChild(h5Tag)

      var h5Tag = document.createElement('p')
      h5Tag.innerText = compInfo['Date']
      div.appendChild(h5Tag)


      pTag = document.createElement('p')
      pTag.innerText = compInfo['Container']
      div.appendChild(pTag)

      lineBreak = document.createElement('br')
      div.appendChild(lineBreak)

        CompanyCards_12.appendChild(div)

      }
    })
 })
}