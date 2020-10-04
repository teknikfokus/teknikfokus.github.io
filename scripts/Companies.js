function printCompanies (day18, day19, crit) {
  var criteria = new Array();
  var saved = new Array();
    for(k = 0; k < crit.length; k++){ //Copy 1
      criteria.push(crit[k]);
    }

    for(k = 0; k < criteria.length; k++){ //Copy 2
      saved.push(criteria[k]);
    }


  const CompanyList_DIV = document.getElementById('compact_company_list.js')

    var compact_18 = document.createElement('div')
    var head18 = document.createElement('h5')
    head18.innerText = "18th of February"
    head18.style.fontWeight = "bold"
    var pageLink = document.createElement('a')
    pageLink.href = '#'+'Day1'
    pageLink.appendChild(head18)
    compact_18.appendChild(pageLink)

    var P18 = document.createElement('p')
    compact_18.appendChild(P18)
    CompanyList_DIV.appendChild(compact_18)


    var compact_19 = document.createElement('div')
    var head19 = document.createElement('h5')
    head19.innerText = "19th of February"

    var pageLink = document.createElement('a')
    pageLink.href = '#'+'Day2'
    pageLink.appendChild(head19)
    compact_19.appendChild(pageLink)
    head19.style.fontWeight = "bold"
    var P19 = document.createElement('p')
    compact_19.appendChild(P19)
    CompanyList_DIV.appendChild(compact_19)

  const BASE_DIV = document.getElementById('company_info_coming_from_Companies.js')

  if(day18){
    CompanyCards_18 = document.createElement('div')
    var div = document.createElement('div')
    div.id = "Day1"
    div.className = "card"
    var h5Tag = document.createElement('h4')
    h5Tag.innerText = "18th of February"
    div.appendChild(h5Tag)
    CompanyCards_18.appendChild(div)
    BASE_DIV.appendChild(CompanyCards_18)
  }
if(day19){
  CompanyCards_19 = document.createElement('div')
  var div = document.createElement('div')
  div.id = "Day2"
  div.className = "card"
  var h5Tag = document.createElement('h4')
  h5Tag.innerText = "19th of February"
  div.appendChild(h5Tag)
  CompanyCards_19.appendChild(div)
  BASE_DIV.appendChild(CompanyCards_19)
}

  let isFirstCompany18 = true;
  let isFirstCompany19 = true;

  fetch('../content/published2020.json')
  .then(res => res.json())
  .then(compInfo => {
    //const faqs = JSON_FILE
    // Här har vi precis tagit emot hela FAQ.json --> faqs

    BASE_DIV.style.textAlign = "left"
    CompanyList_DIV.style.textAlign = "center"
    //var P = document.createElement('p')


    compInfo.forEach(compInfo => {

    var control = false; //Control for if the string, i.e "CS, EE" includes "CS" or "EE". If "Computer Science" is checked, all strings "CS, EE", "CS, BME, EE", "CS, BME" should return true.
      for(k = 0; k < saved.length; k++){
        if(compInfo['Dep'] != null){
          if(compInfo['Dep'].includes(saved[k])){
            control = true;
          }
        }
      }

      if((saved.length != 0 && control) || saved.length == 0){ //Print companies according to given conditions
        //creating the companycards:
      var div = document.createElement('div')
      div.id = compInfo['logoName']
      div.className = "card"
      //CompanyCards_19.appendChild(div)

	  var h5Tag = document.createElement('h4')
      h5Tag.innerText = compInfo['company']
      div.appendChild(h5Tag)

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

if(compInfo['Dag'] == 1819){
  p2Tag = document.createElement('p')
  p2Tag.innerText = 'Attending the fair: ' + "18th & 19th of February"
  div.appendChild(p2Tag)
} else {
  p2Tag = document.createElement('p')
  p2Tag.innerText = 'Attending the fair: ' + compInfo['Dag'] + 'th of February'
  div.appendChild(p2Tag)

}

      if(compInfo['Dep'] != null) {
        p3Tag = document.createElement('p')
        p3Tag.innerText = 'Department: ' + compInfo['Dep']
        div.appendChild(p3Tag)
      }
	else {
		  p3Tag = document.createElement('p')
		p3Tag.innerText = 'Department: ' + compInfo['Dep']
		    div.appendChild(p3Tag)
	}


      date = compInfo["Dag"]
      spacer = document.createElement('span')

       if(isFirstCompany18 && date==18) {
        isFirstCompany18 = false
      } else if(isFirstCompany19 && date==19) {
        isFirstCompany19 = false
      }

      else {
        spacer.innerText = '\u00A0' +'|'+ '\u00A0'
      }

      aaa = document.createElement('a')
      aaa.href = '#'+ compInfo['logoName']
      aaa.innerText = compInfo['company']

      //Adding to cards and compactlist dependning on day.

        if(date == 1819){
          P18.appendChild(spacer)
          P18.appendChild(aaa)
          CompanyCards_18.appendChild(div)
        }

      else if(date == 18 && day18){
        P18.appendChild(spacer)
        P18.appendChild(aaa)
        CompanyCards_18.appendChild(div)

      } else if (date == 19 && day19) {
         P19.appendChild(spacer)
         P19.appendChild(aaa)
         CompanyCards_19.appendChild(div)
      }
  }
      //CompanyList_DIV.appendChild(P)
    })
 })
}
