import React, { useEffect, useState } from 'react'
import './Statewise.css';

const Statewise = () => {

    const [data, setData] = useState([]);

    const getCovidData = async () => {
        //this function will run after render executed bcoz it is called in useEffect()

        //here we fetch the api 
        const res = await fetch('https://api.covid19india.org/data.json');
        //here we convert that api into json objects
        const actualData = await res.json();
        //here we set the data to the DOM
        setData(actualData.statewise);


        console.log(actualData.statewise);
    }


    useEffect(() => {
        getCovidData();
    }, [])

    return (
        <>
          <div className="container mt-5">
            <div className="main-heading">
                <h1 className="mb-5 text-center"><span className="font-weight-bold text-danger">INDIA</span> COVID-19 CASES</h1>
            </div>

            <div className="table-responsive">
                <table className="table table-hover">
                    <thead className="thead-dark">
                        <tr>
                            <th> State </th>
                            <th> Confirmed </th>
                            <th> Recovered </th>
                            <th> Deaths </th>
                            <th> Active </th>
                            <th> Updated </th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            data.map((currElem, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{currElem.state}</td>
                                        <td className="green">{currElem.confirmed}</td>
                                        <td className="green">{currElem.recovered}</td>
                                        <td className="red">{currElem.deaths}</td>
                                        <td className="green">{currElem.active}</td>
                                        <td className="green">{currElem.lastupdatedtime}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
          </div>
        </>
    )
}


export default Statewise;