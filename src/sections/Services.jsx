import React from 'react';
import { services } from '../constants';
// import { truckFast } from '../assets/icons';
import ServiceCard from '../components/ServiceCard';


const Services = () => {
  return (
    <section className='max-container flex justify-center flex-wrap gap-9 '>
      {services.map((service)=>(
        <div key={service.label}>
          <ServiceCard {...service}/>
        </div>
      ))}
    </section>
  )
}

export default Services
