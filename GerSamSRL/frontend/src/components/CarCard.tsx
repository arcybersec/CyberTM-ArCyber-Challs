import { Link } from "react-router-dom";

export interface CarCardProps{
    id: string,
    title: string, 
    photo: string,
    newStatus: boolean,
    description: string,
    kilometers: number,
    color: string,
}

const CarCard:React.FC<CarCardProps> = ({id, photo, title, newStatus, description, kilometers, color}) => {
    return(<>
        <div className="card w-96 bg-base-100 shadow-xl mt-10 ml-10 mb-10 animate-jump">
  <figure><img src={photo} /></figure>
  <div className="card-body">
    <h2 className="card-title">
      {title}
      <div className={`badge badge-primary ${newStatus ? "visible" : "hidden"}`}>NEW</div>
    </h2>
    <p>{description}</p>
    <div className="card-actions justify-between">
      <h1 className="font-bold">$ {kilometers * 1.25}</h1>
      <div>
      <div className={`badge badge-outline mr-2 badge-primary ${kilometers ? "visible" : "hidden"}`}>{kilometers + " km"}</div> 
      <div className={`badge badge-outline ml-2 ${kilometers ? "visible" : "hidden"}`}>{"Color: " + color}</div>
      </div>
    </div>
    <Link to={`/cars/${id}`} className="btn btn-accent">
      View Car
    </Link>
  </div>
</div>
    </>)
}


export default CarCard;
