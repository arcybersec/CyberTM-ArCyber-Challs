import CenterLayout from "../layouts/CenterLayout"

function FlagPage(){
    return(
    <CenterLayout>
        <div className="w-full h-full flex flex-col items-center justify-center">
            <img src={"https://media0.giphy.com/media/JIX9t2j0ZTN9S/200w.gif?cid=6c09b952lyhp4i94osrayvi4opaxkfef25d6erlc8kml7ysx&ep=v1_gifs_search&rid=200w.gif&ct=g"} 
            width={400} height={400}/>
            <h1 className="text-8xl mt-20">Try Harder!</h1>
        </div>
    </CenterLayout>);  
}

export default FlagPage