export default {
  age: {
    type: 'numeric',
    criteria: 13,
    validOptions: {
      below: 'belowAge',
      above: 'aboveAge'
    }
  },
  path: {
    type: 'selection',
    choice: [
      'left',
      'right'
    ],
    validOptions: {
      left: 'dragon',
      right: 'deepdarkhole'
    }
  },
  dragon: {
    stick: 'stick',
    rock: 'rock'
  },
  cabin: {
    knock: 'knock',
    walk: 'walk'
  },
  sword: {
    steal: 'steal',
    challenge: 'challenge'
  },
  lady: {
    kill: 'kill',
    keep: 'keep'
  }
}
