const API_KEY = 'ZSRB-5H6V-9D2T-DWE9'

const API = {
	getStations: () => 
		fetch(`http://api.bart.gov/api/stn.aspx?cmd=stns&key=${API_KEY}&json=y`)
			.then(response => response.json())
			.then(data => data.root.stations.station.map(station => ({
				id: station.abbr,
				name: station.name,
			}))),
	getRoutes: () => 
		fetch(`http://api.bart.gov/api/route.aspx?cmd=routeinfo&route=all&key=${API_KEY}&json=y`)
			.then(response => response.json())
			.then(data => data.root.routes.route.map(route => ({
				id: route.routeID,
				name: route.name,
				direction: route.direction,
				stations: route.config.station,
			}))),
	getSchedule: (stationAbbr) => 
		fetch(`http://api.bart.gov/api/sched.aspx?cmd=stnsched&orig=${stationAbbr}&key=${API_KEY}&l=1&json=y`)
			.then(response => response.json())
			.then(data => data.root.station.item.map(item => ({
				route: item['@line'],
				time: item['@origTime'],
			}))),
	getFare: (originStationAbbr, destStationAbbr) =>
		fetch(`http://api.bart.gov/api/sched.aspx?cmd=fare&orig=${originStationAbbr}&dest=${destStationAbbr}&date=today&key=${API_KEY}&json=y`)
		.then(response => response.json())
		.then(data => ({fare:data.root.trip.fare}))
}
export default API