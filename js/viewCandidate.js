document.addEventListener('DOMContentLoaded', init());
let candidateArray = {}
function init(){
  initCandidateTable()
}

function initCandidateTable(){
  fetch("http://localhost:8080/candidate")
    .then(response => response.json())
    .then(result => renderCandidateTable(result));

}

function renderCandidateTable(result){
  console.log(result)
  candidateArray = result
  let candidateContainer = document.querySelector(".candidate_container");
  result.forEach(candidate =>{
    let candidateObject = `<div class='d-flex mb-2 candidate-item'>
                                  <div class='col-sm-2'>${candidate.candidateName}</div>
                                  <div class='col-sm-2'>${candidate.numberOfVotes}</div>
                                  <div class='col-sm-2'>${candidate.politicalParty.partyName}</div>
                            <div class="col-sm-2"> <a href="editCandidate.html/?candidate_id=${candidate.candidateId}">Rediger</a></div>
                            <div class="col-sm-2 btnDeleteCandidate" data-id="${candidate.candidateId}">Slet</div>
                          </div>`;
    candidateContainer.insertAdjacentHTML("afterend", candidateObject);

  });
}

document.querySelector(".sortByParty").addEventListener("click", function(){
  let candidate = document.querySelectorAll(".candidate-item")
  for (let i = 0; i < candidate.length; i++) {
    candidate[i].remove()
  }

  console.log(candidateArray)
  candidateArray.sort(function(a, b){
    let x = a.politicalParty.partyName.toLowerCase();
    let y = b.politicalParty.partyName.toLowerCase();
    if (x < y) {return -1;}
    if (x > y) {return 1;}
    return 0;
  });
  console.log(candidateArray)
  let candidateContainer = document.querySelector(".candidate_container");
  candidateArray.forEach(candidate =>{
    let candidateObject = `<div class='d-flex mb-2 candidate-item'>
                                  <div class='col-sm-2'>${candidate.candidateName}</div>
                                  <div class='col-sm-2'>${candidate.numberOfVotes}</div>
                                  <div class='col-sm-2'>${candidate.politicalParty.partyName}</div>
                            <div class="col-sm-2"> <a href="editCandidate.html/?candidate_id=${candidate.candidateId}">Rediger</a></div>
                            <div class="col-sm-2 btnDeleteCandidate" data-id="${candidate.candidateId}">Slet</div>
                          </div>`;
    candidateContainer.insertAdjacentHTML("afterend", candidateObject);

  });



})
