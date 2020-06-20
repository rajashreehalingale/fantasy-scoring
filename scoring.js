// Data function for Tightend
function CalcScoreunknown(Player) {
  let result = 0

  return result
}

// Data function for Tightend
function CalcScoreTightend(Player) {
  let result = 0
  let scoreTightend = [
    { stat1: Player.stats.receiving.receptions, sName: 'reception', per: 1, points: 1 },
    { stat1: Player.stats.receiving.yards, sName: 'receiving10Yards', per: 10, points: 1 },
    { stat1: Player.stats.receiving.touchdowns, sName: 'receivingTochD', per: 1, points: 6 },
    { stat1: Player.stats.receiving.fumbles, sName: 'receivingfumbles', per: 1, points: -3 }

  ]

  result = CalcScoreCombine(scoreTightend)

  return result
}

// Data function for Receiver
function CalcScoreReceiver(Player) {
  let result = 0

  let scoreReceiver = [
    { stat1: Player.stats.rushing.yards, sName: 'ru10Yards', per: 10, points: 1 },
    { stat1: Player.stats.rushing.touchdowns, sName: 'ruTochD', per: 1, points: 6 },
    { stat1: Player.stats.rushing.fumbles, sName: 'rufumbles', per: 1, points: -3 },

    { stat1: Player.stats.receiving.receptions, sName: 'reception', per: 1, points: 1 },
    { stat1: Player.stats.receiving.yards, sName: 'receiving10Yards', per: 10, points: 1 },
    { stat1: Player.stats.receiving.touchdowns, sName: 'receivingTochD', per: 1, points: 6 },
    { stat1: Player.stats.receiving.fumbles, sName: 'receivingfumbles', per: 1, points: -3 },

    { stat1: Player.stats.return.kickreturn.yards, sName: 'kreturns', per: 15, points: 1 },
    { stat1: Player.stats.return.kickreturn.touchdowns, sName: 'kreTochD', per: 1, points: 6 },
    { stat1: Player.stats.return.kickreturn.fumbles, sName: 'krefumbles', per: 1, points: -3 },

    { stat1: Player.stats.return.puntreturn.yards, sName: 'puntYard', per: 15, points: 1 },
    { stat1: Player.stats.return.puntreturn.touchdowns, sName: 'puntreTochD', per: 1, points: 6 },
    { stat1: Player.stats.return.puntreturn.fumbles, sName: 'puntrefumbles', per: 1, points: -3 }

  ]

  result = CalcScoreCombine(scoreReceiver)

  return result

}

// Data function for RunningBack
function CalcScoreRB(Player) {
  let result = 0

  let scoreRB = [
    { stat1: Player.stats.rushing.yards, sName: 'ru10Yards', per: 10, points: 1 },
    { stat1: Player.stats.rushing.touchdowns, sName: 'ruTochD', per: 1, points: 6 },
    { stat1: Player.stats.rushing.fumbles, sName: 'rufumbles', per: 1, points: -3 },

    { stat1: Player.stats.receiving.receptions, sName: 'reception', per: 1, points: 1 },
    { stat1: Player.stats.receiving.yards, sName: 'receiving10Yards', per: 10, points: 1 },
    { stat1: Player.stats.receiving.touchdowns, sName: 'receivingTochD', per: 1, points: 6 },
    { stat1: Player.stats.receiving.fumbles, sName: 'receivingfumbles', per: 1, points: -3 },

    { stat1: Player.stats.return.kickreturn.yards, sName: 'kreturns', per: 15, points: 1 },
    { stat1: Player.stats.return.kickreturn.touchdowns, sName: 'kreTochD', per: 1, points: 6 },
    { stat1: Player.stats.return.kickreturn.fumbles, sName: 'krefumbles', per: 1, points: -3 },

    { stat1: Player.stats.return.puntreturn.yards, sName: 'puntreturns', per: 15, points: 1 },
    { stat1: Player.stats.return.puntreturn.touchdowns, sName: 'puntreTochD', per: 1, points: 6 },
    { stat1: Player.stats.return.puntreturn.fumbles, sName: 'puntrefumbles', per: 1, points: -3 }
  ]

  result = CalcScoreCombine(scoreRB)

  return result
}

// Data function for QB
function CalcScoreQB(Player) {
  let result = 0

  let scoreQB = [
    { stat1: Player.stats.passing.yards, sName: 'p25Yards', per: 25, points: 1 },
    { stat1: Player.stats.passing.touchdowns, sName: 'pTouchDowns', per: 1, points: 6 },
    { stat1: Player.stats.passing.interceptions, sName: 'pInterception', per: 1, points: -3 },
    { stat1: Player.stats.rushing.yards, sName: 'r10Yards', per: 10, points: 1 },
    { stat1: Player.stats.rushing.touchdowns, sName: 'rTochD', per: 1, points: 6 },
    { stat1: Player.stats.rushing.fumbles, sName: 'rfumbles', per: 1, points: -3 }
  ]

  result = CalcScoreCombine(scoreQB)

  return result
}

// Function: Where calculate all football calculation like QB, RB, WR, TE
function CalcScoreCombine(calcData) {
  let result = 0

  for (let i = 0; i < calcData.length - 1; i++) {
    result = result + ((calcData[i].stat1 / calcData[i].per).toFixed(2) * calcData[i].points)
  }

  return result
}

// Main function for calling correct calculation function
function calculateScore(Player) {
  if (Player.position === 'QB') {
    return CalcScoreQB(Player)
  }
  else if (Player.position === 'RB') {
    return CalcScoreRB(Player)
  }
  else if (Player.position === 'WR') {
    return CalcScoreReceiver(Player)
  }
  else if (Player.position === 'TE') {
    return CalcScoreTightend(Player)
  }
  else if (Player.position === 'K') {
    return CalcScoreunknown(Player)
  }

}

module.exports = calculateScore
