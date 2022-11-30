function parseScores(scoresString) {
   // TODO: Compete the function
   return scoresString.split(' ')
}

function buildDistributionArray(scoresArray) {
   // TODO: Compete the function
   let distributionArray = [0, 0, 0, 0, 0]
   for(let i = 0; i < scoresArray.length; i++) {
      if(scoresArray[i] >= 90)
         distributionArray[0]++
      else if(scoresArray[i] >= 80)
         distributionArray[1]++
      else if(scoresArray[i] >= 70)
         distributionArray[2]++
      else if(scoresArray[i] >= 60)
         distributionArray[3]++
      else
         distributionArray[4]++
   }
   return distributionArray
}

function setTableContent(userInput) {
   // TODO: Compete the function
   let distributionArray = buildDistributionArray(parseScores(userInput))
   let firstRow = document.getElementById('firstRow')
   let thirdRow = document.getElementById('thirdRow')
   for(let i = 0; i < distributionArray.length; i++) {
      let newTd1 = document.createElement('td')
      let newDiv = document.createElement('div')
      let h = distributionArray[i] * 10
      let className = "bar" + i
      newDiv.style.height = h.toString() + "px"
      newDiv.classList.add(className)
      newTd1.appendChild(newDiv)
      firstRow.appendChild(newTd1)
      let newTd3 = document.createElement('td')
      newTd3.innerHTML = distributionArray[i].toString()
      thirdRow.appendChild(newTd3)
   }

}

// The argument can be changed for testing purposes
setTableContent("45 78 98 83 86 99 90 59");