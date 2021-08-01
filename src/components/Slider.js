import React from 'react';
import banner from '../images/banner.jpg';

const Slider = () => {
    return (
        <>
            <div className="m-4">
                <div className="row d-flex flex-wrap">
                    <div className="col-lg-6 col-md-6 col-12">
                        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img className="d-block w-100" src={banner} alt="First slide" />
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src={banner} alt="Second slide" />
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src={banner} alt="Third slide" />
                                </div>
                            </div>
                            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>

                    </div>
                    <div className="col-lg-6 col-md-6 col-12">
                        <ul className="list-group">
                            <li className="list-group-item m-2">House Cleaning & Shifting</li>
                            <li className="list-group-item m-2">Office Cleaning & Shifting</li>
                            <li className="list-group-item m-2">Chendeliers Cleaning & fiting</li>
                            <li className="list-group-item m-2">Car Cleaningc</li>
                            <li className="list-group-item m-2">HouseKeeping Contract</li>
                        </ul>

                    </div>
                </div>

            </div>
        </>
    )
}

export default Slider
