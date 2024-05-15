import { useEffect, useState } from "react"
import CenterLayout from "../layouts/CenterLayout"
import { useParams } from "react-router-dom"
import { Mail, Map, Phone } from "lucide-react";
import { CarCardProps } from "../components/CarCard";

interface CarPageData extends CarCardProps{
    ownerEmail: string,
    ownerPhone: string,
    ownerCity: string
    transmission: string,
    fuelType: string,
    cylinderCapacity: number,
    flag: string,
    kilometers: number,
}


const CarPage: React.FC = () => {

    const { id } = useParams<{id:string}>();

    const [carPageData, setCarPagedata] = useState<CarPageData>();
        

    useEffect(() => {
        if(id){
        fetch(`http://127.0.0.1:5000/api/cardata/${id}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {setCarPagedata(data);})
            .catch(error => console.error('Error fetching data:', error));
        }
    }, []);
    

    return(<>
      
        <CenterLayout>
            {
            carPageData ? 
            (
            <div className="w-[60%] h-auto p-10 bg-black bg-opacity-20 rounded-md flex flex-row items-center justify-start">
                <img className="w-[80%] h-[100%] rounded-md mr-7 " src={carPageData.photo}></img>
                <div className="w-full flex flex-col items-start justify-start">
                    <h1 className="text-5xl mb-10">{carPageData.title}</h1>
                    <p>
                    {carPageData.description}
                    </p>
                    <div className="divider"/>
                    <p className="mb-2 text-xl font-bold">Km: {carPageData.kilometers}</p>
                    <p className="mb-2 text-xl font-bold">Transimission: {carPageData.transmission}</p>
                    <p className="mb-2 text-xl font-bold">Fuel: {carPageData.fuelType}</p>
                    <p className="mb-2 text-xl font-bold">Capacity: {carPageData.cylinderCapacity}</p>
                    <p className="mb-2 text-xl font-bold text-primary">$ {carPageData.kilometers * 1.25}</p>
                    
                    <div className="divider"/>
                    <h1 className="text-xl font-bold mb-5">About Owner:</h1>
                    <div className="space-x-7">
                        <button className="btn bg-primary text-secondary" onClick={()=>alert("Acest feature nu a fost implementat inca!")}><Mail/>Email </button>
                        <button className="btn bg-accent text-secondary" onClick={()=>alert("Acest feature nu a fost implementat inca!")}><Phone/>Phone </button>
                        <button className="btn bg-primary text-secondary" onClick={()=>alert("Acest feature nu a fost implementat inca!")}><Map/>Address </button>
                    </div>

                </div>
            </div>
            )
            :
            (<></>)
            }
        </CenterLayout>
    </>)
}

export default CarPage