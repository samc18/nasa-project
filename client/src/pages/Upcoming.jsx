import { useMemo } from 'react'

function Upcoming(props) {
    const { launches, abortLaunch } = props
    const tableBody = useMemo(() => {
        return launches?.filter((launch) => launch.upcoming)
            .map((launch) => {
                return <tr key={String(launch.flightNumber)}>
                    <td><button className="upcoming__btn" onClick={() => abortLaunch(launch.flightNumber)}>✖</button></td>
                    <td>{launch.flightNumber}</td>
                    <td>{new Date(launch.launchDate).toDateString()}</td>
                    <td>{launch.mission}</td>
                    <td>{launch.rocket}</td>
                    <td>{launch.target}</td>
                </tr>
            })
    }, [launches, abortLaunch])

    return (
        <div className="upcoming">
            <div className="upcoming__description">
                <p>Upcoming missions including both SpaceX launches and newly scheduled Zero to Mastery rockets.</p>
                <p>Warning! Clicking on the ✖ aborts the mission.</p>
            </div>
            <table className="upcoming__table">
                <thead>
                    <tr>
                        <th></th>
                        <th>No.</th>
                        <th>Date</th>
                        <th>Mission</th>
                        <th>Rocket</th>
                        <th>Destination</th>
                    </tr>
                </thead>
                <tbody>
                    {tableBody}
                </tbody>
            </table>
        </div>
    )
}

export default Upcoming