import React, { Component } from 'react'
import { firebaseConnect } from 'fire-connect'

/* eslint-disable no-unused-vars */
const specialDeck = [
  {
    id: 0,
    name: 'Vérane',
    atk: 28,
    def: 10,
    tier: 2,
    description:
      'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.'
  },
  {
    id: 1,
    name: 'Bérengère',
    atk: 47,
    def: 14,
    tier: 2,
    description:
      'Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.'
  },
  {
    id: 2,
    name: 'Esbjörn',
    atk: 33,
    def: 10,
    tier: 3,
    description:
      'Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.'
  },
  {
    id: 3,
    name: 'Zoé',
    atk: 86,
    def: 83,
    tier: 2,
    description:
      'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla.'
  },
  {
    id: 4,
    name: 'Lyséa',
    atk: 82,
    def: 68,
    tier: 2,
    description:
      'Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.'
  }
]
export const cardsArray = [
  {
    "id": 1,
    "name": "Alaric",
    "atk": 4,
    "def": 3,
    "tier": 1,
    "global_count": 10,
    "description": "A plunderer of the tranquil hamlets snuggled in the dells of the Novarian foothills. His strident warcry is fodder for the fireside scaretales of raconteurs throughout the province.",
    "file": "png"
  },
  {
    "id": 2,
    "name": "Anisa",
    "atk": 4,
    "def": 2,
    "tier": 1,
    "global_count": 5,
    "description": "A sought after sword for hire who always honors her contracts. She has driven home her broadsword and cloven the skulls of many men.",
    "file": "jpg"
  },
  {
    "id": 3,
    "name": "Azrael",
    "atk": 7,
    "def": 4,
    "tier": 2,
    "global_count": 20,
    "description": "Azrael employs his hammer in high arcing swings that fall with the weight of boulders on his opponents. A channeler of dark energies, he can leech out the lifeforce of those who come within range of his dark powers.",
    "file": "jpg"
  },
  {
    "id": 4,
    "name": "Blorg",
    "atk": 1,
    "def": 4,
    "tier": 1,
    "global_count": 3,
    "description": "At close range, his viscous outer membrane inflicts great damage.",
    "file": "png"
  },
  {
    "id": 5,
    "name": "Charybdis",
    "atk": 8,
    "def": 9,
    "tier": 3,
    "global_count": 7,
    "description": "Shapeshifting allows Charybdis to stay ahead of any attacker who pinpoints his weaknesses. The ground trembles beneath the protean forms he takes.",
    "file": "gif"
  },
  {
    "id": 6,
    "name": "Crisani",
    "atk": 5,
    "def": 1,
    "tier": 1,
    "global_count": 8,
    "description": "With bow and arrow, her aim is true. In communion with the forest spirits, Crisani does not fight alone but instead under the protection of the forest.",
    "file": "jpg"
  },
  {
    "id": 7,
    "name": "Edzuric",
    "atk": 10,
    "def": 6,
    "tier": 3,
    "global_count": 9,
    "description": "Edzuric is a rogue among rogues, a highwayman who waylays those waylay others.",
    "file": "gif"
  },
  {
    "id": 8,
    "name": "Estriel",
    "atk": 7,
    "def": 4,
    "tier": 2,
    "global_count": 2,
    "description": "Estriel has at his disposal the volatility of the elemental forces.",
    "file": "jpg"
  },
  {
    "id": 9,
    "name": "Fulafa",
    "atk": 8,
    "def": 4,
    "tier": 2,
    "global_count": 3,
    "description": "A member of the secretive order of Mulai assassins, Fulafa is a master of stealth. His enemies mistake him for their own shadow until it's too late.",
    "file": "jpg"
  },
  {
    "id": 10,
    "name": "Garth",
    "atk": 6,
    "def": 6,
    "tier": 2,
    "global_count": 1,
    "description": "With his four arms, Garth began life as a sideshow freak until he learned all there is to know about fencing from the sword swallower. Now he takes special delight in showing off his slashing techniques to a participant audience, his victims.",
    "file": "gif"
  },
  {
    "id": 11,
    "name": "Gilbran",
    "atk": 7,
    "def": 5,
    "tier": 2,
    "global_count": 7,
    "description": "Gilran embraces the crushing force of the wheel of fortune. He deals out pain and death with a deck of possible fates for those who challenge him.",
    "file": "png"
  },
  {
    "id": 12,
    "name": "Golgath",
    "atk": 5,
    "def": 2,
    "tier": 1,
    "global_count": 10,
    "description": "The chain of his mace whirls in a rotary blur before the terrorized eyes of his opponents.",
    "file": "png"
  },
  {
    "id": 13,
    "name": "Gregor",
    "atk": 3,
    "def": 2,
    "tier": 1,
    "global_count": 15,
    "description": "As the sun set on the Gardanian dynasty, the elite cadre of imperial guards had formed a cabal to assassinate the king. Gregor defected from their ranks rather than betray his king. He wields his axe steady.",
    "file": "jpg"
  },
  {
    "id": 14,
    "name": "Gwar",
    "atk": 6,
    "def": 5,
    "tier": 2,
    "global_count": 32,
    "description": "All the dread of mortals poured into the mold that gave Gwar his fearsome shape.",
    "file": "jpg"
  },
  {
    "id": 15,
    "name": "Hanzo",
    "atk": 8,
    "def": 6,
    "tier": 2,
    "global_count": 4,
    "description": "His first words were 'thrust' and 'parry'. Hanzo nimbly cuts to threads those who dare unsheath a blade before him.",
    "file": "jpg"
  },
  {
    "id": 16,
    "name": "Idra",
    "atk": 10,
    "def": 8,
    "tier": 3,
    "global_count": 8,
    "description": "Her incantations can reduce enemies to driveling halfwits or can force comrades to turn arms against one another.",
    "file": "png"
  },
  {
    "id": 17,
    "name": "Imzor",
    "atk": 2,
    "def": 2,
    "tier": 1,
    "global_count": 12,
    "description": "'What is already dead cannot be killed!' hails the undead warrior.",
    "file": "png"
  },
  {
    "id": 18,
    "name": "Jippura",
    "atk": 7,
    "def": 5,
    "tier": 2,
    "global_count": 11,
    "description": "Jippura's maneuvers can make even an accomplished swordhandler pale in comparison.",
    "file": "gif"
  },
  {
    "id": 19,
    "name": "Jovan",
    "atk": 2,
    "def": 2,
    "tier": 1,
    "global_count": 7,
    "description": "A trickster out for the pure play of mischief. His schemes have sabotaged the movements of troops, armaments and foodstuffs.",
    "file": "png"
  },
  {
    "id": 20,
    "name": "Kaya",
    "atk": 7,
    "def": 5,
    "tier": 2,
    "global_count": 20,
    "description": "Kaya handles her broad blade as if it were as light as a feather.",
    "file": "jpg"
  },
  {
    "id": 21,
    "name": "Kazi",
    "atk": 7,
    "def": 6,
    "tier": 2,
    "global_count": 14,
    "description": "Not to be underestimated for his size, Kazi lived among the race of chimp swordmasters and learned their gravity defying style of combat.",
    "file": "gif"
  },
  {
    "id": 22,
    "name": "Khalerias",
    "atk": 3,
    "def": 3,
    "tier": 1,
    "global_count": 12,
    "description": "Doom befalls those who incite the ire of Khalerias.",
    "file": "jpg"
  },
  {
    "id": 23,
    "name": "Mustapha",
    "atk": 3,
    "def": 3,
    "tier": 1,
    "global_count": 12,
    "description": "Known for flurries from two blades, Mustapha has many times whistled from the ramparts of castles sieged under his command.",
    "file": "gif"
  },
  {
    "id": 24,
    "name": "Khalif",
    "atk": 6,
    "def": 5,
    "tier": 2,
    "global_count": 13,
    "description": "Khalif is a djinn wih the keys to possible realities.",
    "file": "gif"
  },
  {
    "id": 25,
    "name": "Kimzara",
    "atk": 7,
    "def": 4,
    "tier": 2,
    "global_count": 16,
    "description": "Kimzara is a fugitive from the days of wrath, slipping out of the distant future of judgment day into the present. He carries with him the power to rain brimstone.",
    "file": "png"
  },
  {
    "id": 26,
    "name": "Laipurik",
    "atk": 3,
    "def": 2,
    "tier": 1,
    "global_count": 10,
    "description": "An apostate from the Lemurian province, Laipurik practices occult arts proscribed under royal decree. He invokes spirits from the nether realm and sends them forth as emissaries of his cruel intentions.",
    "file": "png"
  },
  {
    "id": 27,
    "name": "Lemgog",
    "atk": 3,
    "def": 2,
    "tier": 1,
    "global_count": 10,
    "description": "A knuckle-dragging beast of hell who hungers for the torment of proud souls.",
    "file": "gif"
  },
  {
    "id": 28,
    "name": "Meliza",
    "atk": 2,
    "def": 6,
    "tier": 1,
    "global_count": 10,
    "description": "A warrior priestess, one of the last bastions of virtue.",
    "file": "gif"
  },
  {
    "id": 29,
    "name": "Mitorashi",
    "atk": 7,
    "def": 5,
    "tier": 2,
    "global_count": 10,
    "description": "In his own words: 'Mitorashi's blade runs red, no more needs be said.'",
    "file": "png"
  },
  {
    "id": 30,
    "name": "Nigel",
    "atk": 3,
    "def": 4,
    "tier": 1,
    "global_count": 12,
    "description": "Luck smiles upon the goodhearted swordsman. Nigel is a champion of the defenseless, traveling the continent righting injustices.",
    "file": "png"
  },
  {
    "id": 31,
    "name": "Noremis",
    "atk": 4,
    "def": 2,
    "tier": 1,
    "global_count": 12,
    "description": "Grand master of last moments, Noremis carries off souls with a door open to death.",
    "file": "jpg"
  },
  {
    "id": 32,
    "name": "Ogresh",
    "atk": 3,
    "def": 5,
    "tier": 1,
    "global_count": 12,
    "description": "A guardian at the gates of dawn. He is the trusted sentinel standing between gods and mortals",
    "file": "gif"
  },
  {
    "id": 33,
    "name": "Otonga",
    "atk": 5,
    "def": 8,
    "tier": 2,
    "global_count": 12,
    "description": "Otonga carries forward Epomi, the traditional martial art of his forebears. The ancient art anticipates every move of opponents and turns them to Otonga's advantage.",
    "file": "png"
  },
  {
    "id": 34,
    "name": "Panza",
    "atk": 10,
    "def": 9,
    "tier": 3,
    "global_count": 12,
    "description": "Soaring over the battleground, Panza lays waste to great swathes of land and leaves behind a cauterized, corpsestrewn field.",
    "file": "gif"
  },
  {
    "id": 35,
    "name": "Pontius",
    "atk": 5,
    "def": 8,
    "tier": 2,
    "global_count": 12,
    "description": "Pontius wears armor stained with the blood of fallen foes.",
    "file": "png"
  },
  {
    "id": 36,
    "name": "Quinque",
    "atk": 4,
    "def": 2,
    "tier": 1,
    "global_count": 12,
    "description": "Quinque advances over the field of battle like death's harrow, sowing the ground with blood.",
    "file": "png"
  },
  {
    "id": 37,
    "name": "Ra",
    "atk": 7,
    "def": 4,
    "tier": 2,
    "global_count": 12,
    "description": "Ra shoulders a cannon that packs firepower capable of piercing stone bulwarks.",
    "file": "jpg"
  },
  {
    "id": 38,
    "name": "Timor",
    "atk": 4,
    "def": 1,
    "tier": 1,
    "global_count": 12,
    "description": "Once immured by a rival prince, Timor emerged with an insatiable appetite for cruelty. He slings flares that engulf opponents in flame. Their cries lacerate the air and bring joy to Timor's black heart",
    "file": "gif"
  },
  {
    "id": 39,
    "name": "Torwin",
    "atk": 3,
    "def": 3,
    "tier": 1,
    "global_count": 12,
    "description": "Torwin lives by his own lights, loyal to no banner but his own. He does not abide tyrants and heeds the call of liberating forces everywhere.",
    "file": "jpg"
  },
  {
    "id": 40,
    "name": "Turion",
    "atk": 8,
    "def": 8,
    "tier": 3,
    "global_count": 12,
    "description": "A glutton for power, Turion knows no scruples and leaves no weakness unexploited. He stabbed his own twin in the back in his scrabble up the ladder to power.",
    "file": "gif"
  },
  {
    "id": 41,
    "name": "Twark",
    "atk": 3,
    "def": 2,
    "tier": 1,
    "global_count": 12,
    "description": "Twark fashions kill trophies from the bones of his victims and offers them up on an altar of blood. Offerings to propitiate the gods.",
    "file": "png"
  },
  {
    "id": 42,
    "name": "Tyan",
    "atk": 3,
    "def": 4,
    "tier": 1,
    "global_count": 12,
    "description": "Tyan smells the fear hanging about his opponents, a stinking shroud that portends his coming victory.",
    "file": "gif"
  },
  {
    "id": 43,
    "name": "Urubamba",
    "atk": 4,
    "def": 1,
    "tier": 1,
    "global_count": 12,
    "description": "Urubamba reads off the cipher of natural forces and overwrites their logic with his own dark designs.",
    "file": "jpg"
  },
  {
    "id": 44,
    "name": "Utarig",
    "atk": 3,
    "def": 3,
    "tier": 1,
    "global_count": 12,
    "description": "Utarig wields a blade that windmills swiftly.",
    "file": "gif"
  },
  {
    "id": 45,
    "name": "Waidura",
    "atk": 3,
    "def": 2,
    "tier": 1,
    "global_count": 12,
    "description": "A wild boy who calls the beasts of the jungle his brethren. He has a viciousness learned from the state of nature.",
    "file": "png"
  },
  {
    "id": 46,
    "name": "Wanobi",
    "atk": 10,
    "def": 7,
    "tier": 3,
    "global_count": 12,
    "description": "Wanobi charges ahead with no thought of what harm might befall him. His loyalty is fierce.",
    "file": "gif"
  },
  {
    "id": 47,
    "name": "Yansafa",
    "atk": 4,
    "def": 2,
    "tier": 1,
    "global_count": 12,
    "description": "Yansafa culls the ranks of men by cutting down the weak.",
    "file": "png"
  },
  {
    "id": 48,
    "name": "Zabar",
    "atk": 2,
    "def": 2,
    "tier": 1,
    "global_count": 12,
    "description": "Zabar has done his part to pad the sea bottom with skulls. His thirst for rum knows no limit and no compunction holds him back from crimes to fund his wont",
    "file": "jpg"
  },
  {
    "id": 49,
    "name": "Zidriel",
    "atk": 10,
    "def": 10,
    "tier": 3,
    "global_count": 12,
    "description": "Zidriel long ago sundered the links to any sense of compassion in his once human heart. Evil implanted itself there like a parasite and sucked out the humanity. What remains is a husk of a human being intent on making a hell of earth.",
    "file": "jpg"
  }
]


export const starterDeck = (cards) => {
  const result = []
  const tier1 = cards.filter(card => card.tier === 1)
  const tier2 = cards.filter(card => card.tier === 2)


  for (let i = 0; result.length < 5; i++) {
    const randNum = Math.floor(Math.random() * tier1.length);
    if (!result.includes(tier1[randNum])) {
      result.push(tier1[randNum])
    }
  }

  for (let i = 0; result.length < 6; i++) {
    const randNum = Math.floor(Math.random() * tier2.length);
    if (!result.includes(tier2[randNum])) {
      result.push(tier2[randNum])
    }
  }
  result.forEach(card => card.id = result.indexOf(card))
  return result

}

class Data extends Component {

  componentWillMount() {
    this.props.seedP1Deck(cardsArray)
    // this.props.seedP2Deck(specialDeck)
    this.props.seedCardCollection(cardsArray)
  }

  render() {
    return <div />
  }
}


const addDispatcher = (connector, ref) => ({
  seedP1Deck(cards) {
    cards.forEach(card => {
      //ref(`game/specialid/p1/TlgEFiyrHcYPFJKjVPaqYBzWWrs1/deck/${card.id}`).set({...card})
      // ref(`/users/z2elXLBJJNUO96ZOBEzVPQoEyvm1/cards/${card.id}`).set({...card})
    })
  },

  seedP2Deck(cards) {
    cards.forEach(card => {
      //ref(`game/specialid/p2/caCrOjoGxEamloCVeLGfcDtJDS92/deck/${card.id}`).set({...card})
      //ref(`users/caCrOjoGxEamloCVeLGfcDtJDS92/deck/${card.id}`).set({...card})
    })
  },

  seedCardCollection(cards) {
    cards.forEach(card => {
      ref(`cards/${card.id}`).set({ ...card })
    })
  }
})



export default firebaseConnect(null, addDispatcher)(Data)
