import React, { useState, useEffect } from "react";
import "./index.css";
import logo from "../logo.svg";


export default function Index() {
    const [count, setCount] = useState(0);
    const [data, setData] = useState([]);
    const [speed, setSpeed] = useState('10');
    const [color, setColor] = useState();

    //dijalankan 1 kali
   
   
   
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setData(data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);


    //dijalankan terus setiap ada perubahan count
    useEffect(() => {
        if (count > 0) {
            alert('component will update & count ${count}');
        }
    }, [count]);


    //dijalankan terus menerus
    useEffect(() => {
        console.log('spam console kuy');
    });
    const countUp = () => {
        setCount(count + 1);
    };
    const countDown = () => {
        setCount(count - 1);
    };

    const changeSpeed = event => {
        setSpeed(event.target.value);
    };

    //dijalankan kalau speed berubah
    useEffect(() => {
        if (speed<6) {
            setColor('red')
        }
        else {
            setColor('blue')
        }
    },[speed]);

    return (
        <div className="Main">
            <p className="Text"> Learn useEffect</p>
            <p>KELOMPOK10</p>



            <div className="ViewImage1">
                    <img className="App-logo"
                        style={{
                            //display: "none",
                            animation: `App-logo-spin infinite ${speed}s linear`,
                            marginLeft:'150px',
                            width: '150px',
                            height: '150px',
                            objectfit: 'cover',
                            objectposition: '100% 0%',
                            backgroundColor: `${color}`
                        }}
                        src={logo}
                        alt="logo" />
                        <br/>
                        <br/>
                        <form className="changeSpeed">
                            <input className="inputSpeed"  type="text" name="accel" border="green" placeholder=".." onChange={changeSpeed} value={speed}/> detik/putaran
                        </form>
            </div>

            <br/>
            <ul>
                {data.slice(0, 10).map((value) => (
                    <li key={value.id}>{value.title}</li>
                ))}
            </ul>
            <p className="Text">{count}</p>
            <div className="ViewButton">
                <div className="ViewButton2">
                    <button className="Button"
                        onClick={countUp}>
                        Up
                    </button>
                </div>
                <div className="ViewButton1">
                    <button className="Button"
                        onClick={countDown}>
                        Down
                    </button>
                </div>
            </div>
        </div>
    );
}
