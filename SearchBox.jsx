import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

export default function SearchBox() {

    const [cityName, setCityName] = useState("");

    // const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    // // ?q={city name}&appid={API key}
    // const API_KEY = "2e8029b62c8545ce06ade3e183c93224";
    // let url = `${API_URL}?q=${cityName}&appid=${API_KEY}`

    const SERVER_URL = "http://localhost:8080/api/v1/users";
    const API_KEY = "superSecretWeatherWidget";


    const getWeatherInfo = async () => {
        const resp = await fetch(`${SERVER_URL}?apiKey=${API_KEY}`)
        const data = await resp.json();
        console.log(data)
    }

    const handleInput = (e) => {
        setCityName(e.target.value)
    }

    const handleBtn = (e) => {
        e.preventDefault();
        console.log(cityName)
        getWeatherInfo();
        setCityName("");
    }

    return (
        <>
            <form action='' onSubmit={handleBtn}>
                <div>
                    <TextField id="outlined-basic" label="Search City" type='text' variant="outlined" value={cityName} onChange={handleInput} required />
                </div> <br /><br />
                <div>
                    <Button variant="contained" color='success' type="submit">Search</Button>
                </div>
            </form>
        </>
    )
}
