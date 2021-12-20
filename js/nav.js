document.addEventListener('DOMContentLoaded', initNavbar());

function initNavbar() {
  navbar()
}

function navbar() {
  const nav = document.querySelector("#navbar");
  const navbar = `<div class="topnav d-flex container">
                    <a href="index.html">
                      <div class="logoWrapper">
                        <i class="fa-nav"></i>
                                              </div>
                    </a>
                    <div class="aLinksWrapper">
                      <a class="whiteFlicker" href="viewCandidates.html">Kandidater</a>
                      <a class="whiteFlicker" href="createCandidate.html">Opret Kandidat</a>
                      </div>
                  </div>`;
  nav.insertAdjacentHTML("afterbegin", navbar);
}
