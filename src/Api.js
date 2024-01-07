import React,{useState,useEffect} from "react"
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


function Api(){
const [city, setCity] = useState(null);
    const [search] = useState("Mumbai");

    useEffect( () =>{
        const fetchApi = async () => {
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=f02e36cac6ab695fffd17c43bc4c6e5a`;
            const response = await fetch(url);
            const resJson = await response.json();
            setCity(resJson.main)
        }

        fetchApi();
},[search])

const d = new Date();
const day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return(

    <div className="row">
        <div className="col-12 card bgProject">
            {!city ?(
               <p>No data found</p>
               ): (
                   <p>Temperature:{city.temp} C</p>
                   )
            }
            Date:
            {d.getDate()}-
            {d.getMonth()+1}-
            {d.getFullYear()}<br/>
            {day[d.getDay()]}
        </div>
    </div>

    )
}

export default Api;
