import React from 'react'

function Footer() {

    const footerArray = [
        { title: "Support", value: ["Help Centre", "AirCover", "Supporting people with disabilities", "Cancellation options", "Our COVID-19 Response", "Report a neighbourhood concern"]}, 
        {title: "Community", value: ["Airbnb.org: disaster relief housing", "Combating discrimination"]},
        {title:"Hosting", value: ["Airbnb your home", "AirCover for Hosts", "Explore Hosting resource", "Visit our comunity forum", "How to host responsibly"]},
        {title:"Airbnb" ,value: ["Newsroom", "Learn about new features", "Letter from our founders", "Careers", "Investors", "Gift cards"]}
    ];

  return(
    <div className='grid grid-cols-1 md:grid-cols-4 gap-x-3 space-y-10 px-32 py-14 bg-gray-100 text-gray-600'>
       {
        footerArray.map(({title, value, index}) => (
            <div key={index} className='space-y-4 text-xs text-gray-800' style={{"marginTop": "0px"}}>
                <h5 key={title.toString()} className='font-bold'>{title}</h5>
                {value.map((values) => (
                    <p key={values.toString()}>{values}</p>
                ) )}
            </div>
        ))
       }
    </div>);
}

export default Footer;