import Header from '@/components/Header'
import Footer from '@/components/Footer'
import React from 'react'

function Search() {
  return (
    <div>
        <Header />
        <main className='flex'>
            <section>
                <p className='text-xs'>200+ stays for 5 number of guests</p>
            </section>
        </main>
        <Footer />
    </div>
  )
}

export default Search