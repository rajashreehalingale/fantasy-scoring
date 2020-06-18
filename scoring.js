function calculateScore(Player) {
  let result = 0

  let scoreQB = [
    { sName: 'p25Yards', points: 1 },
    { sName: 'pTouchDowns', points: 6 },
    { sName: 'pInterception', points: -3 },
    { sName: 'r10Yards', points: 1 },
    { sName: 'rTochD', points: 6 },
    { sName: 'rfumbles', points: -3 }
  ]

  if (Player.position === 'QB') {
    console.log(Player.stats.passing.attempts)
    for (let i = 0; i < scoreQB.length; i++) {
      switch (scoreQB[i].sName) {
        case 'pTouchDowns':
          result = Player.stats.passing.touchdowns * scoreQB[i].points
          break
        default: result = 0
      }
      console.log(result)
    }
  }

  result = 40.72

  return result
}

module.exports = calculateScore
