/**
 *
 * User: 管小龙
 * Date: 2017/5/19
 * Time: 17:23
 *
 */
export const setTrainBegintime = ({ commit },time) =>{
  try{
    window.localStorage.setItem('test','test');
  }catch (e){
    return;
  }
  //异步执行存储
  setTimeout(function () {
    window.localStorage.setItem('TRAIN_begintime',time);
  },0)
  return commit('SET_BERGINTIME_SUCCESS', time)

}

