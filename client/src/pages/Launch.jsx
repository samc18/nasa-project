import { useMemo } from 'react'

function Launch(props) {
    const selectorBody = useMemo(() => {
        return props.planets.map(planet => {
            return <option value={planet.keplerName} key={planet.keplerName}>{planet.keplerName}</option>
        })
    }, [props.planets])
    const today = new Date().toISOString().split("T")[0]

    return (
        <div className="launch">
            <div className="launch__description">
                <p>Schedule a mission launch for interstellar travel to one of the Kepler Exoplanets.</p>
                <p>Only confirmed planets matching the following criteria are available for the earliest scheduled missions:</p>
                <ul>
                    <li>Planetary radius &lt; 1.6 times Earth's radius</li>
                    <li>Effective stellar flux &gt; 0.36 times Earth's value and &lt; 1.11 times Earth's value</li>
                </ul>
            </div>
            <form onSubmit={props.submitLaunch} className="launch__form">
                <label htmlFor="launch-day">Launch Date</label>
                <input type="date" id="launch-day" name="launch-day" min={today} max="2040-12-31" defaultValue={today} />
                <label htmlFor="mission-name">Mission Name</label>
                <input type="text" id="mission-name" name="mission-name" />
                <label htmlFor="rocket-name">Rocket Type</label>
                <input type="text" id="rocket-name" name="rocket-name" defaultValue="Explorer IS1" />
                <label htmlFor="planets-selector">Destination Exoplanet</label>
                <select id="planets-selector" name="planets-selector">
                    {selectorBody}
                </select>
                <button>Launch Mission ✔</button>
            </form>
        </div>
    )
}

export default Launch