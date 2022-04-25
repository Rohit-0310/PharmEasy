import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

class DemoCarousel extends Component {
    render() {
        return (
            <Carousel>
                <div>
                    <img src="https://cms-contents.pharmeasy.in/banner/a793b04cdfc-grand25_patna_express.jpg?dim=1440x0&dpr=1&q=100" alt="img-1" />
                </div>
                <div>
                    <img src="https://cms-contents.pharmeasy.in/banner/6d06c3a5178-GETCSH.jpg?dim=1440x0&dpr=1.25&q=100" alt="img-1" />
                </div>
                <div>
                    <img src="https://cms-contents.pharmeasy.in/banner/3c6703d82c9-WEBPAGE_deal20.jpg?dim=1440x0&dpr=1&q=100" alt="img-1" />
                </div>
                <div>
                    <img src="https://cms-contents.pharmeasy.in/banner/5e1d2deebb1-Dweb.jpg?dim=1440x0&dpr=1&q=100" alt="img-1" />
                    
                </div>
                <div>
                    <img src="https://cms-contents.pharmeasy.in/banner/85955054ec0-Surgicare_Dweb_1.jpg?dim=1440x0&dpr=1&q=100" alt="img-1" /> 
                </div>
                <div>
                    <img src="https://cms-contents.pharmeasy.in/banner/1da067cc5fa-WP.jpg?dim=1440x0&dpr=1&q=100" alt="img-1" /> 
                </div>
                <div>
                    <img src="https://cms-contents.pharmeasy.in/banner/7400d70904b-DWEB.jpg?dim=1440x0&dpr=1&q=100" alt="img-1" /> 
                </div>
            </Carousel>
        );
    }
};

// ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'));


export default DemoCarousel