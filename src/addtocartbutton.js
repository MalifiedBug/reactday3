import {useState} from 'react'


export default function Addtocart(){

    const [carttotal, setCarttotal] = useState(0)
    const [butt, setButt] = useState(true)

    return(
        <div>

<div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#!" onClick={()=>{
    if(butt){setCarttotal(carttotal+1)}
    else{setCarttotal(carttotal-1)};
    setButt(!butt)}}> {butt? "Add to Cart" : "Remove from Cart"}</a></div>

        </div>
    )
}