import React, { Component } from 'react';
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa';
import Title from './Title';

export default class Services extends Component {
    state ={
        services :[
            {
            icon: <FaCocktail />,
            title : 'Free Cocktails',
            info : 'You can enjoy our delicious and free coctails during your stay at the Spur Bar.'
        },
        {
            icon: <FaHiking />,
            title : 'Hiking Trails with a Perfect View',
            info : 'You can take your boots and hike with the perfect views of Grand Teton National Park!'
        },
        {
            icon: <FaShuttleVan />,
            title : 'Shuttle Van to the Yellowstone National Park',
            info : 'Yelowstone Shuttle Vans are on your service every hour.'
        },
        {
            icon: <FaBeer/>,
            title : 'Try the best Ginger Ale of Jackson Hole.',
            info : 'Try delicious Local Ginger Ale.(Actually its shit.)'
        }
    
    ]
    }
    render() {
        return (
            <section className='services'> 

                <Title title='services' />
                <div className='services-center'>
                    {this.state.services.map((item,index) => {
                        return <article key={index} className='service'>
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                    })}
                </div>
            </section>
        )
    }
}
