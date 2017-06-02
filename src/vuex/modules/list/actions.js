/**
 *
 * User: 管小龙
 * Date: 2017/5/15
 * Time: 15:06
 *
 */
import axios from 'axios'
/**
 * get请求
 * @param  {String} options.url   api地址
 * @param  {String} options.query query参数
 * @return {Promise}               Promise
 */
const _get = ({ url, query }, commit) => {
  let _url
  if (query) {
    _url = `http://m.t.ly.com/qquniontraintest/trainapi/${url}?${query}`
  } else {
    _url = `http://m.t.ly.com/qquniontraintest/trainapi/${url}`
  }

  return axios.get(_url)
    .then((res) => {
      if (res.status >= 200 && res.status < 300) {
        return res.data
      }
      return Promise.reject(new Error(res.status))
    })
}
/**
 *
 * @param commit
 * @param page
 * @param count
 * @returns {Promise.<TResult>}
 */
export const fetchTrainnLists = ({ commit }, page, count) => {
  const url = 'search.html'
  // const query = `para={"headtime":1494830767.707,"memberId":"","platId":432,"requestType":3,"headct":1,"headus":1,"headver":"2.14.0.2","from":"平凉","to":"平凉南","oby":0,"date":"2017-05-24","isstu":false,"trainno":""}&_t=` + new Date().getTime()
  return _get({url, query}, commit)
    .then((json) => {
      console.log(json);
      if (json.data) {
        return commit('FETCH_TRAIN_LIST_SUCCESS', json.data)
      }
      return Promise.reject(new Error('fetchlist failure'))
    })
    .catch((error) => {
      return Promise.reject(error)
    })
}
