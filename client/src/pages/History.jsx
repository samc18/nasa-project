import { useMemo } from 'react'

function History(props) {
    const tableBody = useMemo(() => {
        return props.launches.filter((launch) => !launch.upcoming)
            .map((launch) => {
                return <tr key={String(launch.flightNumber)}>
                    <td>
                        <span className="history__failed" style={{ color: launch.success ? "greenyellow" : "red" }}>█</span>
                    </td>
                    <td>{launch.flightNumber}</td>
                    <td>{new Date(launch.launchDate).toDateString()}</td>
                    <td>{launch.mission}</td>
                    <td>{launch.rocket}</td>
                    <td>{launch.customer?.join(",")}</td>
                </tr>
            })
    }, [props.launches])

    return (
        <div className="history">
            <div className="history__description">
                <p>History of mission launches including SpaceX launches starting from the year 2006.</p>
            </div>
            <table className="history__table">
                <thead>
                    <tr>
                        <th></th>
                        <th>No.</th>
                        <th>Date</th>
                        <th>Mission</th>
                        <th>Rocket</th>
                        <th>Customers</th>
                    </tr>
                </thead>
                <tbody>
                    {tableBody}
                </tbody>
            </table>
        </div>
    )
}

export default History