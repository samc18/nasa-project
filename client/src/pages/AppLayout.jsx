import { Routes, Route } from 'react-router-dom'

import useLaunches from '../hooks/useLaunches'
import usePlanets from '../hooks/usePlanets'

import Header from '../components/Header'
import Footer from '../components/Footer'

import Launch from './Launch'
import Upcoming from './Upcoming'
import History from './History'

function AppLayout() {
    const { launches, isPendingLaunch, submitLaunch, abortLaunch } = useLaunches()
    const planets = usePlanets()
    
    return (
        <div className="app-layout">
            <Header />
            <Routes>
                <Route path="/" element={
                    <Launch
                        planets={planets}
                        submitLaunch={submitLaunch}
                        isPendingLaunch={isPendingLaunch}
                    />
                } />
                <Route path="/launch" element={
                    <Launch
                        planets={planets}
                        submitLaunch={submitLaunch}
                        isPendingLaunch={isPendingLaunch}
                    />
                } />
                <Route path="/upcoming" element={
                    <Upcoming
                        launches={launches}
                        abortLaunch={abortLaunch}
                    />
                } />
                <Route path="/history" element={
                    <History launches={launches} />
                } />
            </Routes>
            <Footer />
        </div>
    )
}

export default AppLayout