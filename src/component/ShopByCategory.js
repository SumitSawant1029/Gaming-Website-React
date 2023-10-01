import React  from 'react';
import Navbar from './Navbar';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './CSS/ShopByCategory.css';
import Footer from './Footer';
import { Link } from "react-router-dom";

const ShopByCategory = (props) => {
    const cardData = [
        {
            title: "Accessories",
            text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
            imageUrl: "https://scontent.fpnq13-4.fna.fbcdn.net/v/t39.30808-6/383398833_2066981816971121_6264986470075636351_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=49d041&_nc_ohc=5JE1Zk7SVx0AX8rSiRp&_nc_ht=scontent.fpnq13-4.fna&oh=00_AfC9iT2DKylpG45WWCqrCAZCI5HOScUpSLoim0DohKYMFw&oe=651D20E6"
        },
        {
            title: "Cables",
            text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
            imageUrl: "https://scontent.fpnq13-3.fna.fbcdn.net/v/t39.30808-6/383354338_2066992403636729_2627979952844574396_n.jpg?stp=dst-jpg_p526x296&_nc_cat=100&ccb=1-7&_nc_sid=49d041&_nc_ohc=BqrkGccEQ4cAX_oVF9b&_nc_ht=scontent.fpnq13-3.fna&oh=00_AfCBNbueOgfu8RtrGiOXidSa0PZDmksUfullqhxSbN8zkg&oe=651DB2B3",
        },
        {
            title: "Mouse",
            text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
            imageUrl: "https://imgs.search.brave.com/sx-QeJcj1QUSdM5Y-LCH5Y9WHCbut3jNX8h-n4iSNYA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNjM1/NzkwNjQwL3Bob3Rv/L2dhbWluZy1tb3Vz/ZS1wb3J0YWJsZS1z/cGVha2VyLWFuZC1s/YXB0b3AtYXQtbmln/aHQuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPW9MQnh6MTVR/bkZETm1PWXptUXZj/Y2oySU95dzlNQnRW/Y3ItTzBOc0xsNFU9",
        },
        {
            title: "Monitor",
            text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
            imageUrl: "https://imgs.search.brave.com/pGa_A-botjCZqq1LOECDV9Lqb6wk8iijzhxJ0SanEr8/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9iMmMt/Y29udGVudGh1Yi5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MjIvMDYvZGVsbC0z/MjIzcS0xLmpwZz9x/dWFsaXR5PTUwJnN0/cmlwPWFsbA",
        },
    ];

    const renderCards = cardData.map((card, index) => (
        <div className="col" key={index}>
            <div className="card my-3">
                <img src={card.imageUrl} className="card-img-top mx-auto my-3" style={{ width: '90%' }} alt={card.title} />
                <div className="card-body">
                    <h5 className="card-title">{card.title}</h5>
                    <p className="card-text">{card.text}</p>
                    <Link to="#" className="btn btn-primary">Go somewhere</Link>
                </div>
            </div>
        </div>
    ));
    

    return (
        <>
            <Navbar />
            <div className="d-flex justify-content-center mx-4">
            
                <div className="row row-cols-1 row-cols-md-2 g-4">
                    {renderCards}
                </div>
            
            
            </div>
            <Footer/>
        </>
    );
};

export default ShopByCategory;

