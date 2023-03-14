import Navbar from './components/Navbar'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 1024 },
        items: 4
    },
    desktop: {
        breakpoint: { max: 1024, min: 800 },
        items: 4
    },
    tablet: {
        breakpoint: { max: 800, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};



class ProductosHombre {
    constructor(imagen, precio, nombre, id) {
        this.imagen = imagen
        this.precio = precio
        this.nombre = nombre
        this.id = id
    }
}

class ProductosMujer {
    constructor(imagen, precio, nombre) {
        this.imagen = imagen
        this.precio = precio
        this.nombre = nombre
    }
}


const Pantalon1Hombre = new ProductosHombre('https://taverniti.vteximg.com.br/arquivos/ids/249954-2000-2500/11220_668X2.jpg?v=637974805677300000', 1000, 'Pantalon1', 1)
const Pantalon2Hombre = new ProductosHombre('https://d368r8jqz0fwvm.cloudfront.net/26600-product_lg/pantalon-de-hombre-venture.jpg', 1000, 'Pantalon2', 2)
const Pantalon3Hombre = new ProductosHombre('https://www.aquadelta.com.ar/img/articulos/2021/06/pantalon_columbia_desmontable_silver_ridge_hombre_imagen13.jpg', 1000, 'Pantalon3', 3)
const Pantalon4Hombre = new ProductosHombre('https://tommyargentina.vteximg.com.br/arquivos/ids/205444-500-667/MW0MW06393_264_1.jpg?v=637950659225500000', 1000, 'Pantalon4', 4)
const Pantalon5Hombre = new ProductosHombre('https://madmenmagazine.com/wp-content/uploads/2018/08/tiposdepantalonesparahombre.madmenmagazine4.jpg', 1000, 'Pantalon5', 5)

//REMERAS
const Remera1Hombre = new ProductosHombre('https://www.tresasesbasicos.com.ar/wp-content/uploads/2020/03/Tres-ases-2-1098.jpg', 1000, 'Remera1', 1)
const Remera2Hombre = new ProductosHombre('https://con-actitud.com.ar/wp-content/uploads/2021/05/3-4.jpg', 1000, 'Remera2', 2)
const Remera3Hombre = new ProductosHombre('https://taverniti.vteximg.com.br/arquivos/ids/199014-500-500/09234_259X1.jpg?v=636928454236200000', 1000, 'Remera3', 3)
const Remera4Hombre = new ProductosHombre('http://d3ugyf2ht6aenh.cloudfront.net/stores/001/343/531/products/blanco1-5943971455dd84e95016431176950486-640-0.webp', 1000, 'Remera4', 4)
const Remera5Hombre = new ProductosHombre('https://d3ugyf2ht6aenh.cloudfront.net/stores/001/343/531/products/negro6_3-37eaa32be7302e5d2216432852171619-640-0.webp', 1000, 'Remera5', 5)

//ZAPATOS

const Zapato1Hombre = new ProductosHombre('https://imagenes.elpais.com/resizer/8YF6GnM-rh2MbBS21IfDm5pYEKY=/1960x1470/cloudfront-eu-central-1.images.arcpublishing.com/prisa/WSTCUVUHF5EGLF6MKQ4K5QNLWU.jpg', 2000, 'Zapato1', 1)
const Zapato2Hombre = new ProductosHombre('https://cryptoavisos.com/oc-content/uploads/11/4051.webp', 2000, 'Zapato2', 2)
const Zapato3Hombre = new ProductosHombre('https://ae01.alicdn.com/kf/He79c0dbb58f44fad8bb07cbdd6f06ac91/Valstone-zapatos-informales-de-piel-aut-ntica-para-hombre-zapatillas-n-uticas-c-modas-suaves-de.jpg_220x220.jpg_.webp', 2000, 'Zapato3', 3)
const Zapato4Hombre = new ProductosHombre('https://d2r9epyceweg5n.cloudfront.net/stores/001/615/286/products/monk-31-f62caa677e07d8603816191161755928-640-0.jpg', 2000, 'Zapato4', 4)
const Zapato5Hombre = new ProductosHombre('https://ae01.alicdn.com/kf/H8b69e0a83dc64eb1a76c993acfb25695h.jpg?width=800&height=800&hash=1600', 2000, 'Zapato5', 5)

let productosHombre = [Pantalon1Hombre, Pantalon2Hombre, Pantalon3Hombre, Pantalon4Hombre, Pantalon5Hombre, Remera1Hombre, Remera2Hombre, Remera3Hombre, Remera4Hombre, Remera5Hombre, Zapato1Hombre, Zapato2Hombre, Zapato3Hombre, Zapato4Hombre, Zapato5Hombre]

const Pantalon1Mujer = new ProductosMujer('https://static1.mujerhoy.com/www/multimedia/202006/14/media/cortadas/pantalon-rayas-hym-kJDF--600x900@MujerHoy.jpg', 3000, 'Pantalon1')
const Pantalon2Mujer = new ProductosMujer('https://tizamol.com.ar/wp-content/uploads/2020/07/7c200cd7c03f60c8dbab361f64ba1d25.jpg', 3000, 'Pantalon2')
const Pantalon3Mujer = new ProductosMujer('https://filaar.vtexassets.com/arquivos/ids/6657527-800-auto?v=638134496961230000&width=800&height=auto&aspect=true', 3000, 'Pantalon3')
const Pantalon4Mujer = new ProductosMujer('https://d368r8jqz0fwvm.cloudfront.net/25576-product_lg/pantalon-de-mujer-sienna.jpg', 3000, 'Pantalon4')
const Pantalon5Mujer = new ProductosMujer('https://filaar.vtexassets.com/arquivos/ids/6633019-800-auto?v=638133868507570000&width=800&height=auto&aspect=true', 3000, 'Pantalon5')

//REMERAS

const Remera1Mujer = new ProductosMujer('https://notilook.com.ar/wp-content/uploads/2022/07/remeras-arizona-verano-2023.jpg', 1500, 'Remera1')
const Remera2Mujer = new ProductosMujer('https://taverniti.vteximg.com.br/arquivos/ids/243809-2000-2500/19701_601X1.jpg?v=637940111991030000', 1500, 'Remera2')
const Remera3Mujer = new ProductosMujer('https://taverniti.vteximg.com.br/arquivos/ids/243813-2000-2500/19659_601X1.jpg?v=637940116848830000', 1500, 'Remera3')
const Remera4Mujer = new ProductosMujer('https://taverniti.vteximg.com.br/arquivos/ids/242123-2000-2500/04353_795X1.jpg?v=637889157865530000', 1500, 'Remera4')
const Remera5Mujer = new ProductosMujer('https://taverniti.vteximg.com.br/arquivos/ids/236487-2000-2500/04185_710X1.jpg?v=637714547077870000', 1500, 'Remera5')

//ZAPATOS

const Zapato1Mujer = new ProductosMujer('https://assets.jumpseller.com/store/edgarcalzado/themes/456423/options/63601894/IMG_4830.jpg?1669235193', 3500, 'Zapato1')
const Zapato2Mujer = new ProductosMujer('https://www.nuevoannafield.com/wp-content/uploads/2022/05/56600c428ced47bd90914abc590c167d.jpg', 3500, 'Zapato2')
const Zapato3Mujer = new ProductosMujer('https://img01.ztat.net/article/spp-media-p1/7557158893cc499a80a128b9f17c40a5/0a0bd26d5e29427c8ec00eb814c719b9.jpg?imwidth=1800', 3500, 'Zapato3')
const Zapato4Mujer = new ProductosMujer('https://i.pinimg.com/736x/7e/99/e3/7e99e31e414e55abd683d7b4ac76064a.jpg', 3500, 'Zapato4')
const Zapato5Mujer = new ProductosMujer('https://ae01.alicdn.com/kf/H9925804b587940b98958594ee948ad91b/Zapatos-planos-de-pescador-para-mujer-zapatillas-de-c-amo-bordadas-a-la-moda-informales-transpirables.jpg_Q90.jpg_.webp', 3500, 'Zapato5')

let productosMujer = [Pantalon1Mujer, Pantalon2Mujer, Pantalon3Mujer, Pantalon4Mujer, Pantalon5Mujer, Remera1Mujer, Remera2Mujer, Remera3Mujer, Remera4Mujer, Remera5Mujer, Zapato1Mujer, Zapato2Mujer, Zapato3Mujer, Zapato4Mujer, Zapato5Mujer]



function Indice() {

    return (
        <div>
            <Navbar logo="img/logo.png" />
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


               <div className="hombres-cont">
               <h2 id="see">Productos de Hombre</h2>
                <Carousel responsive={responsive}>
                {
                    productosHombre.map(
                        (producto) => 
                        <div className='card'>
                        <img className='product--image' src={producto.imagen} alt="" />
                        <h3>{producto.nombre}</h3>
                        <h4>${producto.precio}</h4>
                        <button className='btn btn-danger'><span class="material-symbols-outlined">
                            heart_plus
                        </span></button>
                        <button className='btn btn-dark'>Add to Cart</button>
                    </div>
                    )
                   }
                </Carousel>;
               </div>
                
                <div className="mujeres-cont">
                <h2 id="see">Productos de Mujer</h2>
                    <Carousel responsive={responsive}>
                   {
                    productosMujer.map(
                        (producto) => 
                        <div className='card'>
                        <img className='product--image' src={producto.imagen} alt="" />
                        <h3>{producto.nombre}</h3>
                        <h4>${producto.precio}</h4>
                        <button className='btn btn-danger'><span class="material-symbols-outlined">
                            heart_plus
                        </span></button>
                        <button className='btn btn-dark'>Add to Cart</button>
                    </div>
                    )
                   }
                </Carousel>;
                </div>

                   
                   

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
                        <p>Lorem, ipsum dolor sit ibus noe aliquid id</p>
                        <a href="" className="btn btn-dark">Read More</a>
                    </div>
                    <div className="blog">
                        <img src="https://ah-theme.com/gstore/preview/img/blog3.jpg" alt="" />
                        <h4>Second Blog</h4>
                        <p>Lorem, ipsum dolor sit ibus nobindae libero d</p>
                        <a href="" className="btn btn-dark">Read More</a>
                    </div>
                    <div className="blog">
                        <img src="https://ah-theme.com/gstore/preview/img/blog.jpg" alt="" />
                        <h4>Third Blog</h4>
                        <p>Lorem, ipsum dolor bero iste aliquid id</p>
                        <a href="" className="btn btn-dark">Read More</a>
                    </div>
                </div>
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
            <footer>
                <div>
                    <h4>About The Store</h4>
                    <img src="https://www.pngmart.com/files/12/Golden-Line-PNG-Photo.png" alt="" /><br />
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br /> Incidunt numquam dolores <br /> sed earum placeat voluptas ducimus reiciendis inventore? <br /> Labore doloremque at aspernatur! Hic sapiente culpa <br /> deleniti natus veritatis recusandae rerum!
                </div>
                <div>
                    <h4>Help And Contact</h4>
                    <img src="https://www.pngmart.com/files/12/Golden-Line-PNG-Photo.png" alt="" /><br />
                    <a href="">How It Works</a>
                    <a href="">How to Buy</a>
                    <a href="">About our return policy</a>
                </div>
                <div>
                    <h4>Payment Methods</h4>
                    <img src="https://www.pngmart.com/files/12/Golden-Line-PNG-Photo.png" alt="" /><br />
                    <img src="https://img2.freepng.es/20180622/osu/kisspng-visa-credit-card-payment-bank-chinese-visa-application-5b2cde66cbcad1.7478730715296671748348.jpg" alt="" />
                    <img src="https://cdn-icons-png.flaticon.com/512/39/39022.png" alt="" />
                    <img src="https://w7.pngwing.com/pngs/816/411/png-transparent-mastercard-visa-credit-card-american-express-debit-card-mastercard-text-logo-payment-thumbnail.png" alt="" />
                </div>
            </footer>
            <div className="sub-footer">
                <div><p>© GSTORE, 2020. All Rights Reserved.</p></div>
                <div>
                    <a href=""><img src="img/logoFacebook.png" alt="" /></a>
                    <a href=""><img src="img/logoInstagram.png" alt="" /></a>
                    <a href=""><img src="img/logoTwitter.png" alt="" /></a>
                </div>
            </div>
        </div>
    )
}

export default Indice
