import {Typography} from "@mui/material";
import {Link, useLocation, useNavigate} from "react-router-dom";
import { getData } from "../../config/firebase/firebasemethods";
import { Bar } from "react-chartjs-2";
import Barchart from "../../component/barchart";





function News(){




return <>
<div className="">



    <div className="row mt-4">

   <Barchart  />
       
    </div>
   
   
</div>
 


</>
}

export default News;