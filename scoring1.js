function CalcScoreCombine(calcData) {

  let result = 0

  for (let i = 0; i < calcData.length - 1; i++) {
    result = result + ((calcData[i].stat1 / calcData[i].per).toFixed(2) * calcData[i].points)
  }

  return result
}

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

  /*   for (let i = 0; i < scoreRB.length - 1; i++) {
      switch (scoreRB[i].sName) {
        case 'ru10Yards':
          result = result + (Player.stats.rushing.yards / scoreRB[i].yard) * scoreRB[i].points
          break
  
        case 'ruTochD':
          result = result + ((Player.stats.rushing.touchdowns / scoreRB[i].touchDown) * scoreRB[i].points)
          break
  
        case 'rufumbles':
          result = result + ((Player.stats.rushing.fumbles / scoreRB[i].fumbles) * scoreRB[i].points)
          break
  
        case 'reception':
          result = result + ((Player.stats.receiving.receptions / scoreRB[i].receptions) * scoreRB[i].points)
          break
  
        case 'receiving10Yards':
          result = result + (Player.stats.receiving.yards / scoreRB[i].yard) * scoreRB[i].points
          break
  
        case 'receivingTochD':
          result = result + ((Player.stats.receiving.touchdowns / scoreRB[i].touchDown) * scoreRB[i].points)
          break
  
        case 'receivingfumbles':
          result = result + ((Player.stats.receiving.fumbles / scoreRB[i].fumbles) * scoreRB[i].points)
          break
  
        case 'kreturns':
          result = result + ((Player.stats.return.kickreturn.returns / scoreRB[i].kick) * scoreRB[i].points)
          break
  
        case 'kreTochD':
          result = result + ((Player.stats.return.kickreturn.touchdowns / scoreRB[i].kick) * scoreRB[i].points)
          break
  
        case 'krefumbles':
          result = result + ((Player.stats.return.kickreturn.fumbles / scoreRB[i].fumbles) * scoreRB[i].points)
          break
  
        case 'puntreturns':
          result = result + ((Player.stats.return.puntreturn.returns / scoreRB[i].punt) * scoreRB[i].points)
          break
  
        case 'puntreTochD':
          result = result + ((Player.stats.return.puntreturn.yards / scoreRB[i].punt) * scoreRB[i].points)
          break
  
        case 'puntrefumbles':
          result = result + ((Player.stats.return.puntreturn.fumbles / scoreRB[i].punt) * scoreRB[i].points)
          break
  
        default: result = 0
      }
    } */

  return result
}


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

  /*  for (let i = 0; i < scoreQB.length - 1; i++) {
     switch (scoreQB[i].sName) {
       case 'p25Yards':
         result = result + Player.stats.passing.yards / 25
         break
 
       case 'pTouchDowns':
         result = result + Player.stats.passing.touchdowns * scoreQB[i].points
         break
 
       case 'pInterception':
         result = result + Player.stats.passing.interceptions * scoreQB[i].points
         break
 
       case 'r10Yards':
         result = result + Player.stats.rushing.yards / 10
         break
 
       case 'rTochD':
         result = result + Player.stats.rushing.touchdowns * scoreQB[i].points
         break
 
       case 'rfumbles':
         result = result + (Player.stats.rushing.fumbles * scoreQB[i].points)
         break
       default: result = 0
     }
   } */

  return result
}

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
}

module.exports = calculateScore
