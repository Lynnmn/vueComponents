<template>
  <section class="fn-clear item ">
    <div class="traindatainfo " >
      <dl class="info-wrap">
        <dd>
          <ul class="first-line">
            <li class="btime">{{list.fmtime}}</li>
            <li class="train_checi"> {{list.trainno}} <i class="icon-train-arrow"></i></li>
            <li class="atime"> {{list.totime}}</li>
          </ul>
        </dd>
        <dd>
          <ul>
            <li class="bplace">{{list.fmcity}}</li>
            <li class="train_haoshi">{{list.usedtime.replace("小", "").replace("钟", "")}}</li>
            <li class="aplace">{{list.tocity}}</li>
            <li class="first-line-price "><label class="minprice"> <span class="yj">¥</span> <span
              class="qian">1</span><span class="qi">起</span></label></li>
          </ul>
        </dd>
      </dl>
      <ul class="info-list">
        <li><span class="txl">硬座</span> <span class="num">  906张  </span></li>
      </ul>
    </div>
  </section>

</template>

<script>
    export default {
      name: 'list',
      props: {
        list: {
          type: Object,
          required: true
        }
      },
    }
</script>

<style scoped>

  #TrainListContainer .item {
    margin-top: 5px;
    margin-bottom: 5px;
  }

  #TrainListContainer .fn-clear {
    zoom: 1;
  }

  #TrainListContainer .traindatainfo {
    padding: 0 !important;
  }

  #TrainListContainer .traindatainfo {
    border-radius: 0;
    padding-bottom: 0;
  }

  #TrainListContainer .traindatainfo {
    box-shadow: 0 3px 3px rgba(153, 153, 153, .1);
    -webkit-box-shadow: 0 3px 3px rgba(153, 153, 153, .1);
    border-radius: 5px;
    position: relative;
    width: 100%;
    height: auto;
    font-size: 14px;
    padding: 10px 0;
    background-color: #fff;
  }

  .info-wrap {
    border-bottom: 1px dashed #e4e4e4;
    padding: 15px;
  }

  #TrainListContainer .traindatainfo dl dd {
    line-height: 1em;
  }

  #TrainListContainer .traindatainfo dl dd ul {
    width: 100%;
    display: -webkit-box;
    -webkit-box-align: center;
  }

  .first-line {
    position: relative;
  }

  #TrainListContainer .traindatainfo dl .btime,  .bplace {
    text-align: left !important;
  }

  #TrainListContainer .traindatainfo dl .btime {
    font-size: 20px;
    color: #333;
  }

  #TrainListContainer .traindatainfo dl li {
    padding: 0 !important;
  }

  #TrainListContainer .traindatainfo dl li {
    width: 24%;
    padding: 7px 0;
    text-align: center;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    white-space: nowrap;
  }

  #TrainListContainer .traindatainfo dl .train_checi,  #TrainListContainer .traindatainfo dl .train_haoshi {
    font-size: 11px !important;
    color: #333 !important;
  }

  #TrainListContainer .traindatainfo dl .train_checi {
    height: 25px !important;
  }

  #TrainListContainer .traindatainfo dl .train_checi {
    min-width: 50px;
    font-size: 10px;
    color: #999;
    height: 30px;
    position: relative;
  }

  #TrainListContainer .traindatainfo dl li {
    padding: 0 !important;
  }

  #TrainListContainer .traindatainfo dl li {
    width: 24%;
    padding: 7px 0;
    text-align: center;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    white-space: nowrap;
  }

  #TrainListContainer .traindatainfo dl .train_checi i {
    bottom: 3px !important;
  }

  #TrainListContainer .traindatainfo dl .train_checi i {
    position: absolute;
    bottom: -2px;
    left: 0;
    right: 0;
    margin: 0 auto;
    width: 50px;
    height: 10px;
  }

  .icon-train-arrow {
    width: 65px !important;
    height: 4px;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIIAAAAICAYAAAA1KCdDAAAAGXRFW…PhNKJKh9XQtsOr0RJhtHTAKB1GE8Jo20FsNCGMAnjpABBgAEzSEV94E3aQAAAAAElFTkSuQmCC) center no-repeat;
    background-size: 100%;
    display: block;
  }

  #TrainListContainer .traindatainfo dl dd li:nth-child(3) {
    width: 24%;
  }

  #TrainListContainer .traindatainfo dl .atime {
    position: relative;
  }

  #TrainListContainer .traindatainfo dl .atime,  .aplace {
    text-align: right !important;
  }

  #TrainListContainer .traindatainfo dl .atime {
    font-size: 20px;
    color: #333;
  }

  #TrainListContainer .traindatainfo dl li {
    padding: 0 !important;
  }

  #TrainListContainer .traindatainfo dl li {
    width: 24%;
    padding: 7px 0;
    text-align: center;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    white-space: nowrap;
  }
</style>
