import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState();

    useEffect(() => {
        fetch('https://hidden-oasis-55888.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);
    console.log(services)
    return (
        <div id="services">
            <h1>Our Services</h1>
            <div className="service-container">
                {
                    services?.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;