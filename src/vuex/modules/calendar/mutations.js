/**
 *
 * User: 管小龙
 * Date: 2017/5/15
 * Time: 15:25
 *
 */
import {
  SET_BERGINTIME_SUCCESS
}from './mutation-type'

const mutations = {
  // 获取搜索内容
  [SET_BERGINTIME_SUCCESS] (state, data) {
    state.begTime = data
  }
}

export default mutations
