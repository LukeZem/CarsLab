import { useEffect, useState } from 'react'
import axios from 'axios';

const ShowAllCars = ({ cars, setCars }) => {



    useEffect(() => {
        const getCars = async () => {
            // fetch cars here and set to state
            try {
                let response = await axios({
                    method: "GET",
                    url: "/server/cars"
                })
                console.log(cars);
                setCars(response.data);
            } catch (error) {
                console.error('Error fetching events:', error);
            }
        };
        getCars();
    }, [])

    return (
        <div>
            <h1>Cars List</h1>
            {cars.map((car) => {
                `<p>${car}</p>`
            })}
        </div>
    )
}

export default ShowAllCars;