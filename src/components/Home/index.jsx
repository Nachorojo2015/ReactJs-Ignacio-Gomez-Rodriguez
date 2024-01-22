import { Item } from "../itemListContainer"
import { FaStar } from "react-icons/fa";

const Home = () => {
    return (
        <main>
            <div id="carouselExampleFade" className="carousel slide carousel-fade hidden md:inline-block">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://acdn.mitiendanube.com/stores/001/214/214/themes/idea/2-slide-1704466151572-6782118754-f6370fad9c46bcda52cb23c7888fc75e1704466166-1920-1920.webp?142212664" className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src="https://acdn.mitiendanube.com/stores/001/214/214/themes/idea/2-slide-1704469658654-4133115286-019f6b2949de34132bf08b32fcbd40a81704469669-1920-1920.webp?142212664" className="d-block w-100" alt="..."/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <img src="https://acdn.mitiendanube.com/stores/001/214/214/themes/idea/2-slide-1704470563504-3654609075-9182dfe7c9e542f9f9ca7df318e266ea1704470573-1400-1400.webp?142212664" alt="" className="md:hidden inline-block p-2"/>
            <img src="img/add1.jpg" alt="" className="md:w-[50%] md:inline w-full block" />
            <img src="img/add2.jpg" alt="" className="md:w-[50%] md:inline w-full " />
            <h2 id="see" className="text-center text-orange-500 p-5 text-[50px] font-bold">All Products</h2>
            <Item />
            <div className="mt-[100px] bg-no-repeat bg-fixed bg-cover h-[17em]" style={{ backgroundImage: 'url(https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/ropa-hombre-no-tienda-espan-a-1617640228.jpg)' }}>
                <h1 className="p-[4em] text-white text-center text-[30px] font-bold">MEGA SALE</h1>
            </div>
            <h3 className="mt-[50px] text-center text-[40px] font-bold text-orange-500">Clients Reviews</h3>
            <div className="max-w-sm md:w-[50%] mx-auto lg:max-w-full lg:flex mt-3">
                <div className="h-[400px] lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style={{ backgroundImage: "url(https://ah-theme.com/gstore/preview/img/client3.jpg)" }} title="Woman holding a mug">
                </div>
                <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                    <div className="mb-8">
                        <div className="text-gray-900 font-bold text-xl mb-2">Perry Ahmed</div>
                        <p className="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
                        <div className="flex pt-2 text-yellow-300">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                        </div>
                    </div>
                </div>
            </div>
            <div className="max-w-sm md:w-[50%] mx-auto lg:max-w-full lg:flex mt-2">
                <div className="h-[400px] lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style={{ backgroundImage: "url(https://ah-theme.com/gstore/preview/img/client2.jpg)" }} title="Woman holding a mug">
                </div>
                <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                    <div className="mb-8">
                        <div className="text-gray-900 font-bold text-xl mb-2">Roadhy Mohamed</div>
                        <p className="text-base text-[30px]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
                        <div className="flex pt-2 text-yellow-300">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                        </div>
                    </div>
                </div>
            </div>
            <div className="max-w-sm md:w-[50%] mx-auto lg:max-w-full lg:flex mt-2">
                <div className="h-[400px] lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style={{ backgroundImage: "url(https://ah-theme.com/gstore/preview/img/client1.jpg)" }} title="Woman holding a mug">
                </div>
                <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                    <div className="mb-8">
                        <div className="text-gray-900 font-bold text-xl mb-2">Ahmed Elsaid</div>
                        <p className="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
                        <div className="flex pt-2 text-yellow-300">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                        </div>
                    </div>
                </div>
            </div>
            <h3 className="text-[40px] text-center mt-[100px] font-bold">Latest News</h3>
            <div className="flex justify-center items-center mt-5 flex-wrap">
                <div className="max-w-lg mx-auto">
                    <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mb-5">
                        <a href="#">
                            <img className="rounded-t-lg" src="https://ah-theme.com/gstore/preview/img/blog2.jpg" alt="" />
                        </a>
                        <div className="p-5">
                            <a href="#">
                                <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">Noteworthy technology acquisitions 2021</h5>
                            </a>
                            <p className="font-normal text-gray-700 mb-3">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                            <a className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center" href="#">
                                Read more
                            </a>
                        </div>
                    </div>
                </div>
                <div className="max-w-lg mx-auto">
                    <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mb-5">
                        <a href="#">
                            <img className="rounded-t-lg" src="https://ah-theme.com/gstore/preview/img/blog3.jpg" alt="" />
                        </a>
                        <div className="p-5">
                            <a href="#">
                                <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">Noteworthy technology acquisitions 2021</h5>
                            </a>
                            <p className="font-normal text-gray-700 mb-3">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                            <a className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center" href="#">
                                Read more
                            </a>
                        </div>
                    </div>
                </div>
                <div className="max-w-lg mx-auto">
                    <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mb-5">
                        <a href="#">
                            <img className="rounded-t-lg" src="https://ah-theme.com/gstore/preview/img/blog.jpg" alt="" />
                        </a>
                        <div className="p-5">
                            <a href="#">
                                <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">Noteworthy technology acquisitions 2021</h5>
                            </a>
                            <p className="font-normal text-gray-700 mb-3">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                            <a className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center" href="#">
                                Read more
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export { Home }