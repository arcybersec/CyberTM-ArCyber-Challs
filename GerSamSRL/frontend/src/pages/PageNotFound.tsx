import { Frown } from "lucide-react";
import CenterLayout from "../layouts/CenterLayout";

function PageNotFound(){
    return(<>
        <CenterLayout>
            <h1 className="text-8xl">404 Page Not Found</h1>
            <Frown size={128} className="ml-16"/>
        </CenterLayout>
    </>)
}

export default PageNotFound;