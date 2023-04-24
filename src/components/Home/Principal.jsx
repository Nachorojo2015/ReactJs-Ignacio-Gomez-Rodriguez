import Item from "../itemListContainer/Item"

const Principal = () => {

    
  return (
    <main>
    <div id="carouselExampleDark" className="carousel carousel-dark slide">
        <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="10000">
                <img src="img/ropa1.jpg" className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                    <a href="#see" className="btn btn-dark" >SEE MORE</a>
                </div>
            </div>
            <div className="carousel-item" data-bs-interval="2000">
                <img src="img/ropa2.jpg" className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                    <a href="#see" className="btn btn-dark">SEE MORE</a>
                </div>
            </div>
            <div className="carousel-item">
                <img src="img/ropa3.jpg" className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                    <a href="#see" className="btn btn-dark">SEE MORE</a>
                </div>
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark"
            data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark"
            data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
    </div>
    <div className="adds">
        <div>
            <img src="img/add1.jpg" alt="" />
        </div>
        <div>
            <img src="img/add2.jpg" alt="" />
        </div>
    </div>

    <h2 id="see">Todos los Productos</h2>
  <Item/>
    

    <div className="imagen-fondo">
        <h1 className="titulo-imagen">MEGA SALE</h1>
        <p className="texto-imagen">Up to 70% Off On All Products</p>
    </div>
    <h3 className="clientes">Clients Reviews</h3>
    <p className="clientes">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi dignissimos inobis dolorum architecto? Dolore, quaerat.</p>
    <div className="opinions-container">
        <div className="opinions">
            <img src="https://ah-theme.com/gstore/preview/img/client3.jpg" alt="" />
            <h4>Perry Ahmed</h4>
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star"></ion-icon>
            <p>Lorem ipsum dolor sit amet consecteturt omnis ut. Veritatis autem ad maxime minima similique mollitia.</p>
        </div>
        <div className="opinions">
            <img src="https://ah-theme.com/gstore/preview/img/client2.jpg" alt="" />
            <h4>Roadhy Mohamed</h4>
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star"></ion-icon>
            <p>Lorem ipsum dolor sit amet consec ut. Veritatis quos rerum, harum iure pariatur ue mollitia.</p>
        </div>
        <div className="opinions">
            <img src="https://ah-theme.com/gstore/preview/img/client1.jpg" alt="" />
            <h4>Ahmed Elsaid</h4>
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star"></ion-icon>
            <p>Lorem ipsum dolor sit amet omnis ut. Veritatis quos rerum, utem ad maxime minima similique mollitia.</p>
        </div>
    </div>
    <div className="imagen-fondo2">
        <div><h3 className="texto-fondo2">Free Shipping Wordwide</h3></div>
        <div><a href="" className="boton-fondo2">SHOP NOW</a></div>
    </div>
    <h3 className="noticias">Latest News</h3>
    <p className="noticias-p">Lorem ipsum dolor sit amet rit, nihil sapiente natus est, amet aspernatur maxime asperiores eius. Magnam, animi.</p>
    <div className="blog-container">
        <div className="blog">
            <img src="https://ah-theme.com/gstore/preview/img/blog2.jpg" alt="" />
            <h4>First Blog</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, deserunt.</p>
            <a href="" className="btn btn-dark">Read More</a>
        </div>
        <div className="blog">
            <img src="https://ah-theme.com/gstore/preview/img/blog3.jpg" alt="" />
            <h4>Second Blog</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, deserunt.</p>
            <a href="" className="btn btn-dark">Read More</a>
        </div>
        <div className="blog">
            <img src="https://ah-theme.com/gstore/preview/img/blog.jpg" alt="" />
            <h4>Third Blog</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, deserunt.</p>
            <a href="" className="btn btn-dark">Read More</a>
        </div>
    </div>
    <hr />
    <section className="contact">
        <div className="contact__image-wrapper">
            <img src="https://trapx.shop/wp-content/uploads/2021/02/Sudadera-Zipper-Fear-Of-God-UR8897-1.1-S-XL-3.jpg" alt="" className="contact__image" />
        </div>
        <div className="contact__right-side">
            <h1 className="contact__title">Contact us</h1>
            <form action="" className="contact__form-wrapper">
                <div className="contact__input-line">
                    <label for="name" className="contact__label">Name</label>
                    <input type="text" name="name" id="name" className="contact__input" />
                </div>
                <div className="contact__input-line">
                    <label for="email" className="contact__label">Email</label>
                    <input type="email" name="email" id="email" className="contact__input" />
                </div>
                <div className="contact__input-line">
                    <label for="message" className="contact__label">Message</label>
                    <textarea type="text" name="message" id="message" className="contact__input--textarea"></textarea>
                </div>
                <input type="submit" value="Send message" className="contact__submit-button" />
            </form>
        </div>
    </section>
</main>
  )
}

export default Principal