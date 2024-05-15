import { CarFront, Info, Warehouse } from "lucide-react"
import { Link } from "react-router-dom"

function Navbar(){
    return(<>
        <div className="fixed w-full h-auto flex flex-row items-center justify-center mt-5 z-10 drop-shadow-lg">
            <div className="bg-white p-5 pl-10  rounded-full flex flex-row items-center justify-center">
                <h1 className="text-4xl font-black text-primary mr-20"><span className="text-neutral">GS</span> auto</h1>

                <Link to={"/"}>
                    <Warehouse  className="ml-5 mr-5 hover:text-primary" size={36}/>
                </Link>

               
                <Link to={"/cars"}>
                    <CarFront className="ml-5 mr-5 hover:text-primary" size={36}/>
                </Link>
                
                <Link to={"/info"}>
                    <Info  className="ml-5 mr-5 hover:text-primary" size={36}/>
                </Link>
                   

            </div>
        </div>
    </>)
}

export default Navbar