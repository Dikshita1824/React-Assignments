import "./Card.css"
import Price from "./Price"
import Laptop from "./assets/1.png"
import Mobile from "./assets/2.2.png"
import Ps5 from "./assets/3.1.png"
import Fitbit from "./assets/4.1.png"




export default function Card({title,idx}){
    let im = [Laptop,Mobile,Ps5,Fitbit]

    let decp1 = ["Best Laptop in the world", "Best Mobile in the world", "Best Ps5 in the world", "Best Fitbit in the world "]
    let decp2 =["With Amazing Features","With amazing camera","With Amazing Games","With Amazing Technology"]

     let old=["80000","50000","40000","150000"]
     let neww=["70000","40000","30000","10000"]


    return <div className="card">
        <h2>{title}</h2>
        <img src={im[idx]} ></img>
        <p> {decp1[idx]}</p>
        <p> {decp2[idx]}</p>
       
        <Price oldp={old[idx]} newwp={neww[idx]}/>
    </div>
}