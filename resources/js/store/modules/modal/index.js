import { defaultState } from './helpers'

import actions from './actions'
import getters from './getters'
import mutations from './mutations'

export default {
  namespaced: true,
  state () {
    return defaultState
  },
  mutations,
  actions,
  getters
}
