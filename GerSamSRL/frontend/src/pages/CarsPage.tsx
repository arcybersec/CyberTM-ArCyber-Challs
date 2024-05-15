import { useEffect, useState } from "react";
import CarCard, { CarCardProps } from "../components/CarCard";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function CarsPage(){

    const [carCards, setCarCards] = useState<CarCardProps[]>([]);

    useEffect(() => {
        fetch("http://127.0.0.1:5000/api/carddata")
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {setCarCards(data);})
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return(<>
    <Navbar/>
            <div className="w-[100vw] h-[100vh] flex flex-col items-center " >
                <div className="w-[80vw] h-auto grid grid-cols-3 pt-36">
                    {
                        carCards.map((e) => (
                            <CarCard color={e.color} description={e.description} id={e.id} key={e.id} kilometers={e.kilometers} newStatus={e.newStatus} title={e.title} photo={e.photo}/>
                        ))
                    }

                </div>
                <Footer/>
            </div>
            
    </>)
}

export default CarsPage;