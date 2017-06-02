/**
 *
 * User: 管小龙
 * Date: 2017/5/15
 * Time: 16:15
 *
 */

import Vue from 'vue'
import Vuex from 'vuex'
import list from './modules/list'
import cal from './modules/calendar'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    list,
    cal,
    app
  },
  strict: debug
})
