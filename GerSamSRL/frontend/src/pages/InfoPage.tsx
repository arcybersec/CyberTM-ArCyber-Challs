import { ArrowDown } from "lucide-react";
import BasicLayout from "../layouts/BasicLayout";

function InfoPage(){
    return(<>
        <BasicLayout>
            <div className="w-full h-full flex flex-col items-center justify-center p-10 pt-32">

                <div className="w-full flex md:flex-row p-28 flex-col animate-fade-up animate-duration-[600ms]">
                    <div className="w-[70%] flex flex-col items-center justify-center mr-20">
                        <h1 className="text-5xl font-black text-center">"Where quality meets reliability, and every journey begins with confidence!"</h1>
                        <p className="mt-32 text-center w-64 text-4xl">- Batman</p>
                    </div>
                    <div className="w-[50%]">
                        <img className="h-[40rem] rounded-lg" src={"https://upload.wikimedia.org/wikipedia/commons/0/05/Batmobile_from_Tim_Burton%27s_1989_%27Batman%27%28Ank_Kumar%29_01.jpg"}/>
                    </div>
                </div>

               

                <div className="w-full flex md:flex-row p-28 flex-col">
                    <div className="w-[80%] mr-20">
                        <img className="h-[30rem] rounded-lg" src={"https://as1.ftcdn.net/v2/jpg/04/21/05/42/1000_F_421054210_ogxs27bQpZDMoumMT0nLsDniIbWvS157.jpg"}/>
                    </div>
                    <div className="w-[100%] flex flex-col items-center justify-center">
                    <p className="text-center text-3xl font-light">
                    What really sets us apart is our steadfast commitment to customer satisfaction. Our friendly and knowledgeable staff are here to guide you through every step of the car buying process, offering personalized support and expert advice throughout. Whether you're a first-time car buyer or a seasoned car enthusiast, we'll work tirelessly to find the perfect vehicle to meet your needs.


                    </p>
                    </div>
                </div>

                <div className="p-36 text-3xl font-light">
                    <div className="divider divider-accent"><ArrowDown size={64} className="text-primary"/></div>
                    <p className="mb-10 mt-10 text-center">
                    And our commitment doesn't stop with the sale. With a state-of-the-art service center staffed with skilled technicians, GerSam Automotive is your trusted partner for all your auto maintenance and repair needs. From regular oil changes to major engine overhauls, you can count on us to keep your car running smoothly for years.
                    </p>
                    <div className="divider divider-primary"><ArrowDown size={64}/></div>
                    <p className="mt-10 text-center">
                    But don't just take our word for it. Join the GerSam Automotive family and experience the difference for yourself. Discover why many customers have chosen us as their preferred automotive destination and why GerSam Automotive is not just a simple car sales agency - it is a promise of excellence.
                    </p>
                </div>

                <h1 className="text-5xl font-black">Clients Reviews</h1>

                <div className="w-[80vw] h-auto grid grid-cols-3 pt-36 mb-20 space-y-6">

                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src="https://lh3.googleusercontent.com/proxy/VblEobOMeUqDn0lD0VPcKfBpa1g7H3i3ZQprmlqjxGuVqYmSAW9YEH6I_noV3tgtvXz6ElR_2T485MfYfRr-KNuX_4m283H5KTJU8tYYxFE1sk8cBxpfvVca4VqIjwl2wP4QlevRb5wn1ewNHNJ8Zkx48-A2kvM" alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Haxxor20</h2>
                                <p>Meow   Purr Meow Purr   Meow Purr Meow Meow   /   Purr Purr Purr Purr   Purr Meow   Purr Meow Purr   Meow Purr Purr   Purr   Purr Meow Purr</p>
                            </div>
                    </div>

                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src="https://i.kym-cdn.com/entries/icons/original/000/021/807/ig9OoyenpxqdCQyABmOQBZDI0duHk2QZZmWg2Hxd4ro.jpg" alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Elliot Alderson</h2>
                                <p>Thanks to GS, my car's odometer is now a hacker's dream - apparently, it's been to the future and back! Who needs a DeLorean when you've got a GS Auto special? #MileageMystery #TimeTravelerCar 🚗💻 </p>
                            </div>
                    </div>

                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src="https://facts.net/wp-content/uploads/2023/09/18-facts-about-spike-spiegel-cowboy-bebop-1693698279.jpg" alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Spike</h2>
                                <p>GS Auto's car: a no-frills ride fit for a space cowboy. While lacking in galactic gadgets (or a proper engine), it's a reliable steed for traversing the cosmic highways. Ideal for those seeking a practical, no-nonsense journey through the stars.</p>
                            </div>
                    </div>         

                </div>

             

                <div className="stats shadow">
  
                 <div className="stat place-items-center">
                   <div className="stat-title">Masini</div>
                   <div className="stat-value">31K</div>
                   <div className="stat-desc">Din 1 Ianuraie pana in 1 Februarie</div>
                 </div>
                
                 <div className="stat place-items-center">
                   <div className="stat-title">Soferi Multumiti</div>
                   <div className="stat-value text-primary">4,200</div>
                   <div className="stat-desc">↗︎ 40 (2%)</div>
                 </div>
                
                 <div className="stat place-items-center">
                   <div className="stat-title">Colaboratori</div>
                   <div className="stat-value">1,200</div>
                   <div className="stat-desc">↘︎ 90 (14%)</div>
                 </div>
                
                </div>
                
            </div>

        </BasicLayout>
    </>)
}

export default InfoPage;