import HeaderBox from '@/components/ui/HeaderBox';
import RightSidebar from '@/components/ui/RightSidebar';
import TotalBalanceBox from '@/components/ui/TotalBalanceBox';
import React from 'react'

const Home = () => {
  const loggedIn = { firstName: "User", lastName: "Demo", email: "userdemo@example.com" }

  return (
    <section className="home">
      <div className="home-content">
        <header className='home-header'>
          {/* START: HeaderBox */}
          <HeaderBox 
          type="greeting"
          title="Welcome"
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
        </header>
        recent transaction
      </div>
      <RightSidebar
        user={loggedIn}
        transactions={[]}
        banks={[{ currentBalance: 12400.89, mask: 1234 }, { currentBalance: 25750 , mask: 5678}]}
      />
    </section>
  )
}

export default Home;