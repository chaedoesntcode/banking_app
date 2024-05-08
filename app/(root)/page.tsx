import HeaderBox from '@/components/ui/HeaderBox';
import TotalBalanceBox from '@/components/ui/TotalBalanceBox';
import React from 'react'

const Home = () => {
  const loggedIn = { firstName: "User" }

  return (
    <section className="home">
      <div className="home-content">
        {/* START: HeaderBox */}
        <HeaderBox 
          type="greeting"
          title="Welcome,"
          user={loggedIn?.firstName || 'Guest'}
          subtext="Access and manage your account and transactions efficiently."
        />
        {/* END: HeaderBox */}
        {/* START: TotalBalanceBox */}
        <TotalBalanceBox 
          accounts={[]}
          totalBanks={1}
          totalCurrentBalance={1240.35}
        />
        {/* END: TotalBalanceBox */}
      </div>
    </section>
  )
}

export default Home;