const header = document.getElementsByTagName('header')[0];
header.innerHTML = `

  <div class="header-top">
    <a href="./index.html" class="logo">Café Metro</a>
    <nav>
      <ul>
        <li><a href="./index.html#about">About</a></li>
        <li><a href="./menu.html">Menu</a></li>
        <li><a href="./index.html#googleMap">Find Us</a></li>
        <li><a href="./contact.html">Contact</a></li>
      </ul>
    </nav>

    <!-- Mobile Nav -->
    <i class="fas fa-bars" id="hamburger"></i>
    <nav id="mobile-nav">
      <ul>
        <li><a href="./index.html#about">About</a></li>
        <li><a href="./menu.html">Menu</a></li>
        <li><a href="./index.html#googleMap">Find Us</a></li>
        <li><a href="./contact.html">Contact</a></li>
      </ul>
    </nav>
  </div>

  <div class="hero-text">
    <span class="section-title">&boxh;&boxh; Welcome to Café Metro</span>
    <h1 class="hero-h1">Start your day the<br>Metro way</h1>
  </div>

`
