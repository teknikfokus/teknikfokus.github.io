function printNews() {


  const NewsEvent_DIV = document.getElementById('compact_company_list.js')
    const BASE_DIV = document.getElementById('company_info_coming_from_Companies.js')

    NewsEvents = document.createElement('div')
    var div = document.createElement('div')
    NewsEvents.appendChild(div)
    BASE_DIV.appendChild(NewsEvents)

   fetch('../content/newsInfo.json')
   .then(res => res.json())
   .then(compInfo => {
    compInfo.reverse();
    BASE_DIV.style.textAlign = "left"
    NewsEvent_DIV.style.textAlign = "center"

      compInfo.forEach(compInfo => {
      if((compInfo['Header'] && compInfo['Date'] && compInfo['Container']) != null){
      var div = document.createElement('div')
      div.id = compInfo['Time']
      div.className = "card"
        
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

      NewsEvents.appendChild(div)

      }
    })
 })
}
