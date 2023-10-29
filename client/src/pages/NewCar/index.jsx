import axios from 'axios';
import { useState } from 'react'

const NewCar = ({ setCars }) => {

    const [carData, setCarData] = useState({
        name: "",
        make: "",
        model: "",
        year: ""
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCarData((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(carData);
        try {
            const response = await axios({
                method: "POST",
                url: "/server/cars",
                data: carData
            });
            console.log(response);
            setCars((cars) => {
                return [...cars, response.data]
            });
        } catch (e) {
            console.error(e)
            console.log("error submitting data to server");
        }
        setCarData({
            name: "",
            make: "",
            model: "",
            year: ""
        })
    };

    return (
        <div>
            <h1>New Car</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    name="name"
                    value={carData.name}
                    onChange={handleInputChange} />
                <br />
                <label htmlFor="name">Make</label>
                <input
                    type="text"
                    name="make"
                    value={carData.make}
                    onChange={handleInputChange} />
                <br />
                <label htmlFor="name">Model</label>
                <input
                    type="text"
                    name="model"
                    value={carData.model}
                    onChange={handleInputChange} />
                <br />
                <label htmlFor="name">Year</label>
                <input
                    type="text"
                    name="year"
                    value={carData.year}
                    onChange={handleInputChange} />
                <br />
                <button type="submit">Register Car</button>
            </form>
        </div>
    )
}

export default NewCar;