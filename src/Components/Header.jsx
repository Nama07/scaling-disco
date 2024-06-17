import React from 'react'

function Header() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
        <a class="nav-item nav-link" href="#">Blog List</a>
        <a class="nav-item nav-link" href="#">Create Post</a>
    
    </div>
  </div>
</nav>
  )
}
//tohle mi nefunguje nevim proc to furt nejak nejde
export default Header