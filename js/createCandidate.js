console.log("1")
document.querySelector("#frmCreateCandidate").addEventListener("submit", async function (e) {
  console.log("form");
  console.log("2")

  e.preventDefault();
  const form = document.querySelector("#frmCreateCandidate");
  const url = form.action;

  try {
   let candidateObj = {}
    candidateObj.candidateName = form.candidateName.value
    candidateObj.numberOfVotes = form.numberOfVotes.value
    candidateObj.politicalParty = {}
    candidateObj.politicalParty.partyId = form.partyId.value
    let candidateObjString = JSON.stringify(candidateObj)
    const fetchOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: candidateObjString
    }
    const response = await fetch(url, fetchOptions)
    console.log("Sendt til backend");
    if(!response) {
      console.log("Det var sgu ikke godt")
    }
  location.href="viewCandidates.html"



  } catch (error) {
    alert(error)
    console.log(error)
  }

})
