import React from 'react'
import Header from './Header'
import Footer from './Footer'

const AppLayout = ({children}) => {
  return (
    <div className='appLayout' style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <main style={{ flex: 1 }}>
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default AppLayout
