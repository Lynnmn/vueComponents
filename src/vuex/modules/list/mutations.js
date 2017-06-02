/**
 *
 * User: 管小龙
 * Date: 2017/5/15
 * Time: 15:25
 *
 */
import {
  FETCH_TRAIN_LIST_SUCCESS
}from './mutation-type'

const mutations = {
  // 获取搜索内容
  [FETCH_TRAIN_LIST_SUCCESS] (state, data) {
    state.trainlist = data
  }
}

export default mutations
