import Carrito from "../CartWidget/Carrito"
import Item from "../itemListContainer/Item"

const index = ({logo}) => {
    return (
  <header>
          <nav>
              <div class="menu-logo"><img src={logo} alt=""/></div>
              <div class="menu-nav">
                  <a class="active" href="">Home</a>
                  <li class="nav-item dropdown">
                      <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                          aria-expanded="false">
                          Men
                      </a>
                      <ul class="dropdown-menu">
                          <li><a class="dropdown-item" href="#">ALL CLOTHING</a></li>
                          <li><a class="dropdown-item" href="#">Shirts</a></li>
                          <li><a class="dropdown-item" href="#">Pants</a></li>
                          <li><a class="dropdown-item" href="#">Shoes</a></li>
                          <img src="img/men.jpg" alt=""/>
                      </ul>
                  </li>
                  <li class="nav-item dropdown">
                      <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                          aria-expanded="false">
                          Women
                      </a>
                      <ul class="dropdown-menu">
                          <li><a class="dropdown-item" href="#">ALL CLOTHING</a></li>
                          <li><a class="dropdown-item" href="#">Shirts</a></li>
                          <li><a class="dropdown-item" href="#">Pants</a></li>
                          <li><a class="dropdown-item" href="#">Shoes</a></li>
                          <img src="img/women.jpg" alt=""/>
                      </ul>
                  </li>
                  <a href="">Blogs</a>
                  <Item greeting = "Help"/>
              </div>
              <div class="purch">
                  <a href=""><span class="material-symbols-outlined">
                          person
                      </span></a>
                  <a href=""><span class="material-symbols-outlined">
                          favorite
                      </span></a>
                  <Carrito/>
              </div>
          </nav>
      </header>
  
    )
  }
  
  export default index
  