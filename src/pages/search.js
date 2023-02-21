import Header from '@/components/Header'
import Footer from '@/components/Footer'
import React from 'react'
import { useRouter } from 'next/router'
import { format } from 'date-fns';
import InfoCard from '@/components/InfoCard';
import https from 'https';

function Search({searchResults}) {

  const router = useRouter();
  const {location, startDate, endDate, guestNumber} = router.query;

  const formattedStartDate = format(new Date(startDate), "dd MMMM yy");
  const formattedEndDate = format(new Date(endDate), "dd MMMM yy");
  const range = `${formattedEndDate} - ${formattedStartDate}`;


  return (
    <div>
        <Header placeholder={`${location} | ${range} | ${guestNumber} guests`} />
        <main className='flex'>
            <section className='flex-grow pt-14 px-6'>
                <p className='text-xs'>300+ stays - {range} - for {guestNumber} guests</p>

                <h1 className='text-3xl font-semibold mt-2 mb-6'>Stays in {location}</h1>

                <div className='hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap'>
                  <p className='button-search-page' >Cancellation Flexibility</p>
                  <p className='button-search-page' >Types of Place</p>
                  <p className='button-search-page' >Price</p>
                  <p className='button-search-page' >Rooms and Beds</p>
                  <p className='button-search-page' >More filters</p>
                </div>
                <div className='flex flex-col'>
              {searchResults?.map(({img, location, title, description, star,price,total,long,lat},index) => (
              <InfoCard key={index}
               img={img}
               location={location}
               title={title}
               description={description}
               star={star}
               price={price}
               total={total}
               long={long}
               lat={lat}
               cityLocation={router.query.location} />
            ))}
            </div>
            </section>
        </main>
        <Footer />
    </div>
  )
}

export default Search

export async function getServerSideProps() {
  const searchResults = await fetch("https://links.papareact.com/isz",{
    agent: new https.Agent({ rejectUnauthorized: false })
  }).then(res => res.json());

  return{
    props: {
      searchResults,
    }
  }
}