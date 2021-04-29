let modInfo = {
	name: "Universal Reconstruction",
	id: "universal-reconstruction",
	author: "Escapee",
	pointsName: "??",
	discordName: "Escapee",
	discordLink: "",
	initialStartPoints: new Decimal (0), // Used for hard resets and new players
	
	offlineLimit: 1,  // In hours
}

// Set your version in num and name
let VERSION = {
	num: "0.3.3",
	name: "Acceleration",
}

let changelog = `
	<h1>Changelog:</h1>
	<br><br>
	<h3>v0.3.3</h3>
	<br>- Merge first two Acceleron milestones
	<br><br>
	<h3>v0.3.2</h3>
	<br>- Fixed Skyrmion and Acceleron upgrades being buyable without enough points
	<br>- Added Buy All buttons and hotkeys for Skyrmion and Foam layers, and shifted around milestones to unlock them
	<br><br>
	<h3>v0.3.1</h3>
	<br>- Fixed Skyrmions and Foam not generating without Entropic Loop 2
	<br><br>
	<h3>v0.3.0 - Acceleration</h3>
	<br>- Started work on Inflatons
	<br>- Implemented first half of Accelerons
	<br>- Deflated higher Skyrmion and Foam amounts
	<br>- Minor rebalance to shift end-of-Foam to intended route
	<br><br>
	<h3>v0.2.0 - Formation</h3>
	<br>- Added Infinitesimal through Quantum Foam boosts and buyables
	<br>- Added Foam milestones
	<br>- Rebalanced Foam formation levels
	<br>- Rebalanced Pion and Spinor α and γ buyables
	<br>- Added 6 more Pion and Spinor buyables each
	<br>- Added Pion and Spinor autobuyer upgrades
	<br>- Barebones third row added - no content yet
	<br><br>
	<h3>v0.1.0 - Creation</h3>
	<br>- Added two layers, Skyrmion and Foam
	<br>- Pre-foam Skyrmion complete
	<br>- Protoversal Foam sub-layer and Skyrmion buyables complete
	<br>- Added framework for Infinitesimal through Quantum Foam sub-layers
`

let winText = `Congratulations! You have reached the end and beaten this game, for now...`

// If you add new functions anywhere inside of a layer, and those functions have an effect when called, add them here.
// (The ones here are examples, all official functions are already taken care of)
var doNotCallTheseFunctionsEveryTick = ['displayBoost', 'buyBuyable', 'getTotalBoost', 'buyableAmount', 'createBuyable', 'progressEffect', 'intervalEffect', 'finishEffect']

function getStartPoints(){
    return new Decimal(modInfo.initialStartPoints)
}

// Determines if it should show points/sec
function canGenPoints(){
	return false
}

// Calculate points/sec!
function getPointGen() {
	if(!canGenPoints())
		return decimalZero

	let gain = new Decimal(1)
	return gain
}

// You can add non-layer related variables that should to into "player" and be saved here, along with default values
function addedPlayerData() { return {
}}

// Display extra things at the top of the page
var displayThings = [
	"Current Endgame: 10,000,000 Accelerons"
]

// Determines when the game "ends"
function isEndgame() {
	return player.acceleron.points.gte(1e7)
}

// Less important things beyond this point!

// You can change this if you have things that can be messed up by long tick lengths
function maxTickLength() {
	return(3600) // Default is 1 hour which is just arbitrarily large
}

// Use this if you need to undo inflation from an older version. If the version is older than the version that fixed the issue,
// you can cap their current resources with this.
function fixOldSave(oldVersion){
}