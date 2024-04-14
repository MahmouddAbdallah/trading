import React, { useState } from "react";
import './style.css';
import img1 from '../../assets/services-page.jpg'
import img2 from '../../assets/services-page-2.jpg'
import img3 from '../../assets/services-page-3.jpg'
import img4 from '../../assets/services-page-4.jpg'

const ServicesSlides = () => {
    const [activeIndex, setActiveIndex] = useState(1);

    const handleMouseEnter = (index) => {
        setActiveIndex(index);
    };

    const handleMouseLeave = () => {
        if (activeIndex === null) {
            setActiveIndex(1);
        }
    };

    const cards = [
        { id: 'c1', backgroundColor: img2, icon: '1', title: 'Live trading', description: '100 TOPIC' },
        { id: 'c2', backgroundColor: img1, icon: '2', title: 'Live trading', description: '100 TOPIC' },
        { id: 'c3', backgroundColor: img3, icon: '3', title: 'Live trading', description: '100 TOPIC' },
        { id: 'c4', backgroundColor: img4, icon: '4', title: 'Live trading', description: '100 TOPIC' }
    ];

    return (
        <div className="flex flex-col lg:grid grid-cols-12 card-services px-5 py-10 rounded-xl bg-bgColor">
            <div className="flex items-center col-span-3 ">
                <div className="space-y-3">
                    <h3 className="font-Roboto font-semibold text-4xl md:text-5xl lg:text-5xl text-blueText">Services</h3>
                    <p>
                        The Academy provides three services:
                        The field of education ,Investment
                        and Financial income and achieving wealth
                    </p>
                </div>
            </div>
            <div className="py-10 col-span-9">
                <div className="h-[320px] md:h-[400px] flex flex-nowrap" onMouseLeave={handleMouseLeave}>
                    {cards.map((card, index) => (
                        <React.Fragment key={index}>
                            <input style={{ display: 'none' }} type="radio" name="slide" id={card.id} defaultChecked={activeIndex === index} />
                            <label htmlFor={card.id}
                                onMouseEnter={() => handleMouseEnter(index)}
                                className={`page-services-card rounded-md md:rounded-lg lg:rounded-xl mx-2 lg:mx-3 ${activeIndex === index && 'active'}`}
                                style={{
                                    backgroundImage: `url(${card.backgroundColor})`
                                }}
                            >
                                <div className="w-full textHeadandP text-white flex justify-between items-center px-3 md:px-5 py-5 mb-4 md:mb-8">
                                    <h4 className="font-[400] font-Roboto text-lg sm:text-xl md:text-2xl lg:text-3xl leading-[20px]">{card.title}</h4>
                                    <p className="whitespace-nowrap hidden text-xs md:text-base">{card.description}</p>
                                </div>
                            </label>
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ServicesSlides;