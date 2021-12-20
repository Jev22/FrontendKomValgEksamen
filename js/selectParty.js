document.addEventListener('DOMContentLoaded', init());
function init(){
  initPoliticalPartyTable()
}

function initPoliticalPartyTable(){
  fetch("http://localhost:8080/politicalParty")
    .then(response => response.json())
    .then(result => RenderPartySelect(result));

}

function RenderPartySelect(data){
  console.log(data)
  for (let i = 0; i < data.length; i++){
  let selectContainer = document.querySelector("#sltParty")
  let option_item = ` <option value="${data[i].partyId}">${data[i].partyName} </option>  `
  selectContainer.insertAdjacentHTML("beforeend", option_item)
  }
}

