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
            {cars.map((car) => (
                <div key={car._id}>
                    <h3>{car.name}</h3>
                    <p>{car.make}</p>
                    <p>{car.model}</p>
                    <p>{car.year}</p>

                </div>
            ))}

        </div>
    )
}

export default ShowAllCars;