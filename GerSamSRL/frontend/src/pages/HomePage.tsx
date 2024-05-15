import { CarFront, Info } from "lucide-react"
import BasicLayout from "../layouts/BasicLayout"
import { Link } from "react-router-dom"


function HomePage(){
    return(<>
        <BasicLayout>
            <div className="hero min-h-screen" style={{backgroundImage: 'url(https://upload.wikimedia.org/wikipedia/commons/6/6b/Used_car_dealership_in_Santiago%2C_Chile.jpg)'}}>
            <div className="hero-overlay bg-opacity-80"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-2xl">
                        <h1 className="mb-5 text-8xl font-bold text-secondary animate-flip-up animate-once animate-duration-[400ms]">Used Cars</h1>
                        <h1 className="mb-5 text-8xl font-bold text-secondary animate-flip-up animate-once animate-duration-[400ms]">from <span className="text-primary">Germany</span></h1>
                        <p className="mb-5 text-secondary text-2xl animate-flip-up animate-once animate-duration-[700ms]">Enjoy the highest quality cars at unbeatable prices</p>
                        <div className="flex md:flex-row flex-col w-full items-center justify-center">
                            <Link to={"/info"}>
                                <button className="btn text-accent  h-16 w-60 text-3xl md:mr-20 mt-24 animate-flip-up animate-once animate-duration-[1000ms]">Info <Info size={36}/> </button>
                            </Link>
                            <Link to={"/cars"}>
                                <button className="btn btn-primary text-white h-16 w-60 text-3xl  md:ml-20  mt-24 animate-flip-up animate-once animate-duration-[1000ms]">Cars  <CarFront size={36}/> </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </BasicLayout>
    </>)
}

export default HomePage