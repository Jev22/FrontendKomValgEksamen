document.addEventListener('click',async function(e){
  console.log("test")
  if(e.target && e.target.classList.contains("btnDeleteCandidate")){
    console.log("dynamisk knap")
    const id = e.target.getAttribute("data-id")
    const url = "http://localhost:8080/candidate/" + id;
    const fetchOptions = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      },
      body: ""
    }

    console.log(e.target.getAttribute("data-id"))
    for (let i = 0; i < candidateArray.length; i++){
      if (candidateArray[i].candidateId == e.target.getAttribute("data-id")) {
        candidateArray.splice(i, 1)
      }
    }

    console.log(candidateArray)

    const response = await fetch(url, fetchOptions)

    if (!response.ok) {
      console.log("Det fik ikke godt")
    }
    if (response.ok) {
      let stableDiv = e.target.parentElement;
      stableDiv.remove();
    }
  }
});
