const getShakaOptions = () => {
  return {
    retryParameters: {
      timeout: 0,
      maxAttempts: 5,
      baseDelay: 400,
      backoffFactor: 2,
      fuzzFactor: 0.5
    },
    streaming: {
      rebufferingGoal: 10,
      bufferingGoal: 120,
      bufferBehind: 90,
      ignoreTextStreamFailures: true,
      alwaysStreamText: true,
      jumpLargeGaps: true,
      stallEnabled: true
    }
  }
}

const getKeyBindings = () => {
  return {
    manager: ['c'],
    snapshot: ['s'],
    togglePlay: ['space'],
    toggleFullscreen: ['f']
  }
}

const getThumbnail = (state) => {
  return state.thumbnail
}

export default {
  getShakaOptions,
  getKeyBindings,
  getThumbnail
}
