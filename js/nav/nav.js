document.addEventListener('DOMContentLoaded', initNavbar());

function initNavbar() {
  navbar()
}

function navbar() {
  const nav = document.querySelector("#navbar");
  const navbar = `<div class="topnav d-flex container">
                    <a href="index.html">
                      <div class="logoWrapper">
                        <i class="fas fa-candidate"></i>
                        <p>Stutteriet</p>
                      </div>
                    </a>
                    <div class="aLinksWrapper">
                      <a class="whiteFlicker" href="index.html" class="">Forside</a>
                      <a class="yellowFlicker" href="viewCandidate.html">Kandidater</a>
                      </div>
                  </div>`;
  nav.insertAdjacentHTML("afterbegin", navbar);
}
