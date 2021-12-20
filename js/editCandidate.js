document.addEventListener('DOMContentLoaded', init());

function getCandidateId() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const candidate_id = urlParams.get('candidate_id')
  return candidate_id;
}

function init() {
  console.log("Edit candidate")
  let candidate_id = getCandidateId();
  console.log(candidate_id);
  initSingleCandidate(candidate_id);
}

function initSingleCandidate(id){
  fetch("http://localhost:8080/oneCandidate/"+ id)
    .then(response => response.json())
    .then(result => renderSingleCandidateTable(result));

}

function renderSingleCandidateTable(data) {
  let candidateContainer = document.querySelector(".singleCandidate_container");
  console.log(data)
  document.querySelector(".candidateName").value=data.candidateName
  document.querySelector(".candidateVotes").value=data.numberOfVotes

  var candidateItem = `
                        `

  //candidateContainer.insertAdjacentHTML("afterbegin", candidateItem);
}


document.querySelector("#btnUpdateCandidate").addEventListener("click", async function (e) {
  e.preventDefault();
  const form = document.querySelector("#frmEditCandidate");
  const candidate_id = getCandidateId();
  const urlEditCandidate = "http://localhost:8080/candidate/"+candidate_id;

  try {
    let candidateObj = {}
    candidateObj.candidateName = form.candidateName.value
    candidateObj.numberOfVotes = form.numberOfVotes.value
    candidateObj.politicalParty = {}
    candidateObj.politicalParty.partyId = form.partyId.value
    let candidateObjString = JSON.stringify(candidateObj)

    const fetchOptions = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: candidateObjString
    }

    const response = await fetch(urlEditCandidate, fetchOptions)

    if(!response.ok) {
      console.log("Det gik ikke så godt")
    } else {
      document.querySelector(".msg").innerHTML = "Informationerne er opdateret. Du vil blive ledt tilbage til den forrige side om 3 sek."
      setTimeout(function () {
        location.href = "../viewCandidates.html";
      }, 3000)
    }

  } catch (error) {
    alert(error)
    console.log(error)
  }
})
