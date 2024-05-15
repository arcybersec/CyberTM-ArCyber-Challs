interface CardProps {
    title: string;
    description: string;
}

export const Card: React.FC<CardProps> = ({ title }) => {
    return (
        <div className="card card-compact w-96 h-48 bg-white shadow-xl flex justify-center">

        
            <img 
                src="https://www.carsized.com/resources/bmw/3/d/2018/sl_245106151_bmw-3-2018-side-view_4x.png" 
                alt="car" 
                className="absolute"
            /> 

            <div className="card-body z-10">
                <p className="text-black justify-start text-left font-bold text-2xl">{title}</p>

                <p className="text-black justify-start text-left text-lg mt-[-80px]">2024</p>

                
                <div className="card-actions justify-end">
                    <button className="btn btn-sm btn-primary h-8 w-28 opacity-95">
                        <p className="text-white flex flex-row justify-center items-center gap-x-2">
                            Inquire
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                        </p>
                    </button>
                </div>
            </div>
        </div>
    );
};
