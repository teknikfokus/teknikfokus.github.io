window.onload = function () {


  const BASE_DIV = document.getElementById('event_infon')

  fetch('../content/events.json')
  .then(res => res.json())
  .then(events => {
    
    BASE_DIV.style.textAlign = "left"

    events.forEach(events => {
      var h5Tag = document.createElement('h4')
      h5Tag.innerText = events['title (Datummet)'] + '\u00A0' + '\u00A0' 
      BASE_DIV.appendChild(h5Tag)
      
      tab = document.createElement('tr')
      BASE_DIV.appendChild(tab)

      var h5Tag = document.createElement('h4')
      h5Tag.innerText =  events['name']
      BASE_DIV.appendChild(h5Tag)
    
      lineBreak = document.createElement('br')

      pTag = document.createElement('p')
      pTag.appendChild(lineBreak)
      pTag.innerHTML += "<b>Time:</b>" + '\u00A0'+ events['startTime'] + "-" + events['endTime']
      pTag.appendChild(lineBreak)
      pTag.innerHTML += "<b>Location:</b> " + '\u00A0'+ events['location']
      pTag.appendChild(lineBreak)
      pTag.innerHTML += "<b>Language: </b>" + '\u00A0'+ events['language']
      BASE_DIV.appendChild(pTag)


      // pTag = document.createElement('p')
      // pTag.innerText = "Location: " + events['location']
      // BASE_DIV.appendChild(pTag)

      // pTag = document.createElement('p')
      // pTag.innerText = "Language: " + events['language']
      // BASE_DIV.appendChild(pTag)

      pTag = document.createElement('p')
      pTag.innerText = events['description']
      BASE_DIV.appendChild(pTag)

      
    })

  })
}
