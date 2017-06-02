<template>
    <div class="tc-view page-web-index page-index " id="page-view-10" page-url="index">
        <div id="banner" class="banner-wrapper"></div>
        <!-- <header> <ul id="indexNav"> <li id="trainTab" class="border_bottom_green">火车票</li> <li id="flightTab" class="head-go-to-flight">机票</li> </ul> </header> -->
        <section id="mainPage">
            <div id="trainCont"><a href="javascript:void(0);"
                                   onclick="_tcTraObj._tcTrackEvent('click','gonggaolan','touchtrain','')"><h5
                    class="f-tip"><em class="icon-train icon-warning"></em> <span></span></h5></a>
                <div id="t_content">
                    <section class="infos hide_me"><i></i>
                        <ul class="infos-list">
                            <li>为方便广大旅客出行，铁路部门将在4月中旬对全国铁路列车运行图进行调整，4月14日及以后始发的旅客列车车票定于3月21日起开始发售。</li>
                        </ul>
                        <i id="removeTips"></i></section>
                    <div id="t_main">
                        <div id="t_city" class="fn-clear">
                            <section class="city-wrap">
                                <div id="t_from" class="fromCity" data="fromCity"><p class="t_incity"><input readonly=""
                                                                                                             type="text"
                                                                                                             id="t_goCity"
                                                                                                             class="c_name city-name"
                                                                                                             value="出发地">
                                </p> <input type="hidden" name="BeginPlaceCn" class="CN" value="苏州"> <input
                                        type="hidden" name="BeginPlace" class="PY" autocomplete="off" value="undefined">
                                </div>
                                <div id="t_to" class="t_to" data="arrCity"><p class="t_incity"><input readonly=""
                                                                                                      type="text"
                                                                                                      id="t_backCity"
                                                                                                      class="c_name city-name"
                                                                                                      value="目的地"></p>
                                    <input type="hidden" name="ArrPlaceCn" class="CN" value="上海"> <input type="hidden"
                                                                                                         name="ArrPlace"
                                                                                                         class="PY"
                                                                                                         autocomplete="off"
                                                                                                         value="undefined">
                                </div>
                                <em class="t_changecity" id="t_changeCity"> <em class="tpic_change exchange"> </em>
                                </em></section>
                        </div>
                      <router-link :to="{name: 'calendar'}">

                      <div id="BeginTime"  class="date-wrap">
                            <div class="flex-box data-selected"><p class="leavedate text-right" id="tselect_Date"><span
                                    class="select-date" data-date="2017-05-10">{{beginTime}}</span> <span
                                    class="normal">今天</span></p> <input type="hidden" name="Time" id="Time"
                                                                        autocomplete="off" value="2017-05-10"></div>
                        </div>
                      </router-link>
                        <div id="searchwrap" class="searchwrap fn-clear">
                            <section class="search-inner">
                                <div class="color-little-black">只搜高铁/动车</div>
                                <i class="btn-bgt"></i> <input id="trainFileter" type="hidden" name="filter" value="">
                            </section>
                        </div>
                        <div id="studentwrap" class="studentwrap fn-clear">
                            <section class="search-inner">
                                <div class="color-little-black">学生票查询</div>
                                <i class="btn-bgt"></i></section>
                        </div>
                        <div class="fn-clear background-native">
                            <button type="submit" id="t_search" class="background-action">搜索</button>
                        </div>
                    </div>
                    <input type="hidden" name="openid" value=""> <input type="hidden" name="token" value="">
                    <div id="queryhistory" class="font-14 color-gray">
                        <ul class="select-list">
                            <li frompy="undefined" topy="undefined" from="苏州" to="上海" class="select-item"><a>苏州 - 上海</a>
                            </li>
                        </ul>
                    </div>
                    <ul class="fun-list">
                        <li class="fun-item" id="dpClick"
                            onclick="_tcTraObj._tcTrackEvent('click','hcp_shouye','touchtrain','')"><a
                                href="javascript:void(0);"> <i></i> 极速订票 </a></li>
                        <li class="fun-item" id="qpClick"><a href="javascript:void(0);"> <i></i> 极速抢票 </a></li>
                        <li class="fun-item" id="orderCenter"><a href="javascript:void(0);"> <i></i> 我的火车票 </a></li>
                    </ul>
                </div>
            </div>
            <div class="fed-zx" id="fedZx" style="margin-top: 130px; display: block;"><img
                    src="//img1.40017.cn/touch/hb/c/hcp/logo.png">
                <ul>
                    <li><span class="border-right"><em class="icon"></em>购票快捷</span></li>
                    <li class="pay"><span class="border-right"><em></em>支付安全</span></li>
                    <li><span><em class="time"></em>出票保障</span></li>
                </ul>
            </div>
            <div id="flightCont" class="fn-hide"></div> </section>
        </div>
</template>

<script>
    export default {
        name: 'index',
        data () {
            return {
                beginTime: ''
            }
        },
        mounted(){
            let begtime = JSON.parse(localStorage['TRAIN_begintime']).date;
            this.beginTime = [].slice.call(begtime,1).join('-');
        }
    }
</script>

<style scoped>
    .page-index .fn-clear:after {
        visibility: hidden;
        display: block;
        font-size: 0;
        content: " ";
        clear: both;
        height: 0;
    }

    .page-index .select-date {
        color: #333;
        font-size: 20px;
        margin-right: 3px;
    }

    .page-index .normal {
        color: #999;
        font-size: 12px;
    }

    .page-index .fn-clear {

    }

    .page-index .placeholder {
        color: #999 !important;
    }

    .page-index input::-webkit-input-placeholder,
    textarea::-webkit-input-placeholder {
        color: #ccc;
    }

    .page-index #kyfwLogin {
        display: none;
    }

    .page-index .kyfw-logined p {
        padding-top: 10px;
    }

    .page-index .kyfw-tip {
        color: #999;
        font-size: 12px;
    }

    .page-index .kyfw-bottom {
        height: 44px;
        background: #fff;
        padding: 0 15px;
        position: absolute;
        bottom: 0;
        right: 0;
        left: 0;
        color: #666;
        border-top: 1px solid #e9e9e9;
    }

    .page-index .kyfw-logined {
        height: 62px;
        font-size: 15px;
    }

    .page-index .kyfw-logined p {
        padding-top: 10px;
    }

    .page-index .kyfw-logined .icon-right-arrow {
        float: right;
        position: absolute;
        right: 15px;
        top: 28px;
        width: 15px;
        height: 8px;
        background-position: -245px -80px !important;
    }

    .page-index .kyfw-logined .icon-right-arrow:before {
        content: "\\e601";
    }

    .page-index .iconfont,
    .page-index .icon-train-new,
    .page-index .icon-train {
        font-family: 'iconfont' !important;
        font-size: 16px;
        font-style: normal;
        -webkit-font-smoothing: antialiased;
        -webkit-text-stroke-width: .2px;
        -moz-osx-font-smoothing: grayscale;
    }

    /**
     * 城市选择组件css
     */

    .page-index .search {
        padding: 8px 65px 8px 8px;
        background-color: #ccc;
        position: relative;
    }

    .page-index .flex1 {
        -webkit-box-flex: 1;
    }

    .page-index .calendar-wrapper .from-day {
        background-color: #00abeb !important;
        color: #fff !important;
    }

    #searchwrap .color-little-black {
        padding-left: 0 !important;
        color: #333 !important;
        font-size: 20px;
    }

    .page-index .orange {
        color: #ff8400;
    }

    .page-index header {
        height: 50px;
        border-bottom: #eee 1px solid;
        display: block !important;
        box-sizing: border-box;
    }

    .page-index header li {
        width: 50%;
        height: 49px;
        line-height: 46px;
        float: left;
        list-style: none;
        text-align: center;
        font-size: 20px;
        background: #fff;
        box-sizing: border-box;
    }

    .page-index header li a {
        display: block;
    }

    .page-index .border_bottom_green {
        border-bottom: 3px solid #00abeb;
    }

    .page-index footer {
        position: fixed;
        bottom: 0;
        width: 100%;
        height: 55px;
        padding: 5px 0;
        font-size: 11px;
        color: gray;
        text-align: center;
        background: #fafafa;
        box-sizing: border-box;
        z-index: 2;
    }

    .page-index #trainCont .f-tip {
        display: none;
        background-color: #fff7dc;
        padding: 6px 15px;
        font-size: 12px;
        color: #9e8052;
    }

    .page-index #trainCont .f-tip > span {
        line-height: 20px;
        word-break: break-all;
    }

    .page-index #trainCont {
        padding: 10px;
    }

    .page-index #trainCont .f-tip em {
        float: left;
        margin: 1px 5px 1px 0;
        width: 18px;
        height: 18px;
        position: relative;
    }

    .page-index #trainCont .f-tip em:before {
        content: "\\e61a";
        font-size: 18px;
        line-height: 18px;
        position: absolute;
        top: 0;
        color: #ff6815;
    }

    .page-index #t_content {
        background: #fff;
        overflow: hidden;
        border-radius: 2px;
        position: relative;
        box-shadow: 0 2px 3px rgba(220, 222, 225, 0.8);
    }

    .page-index #t_content:after {
        content: " ";
        width: 200%;
        height: 200%;
        position: absolute;
        top: 0;
        left: 0;
        border: 1px solid rgba(0, 0, 0, 0.2);
        -webkit-transform: scale(0.5);
        transform: scale(0.5);
        -webkit-transform-origin: 0 0;
        transform-origin: 0 0;
        box-sizing: border-box;
        border-radius: 4px;
        z-index: -1;
    }

    .page-index #t_city .city-wrap > div {
        position: relative;
        display: inline-block;
        width: 45%;
    }

    .page-index #t_to {
        float: right !important;
        text-align: right;
    }

    #t_to, .page-index #t_from {
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
    }

    .page-index #t_to {
        float: right !important;
        text-align: right;
    }

    .page-index .t_incity {
        font-size: 24px;
        color: #333;
        border: 0;
        background: 0;
        width: 100%;
        line-height: 1;
    }

    .page-index #t_city .t_changecity {
        width: 38px;
        height: 38px;
        position: absolute;
        bottom: -2px;
        margin: 0 auto;
        text-align: center;
        box-sizing: border-box;
        z-index: 1;
        left: 0;
        right: 0;
    }

    .page-index #t_city #t_to input {
        text-align: right;
    }

    .page-index #t_city .city-name,
    .page-index .t_incity {
        font-size: 20px;
        border: 0;
        background: 0;
        color: #333;
        width: 100%;
        line-height: 1;
    }

    .page-index #studentwrap .color-little-black, .page-index #searchwrap .color-little-black {
        display: inline-block;
    }

    /*.train-selform {*/
    /*background: #fff;*/
    /*padding: 0 15px;*/
    /*}*/

    /*.train-selform.train-custom li {*/
    /*line-height: 55px;*/
    /*height: 55px;*/
    /*}*/

    /*.train-selform .train-station {*/
    /*line-height: 65px;*/
    /*font-size: 22px;*/
    /*position: relative;*/
    /*overflow: hidden;*/
    /*height: 65px;*/
    /*}*/

    /*.train-selform li {*/
    /*line-height: 50px;*/
    /*}*/

    /*.train-selform.train-custom .train-station dd {*/
    /*width: 40%;*/
    /*color: #333;*/
    /*font-size: 20px;*/
    /*}*/

    /*.train-station:after {*/
    /*content: " ";*/
    /*position: absolute;*/
    /*left: 0;*/
    /*bottom: 0;*/
    /*right: 0;*/
    /*height: 1px;*/
    /*border-bottom: 1px solid #e4e4e4;*/
    /*color: #e4e4e4;*/
    /*-webkit-transform-origin: 0 100%;*/
    /*transform-origin: 0 100%;*/
    /*-webkit-transform: scaleY(0.5);*/
    /*transform: scaleY(0.5);*/
    /*}*/

    /*.train-selform.train-custom li dd {*/
    /*height: 54px;*/
    /*padding: 0 5px;*/
    /*position: absolute;*/
    /*top: 0;*/
    /*}*/

    /*.train-selform .train-station dd {*/
    /*width: 43%;*/
    /*position: absolute;*/
    /*-webkit-transition: all 0.5s ease-out;*/
    /*transition: all 0.5s ease-out;*/
    /*top: 0;*/
    /*}*/

    /*.train-selform .train-station .to.exchange {*/
    /*transform: translate3d(-128.5%, 0, 0);*/
    /*-webkit-transform: translate3d(-128.5%, 0, 0);*/
    /*text-align: left;*/
    /*}*/

    /*.train-selform .train-station .from.exchange {*/
    /*transform: translate3d(128.5%, 0, 0);*/
    /*-webkit-transform: translate3d(128.5%, 0, 0);*/
    /*text-align: right;*/
    /*}*/

    .page-index #t_city .city-wrap {
        position: relative;
        padding: 20px 0 10px 0;
        box-sizing: border-box;
        line-height: 1.0;
    }

    .page-index #t_city .city-wrap:after {
        content: " ";
        position: absolute;
        left: 0;
        bottom: 0;
        right: 0;
        height: 1px;
        border-bottom: 1px solid #e4e4e4;
        color: #e4e4e4;
        -webkit-transform-origin: 0 100%;
        transform-origin: 0 100%;
        -webkit-transform: scaleY(0.5);
        transform: scaleY(0.5);
    }

    .page-index #t_city .t_changecity i {
        color: #00abeb;
        font-size: 38px;
    }

    .page-index #t_city .flyleft {
        -webkit-transition: all .7s ease-in-out 0s;
        transition: all .7s ease-in-out 0s;
        -webkit-transform: translate3d(-197%, 0, 0);
        transform: translate3d(-197%, 0, 0);
    }

    .page-index #t_city .flyright {
        -webkit-transition: all .7s ease-in-out 0s;
        transition: all .7s ease-in-out 0s;
        -webkit-transform: translate3d(197%, 0, 0);
        transform: translate3d(197%, 0, 0);
    }

    .page-index #BeginTime {
        padding-right: 15px;
        position: relative;
        font-size: 16px;
        color: #666;
    }

    .page-index #t_city {
        padding: 0 15px;
        box-sizing: border-box;
    }

    .page-index .tpic_change {
        -webkit-transition: all .5s ease;
        transition: all .5s ease;
        display: inline-block;
        width: 39px;
        height: 39px;
        background: #fff url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE4AAABOCAYAAACOqiAdAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo0ZDQ2ZTcwMS02YzQ4LTJmNGMtYWY2ZS1kYTM1NzhkMjEwNjciIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NTFDOTFFRDRDMDE4MTFFNkFGRjBBMjZFQTdDRkRGNjkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NTA2NjgxOUVDMDE4MTFFNkFGRjBBMjZFQTdDRkRGNjkiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MzJhN2Y4MmEtYThlOS1lZjQ0LTgzNTgtMzA1YzgyZGYzNWY4IiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6ZmU4MmNjODMtYmRlNS0xMWU2LWE2NDQt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") no-repeat;
        background-size: 39px 39px;
    }

    .train-selform .train-station dt .icon-chage {
        width: 39px;
        height: 39px;
        position: absolute;
        background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE4AAABOCAYAAACOqiAdAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo0ZDQ2ZTcwMS02YzQ4LTJmNGMtYWY2ZS1kYTM1NzhkMjEwNjciIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NTFDOTFFRDRDMDE4MTFFNkFGRjBBMjZFQTdDRkRGNjkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NTA2NjgxOUVDMDE4MTFFNkFGRjBBMjZFQTdDRkRGNjkiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MzJhN2Y4MmEtYThlOS1lZjQ0LTgzNTgtMzA1YzgyZGYzNWY4IiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6ZmU4MmNjODMtYmRlNS0xMWU2LWE2NDQt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") no-repeat;
        background-size: 39px;
        left: 50%;
        -webkit-transition: all .5s ease;
        transition: all .3s ease;
        top: 50%;
        margin: -15px 0 0 -20px;
    }

    .train-station {
        position: relative;
    }

    .train-selform .train-station .to {
        text-align: right;
        right: 0;
    }

    .train-selform .train-station dt {
        width: 14%;
        height: 60px;
        position: absolute;
        top: 0;
        left: 43%;

        background: #fff;
        z-index: 1;
    }

    .date-wrap {
        padding: 0 15px;
    }

    .page-index .data-selected {
        position: relative;
        padding: 20px 0 10px 0;
        width: 100%;
        line-height: 1.0;
    }

    .page-index .data-selected:after {
        content: " ";
        position: absolute;
        left: 0;
        bottom: 0;
        right: 0;
        height: 1px;
        border-bottom: 1px solid #e4e4e4;
        color: #e4e4e4;
        -webkit-transform-origin: 0 100%;
        transform-origin: 0 100%;
        -webkit-transform: scaleY(0.5);
        transform: scaleY(0.5);
    }

    .page-index #trainCont .f-tip em {
        float: left;
        margin: 1px 5px 1px 0;
        width: 18px;
        height: 18px;
        position: relative;
    }

    .page-index #trainCont .f-tip em:before {
        content: "\e61a";
        font-size: 18px;
        line-height: 18px;
        position: absolute;
        top: 0;
        color: #ff6815;
    }

    .page-index #BeginTime .date:before {
        content: "\\e611";
        color: #ccc;
        margin-right: 15px;
        font-size: 20px;
        position: absolute;
        top: 1px;
    }

    .page-index #searchwrap .train-small:before {
        content: "\\e60c";
        color: #ccc;
        line-height: 50px;
        font-size: 20px;
        position: absolute;
        top: 0;
    }

    .page-index #studentwrap .stu-small:before {
        content: "\\e646";
        color: #ccc;
        line-height: 50px;
        font-size: 20px;
        position: absolute;
        left: 10px;
        top: 0;
    }

    .page-index #login-by-12306 .train:before {
        content: "\\e645";
        text-align: center;
        font-size: 27px;
        line-height: 27px;
    }

    .page-index #stuIcon .student:before {
        content: "\\e60a";
        text-align: center;
        font-size: 27px;
        line-height: 27px;
    }

    .page-index #hotelIcon .hotel:before {
        content: "\\e640";
        text-align: center;
        position: relative;
        font-size: 27px;
        line-height: 27px;
    }

    .page-index #hotelIcon .new:before {
        content: "\\e627";
        position: absolute;
        top: -5px;
        color: #ff6815;
        font-size: 30px;
        text-align: center;
        line-height: 27px;
    }

    .page-index .icon-train, .page-index .icon-train-new, .page-index .iconfont {
        text-align: left;
        padding-left: 1rem;
    }

    .page-index .right-arrow {
        float: right;
        line-height: 45px;
        font-size: 12px;
        padding-right: 1rem;
        color: grey;
    }

    .page-index .right-arrow:before {
        content: "";
        display: inline-block;
        width: 12px;
        height: 12px;
        vertical-align: middle;
        border-left: 2px solid grey;
        border-bottom: 2px solid grey;
        -webkit-transform: rotate(-135deg);
        transform: rotate(-135deg);
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
    }

    .page-index #qpIcon .qiangpiao:before {
        content: "\\e644";
        text-align: center;
        position: relative;
        font-size: 27px;
        line-height: 27px;
    }

    .page-index #qpIcon .hot:before {
        content: "\\e613";
        position: absolute;
        top: -5px;
        color: #ff6815;
        font-size: 30px;
        text-align: center;
        line-height: 27px;
    }

    .page-index #footer-active .notice:before {
        content: "\\e643";
        text-align: center;
        font-size: 27px;
        line-height: 27px;
    }

    .page-index .tab-order-center .order-center:before {
        content: "\\e641";
        text-align: center;
        font-size: 20px;
        line-height: 45px;
    }

    .page-index .searchwrap {
        padding: 0 15px;
        position: relative;
        font-size: 20px;
        color: #333
    }

    .page-index .searchwrap > p {
        position: absolute;
        left: 0;
        padding-left: 50px
    }

    .page-index .searchwrap > p i {
        color: #ccc;
        margin-right: 15px;
        font-size: 20px;
        position: absolute;
        left: 15px
    }

    .page-index .searchwrap .btn-bgt {
        position: absolute;
        right: 15px;
        font-size: 22px;
        width: 22px;
        overflow: hidden;
        color: #ccc;
    }

    .page-index .searchwrap .btn-bgt.active {
        color: #00abeb;
    }

    .page-index .searchwrap {
        padding: 0 15px;
        position: relative;
        font-size: 16px;
        color: #666;
    }

    .page-index .search-inner {
        padding: 20px 0 10px 0;
        position: relative;
        width: 100%;
        display: block;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        line-height: 1.0;
      text-align: left;
    }

    .page-index .search-inner:after {
        content: " ";
        position: absolute;
        left: 0;
        bottom: 0;
        right: 0;
        height: 1px;
        border-bottom: 1px solid #e4e4e4;
        color: #e4e4e4;
        -webkit-transform-origin: 0 100%;
        transform-origin: 0 100%;
        -webkit-transform: scaleY(0.5);
        transform: scaleY(0.5);
    }

    .page-index .searchwrap > p {
        position: absolute;
        left: 0;
        padding-left: 50px;
    }

    .page-index .searchwrap > p i {
        color: #ccc;
        margin-right: 15px;
        font-size: 20px;
        position: absolute;
        left: 15px;
    }

    .page-index .searchwrap .btn-bgt {
        position: absolute;
        right: 0;
        width: 20px;
        height: 20px;
        background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo0ZDQ2ZTcwMS02YzQ4LTJmNGMtYWY2ZS1kYTM1NzhkMjEwNjciIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NTNFMTlFOTlDMDE4MTFFNkFGRjBBMjZFQTdDRkRGNjkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NTNFMTlFOThDMDE4MTFFNkFGRjBBMjZFQTdDRkRGNjkiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MzJhN2Y4MmEtYThlOS1lZjQ0LTgzNTgtMzA1YzgyZGYzNWY4IiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6ZmU4MmNjODMtYmRlNS0xMWU2LWE2NDQtYjZhZWQyMDYxYzE0Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+DFY62gAAANlJREFUeNrs2DEKwkAQBdDJYpegFjnBNopHSJEiZ/ISitfRUsFCbyBYJCdIoZJYbpwPCeQGGeF/+Mss2zySbqKu66SqqpWIHLS5di7T5qO9arfe+2dUluVaL3ftUmzlpc1meuyBS5JE0jQV59ykqhCC1HUtTdPgg+2gKfBgAYfAAEufAqJ4eLCSkSV2YjwEEkgggQQSSCCBBBJIIIEEEkgggQQS+N/AFgM2m1YysrQAnjFh7WoBOayA+1ywRN/ocNMujP3dtzZz3vsHBu1R+zUAg+EEE2w/AQYA6l06Rb4GfYAAAAAASUVORK5CYII=") no-repeat;
        background-size: 20px 20px;
    }

    .page-index .searchwrap .btn-bgt.active {
        position: absolute;
        right: 0;
        width: 20px;
        height: 20px;
        background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo0ZDQ2ZTcwMS02YzQ4LTJmNGMtYWY2ZS1kYTM1NzhkMjEwNjciIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6Q0YyOEQ4NThDMDFBMTFFNjhGODhCNTcwMDJFMTdENzQiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6Q0YyOEQ4NTdDMDFBMTFFNjhGODhCNTcwMDJFMTdENzQiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OTAwNGU1ZTEtNzU0ZC1kMTQ5LWFmMmMtMzdhMWVhOTVkNzE0IiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6MDI3MmU1ZTUtYmRmYi0xMWU2LWE2NDQtYjZhZWQyMDYxYzE0Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+zKHQUAAAAn9JREFUeNpiVN63jgEI4oG4FoiVGQYHuAvEzUC8kAVIZAHxVIbBBUABtQCIuZmARAnD4AUlIAcqDGIHKoAcyDiIHcjIxDDIwagDRx046sBRBw4nB4JqhHJlHYbLdn4Mu8xdGQz4hAaPA0GOa1E3ZEiVU2XgZGZmUOLiYejUNBocDgQ5rkndgCFcCrXal2LnGngHghzXoGbAECmliCG37Nm9gXUgyHH1avoM0dKYjlv74hFD192rlDsQZImziCTQEiUGAVY2khxXq6rHEAPUhw42AB1XdeMcw9///wmaw0JIQaWKLkOSrAqYnSWvxhB74QjDvW9fCBpcBdQXJ4PZg9j08jFDOZGOIyoEkRO2ODsnwxIDWwZFYA7EB6qBjkuEegoZbHn1hKH0+lmiHUeUA5/8+IbCF2PnADrShkGekxtHiOtgddy2V08Ziq+dIclxRDkQlFa+//2LIgYKyaWGtgxyaI4EFcLJsqoYZmwHOq7w2mmSHUeUAy9+es+QdOkYhiMloI6UhTqyVFkbXAijgx2vnzIUkOk4cGYD9ouJ0mkmIMIwV88KXAsgg2fAJLDv7QusuXXH62cMBVdPM/z5/4/2dfGpD28YUi8fxwhJKQ4urI7bBXQcKFopcRzJBfWJ968Z0rE4Eh3sffOcIR/ouN//KHMcWTXJMaAjM6+cYPjxD7sjQdGdc/UUVRxHdlV35N0rhszLJxl+ojnyANBx2VdOUs1xFNXFh9+9BDvyF9QxB98C+VR2HMWNhUMgRwKjG5TmQDS1HUdUXUwIgEIOhEf7JKMOHM4O/D+I3fcf5MAHg9iBD0AO7BnEDuwBOXAaECcwQIb+Bwu4C3XTNIAAAwArXOV10YFw+gAAAABJRU5ErkJggg==") no-repeat;
        background-size: 20px 20px;
    }

    .page-index .studentwrap {
        padding: 0 15px;
        position: relative;
        font-size: 16px;
        color: #666;
    }

    .page-index .studentwrap:after {
        content: " ";
        position: absolute;
        left: 0;
        bottom: 0;
        right: 0;
        height: 1px;
        border-bottom: 1px solid #e4e4e4;
        color: #e4e4e4;
        -webkit-transform-origin: 0 100%;
        transform-origin: 0 100%;
        -webkit-transform: scaleY(0.5);
        transform: scaleY(0.5);
    }

    .page-index .studentwrap > p {
        position: absolute;
        left: 0;
        padding-left: 50px;
    }

    .page-index .studentwrap > p i {
        color: #ccc;
        margin-right: 15px;
        font-size: 20px;
        position: absolute;
        left: 0;
    }

    .page-index .studentwrap .btn-bgt {
        position: absolute;
        right: 0;
        width: 20px;
        height: 20px;
        background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo0ZDQ2ZTcwMS02YzQ4LTJmNGMtYWY2ZS1kYTM1NzhkMjEwNjciIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NTNFMTlFOTlDMDE4MTFFNkFGRjBBMjZFQTdDRkRGNjkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NTNFMTlFOThDMDE4MTFFNkFGRjBBMjZFQTdDRkRGNjkiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MzJhN2Y4MmEtYThlOS1lZjQ0LTgzNTgtMzA1YzgyZGYzNWY4IiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6ZmU4MmNjODMtYmRlNS0xMWU2LWE2NDQtYjZhZWQyMDYxYzE0Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+DFY62gAAANlJREFUeNrs2DEKwkAQBdDJYpegFjnBNopHSJEiZ/ISitfRUsFCbyBYJCdIoZJYbpwPCeQGGeF/+Mss2zySbqKu66SqqpWIHLS5di7T5qO9arfe+2dUluVaL3ftUmzlpc1meuyBS5JE0jQV59ykqhCC1HUtTdPgg+2gKfBgAYfAAEufAqJ4eLCSkSV2YjwEEkgggQQSSCCBBBJIIIEEEkgggQQS+N/AFgM2m1YysrQAnjFh7WoBOayA+1ywRN/ocNMujP3dtzZz3vsHBu1R+zUAg+EEE2w/AQYA6l06Rb4GfYAAAAAASUVORK5CYII=") no-repeat;
        background-size: 20px 20px;
    }

    .page-index .studentwrap .btn-bgt.active {
        position: absolute;
        right: 0;
        width: 20px;
        height: 20px;
        background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo0ZDQ2ZTcwMS02YzQ4LTJmNGMtYWY2ZS1kYTM1NzhkMjEwNjciIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6Q0YyOEQ4NThDMDFBMTFFNjhGODhCNTcwMDJFMTdENzQiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6Q0YyOEQ4NTdDMDFBMTFFNjhGODhCNTcwMDJFMTdENzQiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OTAwNGU1ZTEtNzU0ZC1kMTQ5LWFmMmMtMzdhMWVhOTVkNzE0IiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6MDI3MmU1ZTUtYmRmYi0xMWU2LWE2NDQtYjZhZWQyMDYxYzE0Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+zKHQUAAAAn9JREFUeNpiVN63jgEI4oG4FoiVGQYHuAvEzUC8kAVIZAHxVIbBBUABtQCIuZmARAnD4AUlIAcqDGIHKoAcyDiIHcjIxDDIwagDRx046sBRBw4nB4JqhHJlHYbLdn4Mu8xdGQz4hAaPA0GOa1E3ZEiVU2XgZGZmUOLiYejUNBocDgQ5rkndgCFcCrXal2LnGngHghzXoGbAECmliCG37Nm9gXUgyHH1avoM0dKYjlv74hFD192rlDsQZImziCTQEiUGAVY2khxXq6rHEAPUhw42AB1XdeMcw9///wmaw0JIQaWKLkOSrAqYnSWvxhB74QjDvW9fCBpcBdQXJ4PZg9j08jFDOZGOIyoEkRO2ODsnwxIDWwZFYA7EB6qBjkuEegoZbHn1hKH0+lmiHUeUA5/8+IbCF2PnADrShkGekxtHiOtgddy2V08Ziq+dIclxRDkQlFa+//2LIgYKyaWGtgxyaI4EFcLJsqoYZmwHOq7w2mmSHUeUAy9+es+QdOkYhiMloI6UhTqyVFkbXAijgx2vnzIUkOk4cGYD9ouJ0mkmIMIwV88KXAsgg2fAJLDv7QusuXXH62cMBVdPM/z5/4/2dfGpD28YUi8fxwhJKQ4urI7bBXQcKFopcRzJBfWJ968Z0rE4Eh3sffOcIR/ouN//KHMcWTXJMaAjM6+cYPjxD7sjQdGdc/UUVRxHdlV35N0rhszLJxl+ojnyANBx2VdOUs1xFNXFh9+9BDvyF9QxB98C+VR2HMWNhUMgRwKjG5TmQDS1HUdUXUwIgEIOhEf7JKMOHM4O/D+I3fcf5MAHg9iBD0AO7BnEDuwBOXAaECcwQIb+Bwu4C3XTNIAAAwArXOV10YFw+gAAAABJRU5ErkJggg==") no-repeat;
        background-size: 20px 20px;
    }

    .page-index #t_search {
        border: 0 none;
        border-radius: 7px;
        color: #FFF;
        font-size: 20px;
        height: 44px;
        line-height: 44px;
        text-align: center;
        width: 100%;
    }

    .page-index .background-action {
        background-color: #ff5346;

    }

    .page-index #t_search {
        border-radius: 2px !important;
    }

    .page-index .background-action.active {
        background: #d9453b;
    }

    .page-index .background-native {
        padding: 25px 15px 0;
    }

    .page-index .fun-list {
        display: -webkit-box;
        padding: 30px 0 15px 0;
    }

    .page-index .tips-list {
        display: -webkit-box;
        width: 80%;
        margin: 0 auto;
        padding-bottom: 30px;
    }

    .page-index .fun-list .fun-item,
    .page-index .tips-list .tip-item {
        -webkit-box-flex: 1;
        width: 0;
        text-align: center;
        display: block;
        position: relative;
    }
    .page-index .fun-list .fun-item:nth-child(1){
        width: 31.5%;
    }
    .page-index .fun-list .fun-item:nth-child(2){
        width: 31.5%;
    }
    .page-index .fun-list .fun-item:nth-child(3){
        width: 37%;
    }
    .page-index .tips-list .tip-item:after {
        content: " ";
        position: absolute;
        right: 0;
        top: 7px;
        width: 1px;
        bottom: 0;
        height: 9px;
        border-right: 1px solid #e4e4e4;
        color: #e4e4e4;
        -webkit-transform-origin: 100% 0;
        transform-origin: 100% 0;
        -webkit-transform: scaleX(.5);
        transform: scaleX(.5);
    }

    .page-index .tips-list .tip-item:last-child:after {
        border-right: none;
    }

    .page-index .tips-list .tip-item a {
        color: #c9cacc;
        font-size: 12px;
        vertical-align: bottom;
    }

    .page-index .tips-list .tip-item i {
        vertical-align: middle;
    }

    .page-index .hhh-wrap {

    }

    .page-index .hahahaha {
        width: 174px;
        height: 16px;
        display: block;
        padding: 10px 0;
        margin: 0 auto;
        text-align: center;
    }

    .page-index .tips-list .tip-item a:active,
    .page-index .tips-list .tip-item a:hover,
    .page-index .tips-list .tip-item a:visited {
        color: #c9cacc;
    }

    .page-index .tips-list .tip-item:nth-of-type(1) i {
        margin-right: 5px;
        width: 16px;
        height: 16px;
        display: inline-block;
        background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo0ZDQ2ZTcwMS02YzQ4LTJmNGMtYWY2ZS1kYTM1NzhkMjEwNjciIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NjM0RUU2M0RDMDE4MTFFNkFGRjBBMjZFQTdDRkRGNjkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NjM0RUU2M0NDMDE4MTFFNkFGRjBBMjZFQTdDRkRGNjkiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MzJhN2Y4MmEtYThlOS1lZjQ0LTgzNTgtMzA1YzgyZGYzNWY4IiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6ZmU4MmNjODMtYmRlNS0xMWU2LWE2NDQtYjZhZWQyMDYxYzE0Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+Bz8mMQAAAs9JREFUeNrEVz1vE0EQXX/EMvb5fGcSmTJR0oECogkFDUqDAh0NNDSYH5AGKOkgNPAD6KGADhBNRMNHRRRZ0DlCpIsT7Ni+cywj28xbxuhyub1bJ0Z+0tNZmbmZl929mdnY181vQhMG8RrxCvECcY6YZ1uD+IO4SfxAfEt0dILGNAQsEO8TbxGzmmJd4gviGrES5hgPsaWJj4nfiaURkgv2LfG7axxrJAHzxC/8n6fE8YF373GsBV0BF4mfeJ/HBcT6yLFDBUDle2JRjB9Fjn1oJZKe36eIr4gzR05qLCYsyxaGYYhEIhGZqdfrCdd1RL1eF4PBwGtC7NfES8QD/wo8JJ4PCmjbBZHP57WSA/AzzbwoFE4HmRc516EtwKFbVRYAwzjWmoe8tzrciuEWPCBOKT+V+F+d+/t10Wg0/MsauF1YMfxWYIpzlhA5x0UmElHJAdghVAM3kRsCVnSLTFTyEf2QcwUClsXksBznUzkpLCb5C9DC7OzcuAXMYwXMCa6AGRcTBgQ0dZ1RWre3fyo/M/w9zB6AJgRsaXs3G6Lf78t6EGxvSjuemtiCgHKUF4LKDaP6jqqIZxByOVPa8dSsB2V8BevEu2FejtOSSW3bllTBb0dHjMA6BLzjGS4btveydGX12jFWzHHQjmthbm3khoAW8SXxTlhprdVqkmMEhtbWsBs+It4O64jpdFr291QqekTsdrsk9pfodDoql9888P6bB/AlPFVOlpS0WDyjlVzT/9lwXE/6JqKrQb3BsizZ27EVe3u7ot1uB55w+GQyGTE9PcNzgSWq1eqRk++diLwCMKPdIH72z4UBQZRnxXVdSQV2OUdbNRVXeBV2/kPV3eHYlah7wQbxsk6BGgFljrmhezOCyiXiExzqEyTucowl1R0xrBt2+Gp2lvjcu28aOOB3znGMzklux97r+XXf9dwaNkLf9fyN7vX8jwADAMUY6Nv+jUdYAAAAAElFTkSuQmCC") no-repeat;
        background-size: 16px 16px;
    }

    .page-index .tips-list .tip-item:nth-of-type(2) i {
        margin-right: 5px;
        width: 14px;
        height: 16px;
        display: inline-block;
        background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAhCAYAAAAoNdCeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo0ZDQ2ZTcwMS02YzQ4LTJmNGMtYWY2ZS1kYTM1NzhkMjEwNjciIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NjEzNDZBQUNDMDE4MTFFNkFGRjBBMjZFQTdDRkRGNjkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NjEzNDZBQUJDMDE4MTFFNkFGRjBBMjZFQTdDRkRGNjkiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MzJhN2Y4MmEtYThlOS1lZjQ0LTgzNTgtMzA1YzgyZGYzNWY4IiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6ZmU4MmNjODMtYmRlNS0xMWU2LWE2NDQtYjZhZWQyMDYxYzE0Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+sdYJFwAAAlVJREFUeNrsl09IFFEYwHfFCmW1khQklA6ReYhETAQxvHgIEokQL4IQRGCJ0CHIm4gl/lfQ0oMI3USU6piFoFEGgocIlaxLf6BScVW21r+/Lz51iJ11Zmd2Tz348Wbe++b7zc689+atd3rmvcdmOQ99cAtm7VwYZ1N0Hd7AZXir567LMmEIhuGEth3X8yHtdyzLg36Yh3KTmHLt79d40+LlnZ2l/gNHIBWyoBCK4ZzHfhHxOLyGOfgJG3BMZOscJHqiXwLyGP2e2BS/yFZjKfP/lzksX2Ihm4BSqIqPkmwbRqE5yZfwThpW1wKn3JYFYBDakXxUSTpVJyyEk33WdfCkBckv6IUeJD9UIrmroQGS4b40rJgkKNA52AU3TWI+6V0PIFnfa0SUT/UIcg2xK+F+WRYJJrhQvltBuG3om4YWWfWJ2TJI5Ek06c39u8j7w8m6ufgSyTapazif0g/nK9peGgPp91JVQiukmc2zcLIcuCOPieQ71E9CBSHK1vdV7HRS15PstIkkAR5wOGNBZEkmo6gthOgq1QcZYXDUzeWqguQ3VJIBIxw+hzN210b5eMqdfYeUQ4LXwBfhZF+C9DheflDnymHF52Bl6RLP3lyQObMQpYVY8jbv766w/tZ5EnRZJPkqNf/BLKdBNp21LstqNe/fEs/oMnY+1oHS6IKoTvIZ84fapMpEvQtbEUpktbkHD63uiDvgCizaFC3DNR1wtrbfL+AiPLMokrgL8DTSvf5XKIMSmDSJmdT+Mo13/C9mDIr0SyAfxW86mHK0fcxKkl0BBgAVEMLiY4AuXAAAAABJRU5ErkJggg==") no-repeat;
        background-size: 14px 16px;
    }

    .page-index .tips-list .tip-item:nth-of-type(3) i {
        margin-right: 5px;
        width: 15px;
        height: 12px;
        display: inline-block;
        background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAYCAYAAAACqyaBAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo0ZDQ2ZTcwMS02YzQ4LTJmNGMtYWY2ZS1kYTM1NzhkMjEwNjciIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NjU2RUI4RkVDMDE4MTFFNkFGRjBBMjZFQTdDRkRGNjkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NjU2RUI4RkRDMDE4MTFFNkFGRjBBMjZFQTdDRkRGNjkiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MzJhN2Y4MmEtYThlOS1lZjQ0LTgzNTgtMzA1YzgyZGYzNWY4IiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6ZmU4MmNjODMtYmRlNS0xMWU2LWE2NDQtYjZhZWQyMDYxYzE0Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+NFYTpAAAAXhJREFUeNpiPHvhijcDA8NsIJZkoB94DsQJTANgMQPUvjlMA2AxDMgyMQwgGLWcXLCZUssPAvF/MvSeBOJAID5PZlarBVnuAMS+QPyDBM0gxxYC8V8gLiLR4jtAbAjELbBg3wrEzSRYvACIj0P5B4B4GQmWFwPxSxCDEVjCwQQloMGBDRwG4pVAfAmILwLxJyxq+IBYH4gNgDgSiC2xqPkJVfcLPcG9AOIPOCzXAuJDUEd8wqHmE1T+GFQ9NvAGZjG21M6GQ5MwEO8FYg0CQaoLxNuBmB+HvAgQs2KzXAeIufAYLArEu6EG4JMXxWMGOxC7YbO8gojEIoMnW4J8JE6EGROh6QtsOcgn04E4mgiNH4H4LZ68+5MIM5SB+DIQNzFBNWUQmU0ewGokIO4H4idA3A3E0tAQuU+kOSAP17IACRYS8ug/IF4MxOFICacEiPOAeDkQ/yaltAHlc3KK1tFabWhb/nyA7H4MsjwNVsvQEYDqkVSAAAMAzlFMKd7Hs6EAAAAASUVORK5CYII=") no-repeat;
        background-size: 15px 12px;
    }

    .page-index .fun-list .fun-item a {
        font-size: 14px;
        color: #666;
        width: 100%;
        display:block;
        position: relative;
        text-align: center;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        white-space: nowrap;

    }
    /* 极速抢票 */
    .page-index .fun-list .fun-item:nth-child(2) a:before {
        content: '';
        display: block;
        position: absolute;
        right: -20px;
        top: -14px;
        width: 39px;
        height: 17px;
        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAAAjCAMAAADrNwfvAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABjUExURUxpcf9OQ/9NQ/9NQ/9PRP9OQ/9NQv9NQv9hUP9USf9OQv9PRP9OQ/9NQv/////29v+Vj/9hV//Qzv9TSP++uv9XTf9tZP+0r//s6//HxP+Eff/i4f+inf+Nhv+ppP/Z1v96ckNuX1MAAAANdFJOUwDauZRNg8fzBhjjMJff9LW2AAACGklEQVRIx62W25arIAyG8Vidiqggguf3f8qdoItD7Z41M/a/iKXCZxJDhBCrIk3i6EF/rkcUJ2lBriqr32A8YFW+kIrsbyRDywLfypzeUe659vyi9/T1tF7dRQHs9KzI6X3lR84y+0fbnj/EHs7sW6P+nKZba60yE6F7g0LtdBxArEMLc4UG7VTURt0xTdaGVcvgbWKUlRtzwcZ9BTGNFtxAKGsAiW4JYI0MVDNrR7u4gmwFhTVLuo/jqAYw+HC2UDoBS+DNAVgt3GjqxloX56MgqUfix4quYxOY5R3rvzFSmpLEDSSki3KUaszFsRTmTSGL9564z0pI7I0GNra1kwbWLKUC1jSDNmSt3oR68lkxiYJ0sZZ7AhauCGJsJWhV0lwCVkTCPQ0pWLZTvclX31/yRWmjjkdvQVW8sMCVedpRTd273OttAXUXVheyghh7JoHVoFaftakJxF5Zqw5jDDYjzpmVQGmfBeX6LkYtwtwn/nBbMQlm7+0HCzYAa/p6v7KWZjge4WrCr1WJ5TczZXSwsGihxPmVNUzbzMNa9ffQsLmEShsjRHnk5RJj2Kqh67gguVlpWLLRzBARuKC70D/Y8B2rCnoOX9DnZTDNSbsO0M5gdiFmu5FHcXWrDHvhHWUf79F+Z7377SDlfZT9pqW3A3Tf2vgeyT8DFLfSFZ5Nnn/GXM9MZ31FcZY+352mfqP8I5QzX+RD+gf7WYBrCSGRNgAAAABJRU5ErkJggg==);
        background-size: 39px 17px;
        z-index:99;
    }
    .page-index .fun-list .fun-item:nth-child(1):after {
        content: " ";
        position: absolute;
        right: 0;
        top: 5px;
        width: 1px;
        bottom: 0;
        height: 15px;
        border-right: 1px solid #e4e4e4;
        color: #e4e4e4;
        -webkit-transform-origin: 100% 0;
        transform-origin: 100% 0;
        -webkit-transform: scaleX(0.5);
        transform: scaleX(0.5);
    }
    .page-index .fun-list .fun-item:nth-child(2):after {
        content: " ";
        position: absolute;
        right: 0;
        top: 5px;
        width: 1px;
        bottom: 0;
        height: 15px;
        border-right: 1px solid #e4e4e4;
        color: #e4e4e4;
        -webkit-transform-origin: 100% 0;
        transform-origin: 100% 0;
        -webkit-transform: scaleX(0.5);
        transform: scaleX(0.5);
    }

    .page-index .fun-list .fun-item:nth-child(1) i {
        width: 21px;
        height: 21px;
        background: url(//file.40017.cn/huochepiao/union/iconfont/20170315/icon_quikebook.svg);
        background-size:21px 21px;
        display: inline-block;
        background-size: cover;
        vertical-align: top;
    }

    .page-index .fun-list .fun-item:nth-child(2) i {
        width: 19px;
        height: 22px;
        display: inline-block;
        background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAsCAYAAAAJpsrIAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2ppVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo0ZDQ2ZTcwMS02YzQ4LTJmNGMtYWY2ZS1kYTM1NzhkMjEwNjciIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NDZDMTI2MjJDRDZDMTFFNkFFNkVERUE1NzI1NUI1RjAiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NDZDMTI2MjFDRDZDMTFFNkFFNkVERUE1NzI1NUI1RjAiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo2NzI4QjAyRUNDQTYxMUU2OTVEMDkzRTdBQjFDNUEzNyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo2NzI4QjAyRkNDQTYxMUU2OTVEMDkzRTdBQjFDNUEzNyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PoSP2QwAAASvSURBVHjazFhJTFRBEK0ZcENhxJiouCuI4oIHL1w0bpnEm3Gi4IpGInjAAHryrAfFDTVuUdyXiN4wohHEGI0mSkQBZVRcgvsGKCKrVXT//7tnJk73nyGxkvrzf8+frjfV1dWvytHV1QXK4nEbd1tQN6L2VvhVK2o+6mYoKlE25QR7ogoK+HvZugbsAsvnnlCRNtQCXQORNoFt5iqKGBMOCFEcWjH277iTgWnEkz1gluFgEthjNgE64T8VuzHWD3UO12moE3y+f41ai1qJHi/Dzxvoud89uZSTUXNRF6G6NOw0oF5C3YEAq8MJbFj3pABLQlz+TtQLqHkI8H2owNLwehA1RhofOQYgZRbAuHiAocNxcaMAovoDNP8C+N0M8KEeoO45wJ1ygLevfGdtRM1CcGf1gXncDu6lHGk8YRJAehbAqLHqfnr9EuAE/jdvje83u7j3utSAMVCFqKskDy3PAEiaZn8hqysBTh/x9eAp1NUIrkMlXeRLoGbNx2O7IDRQJPT7rXvZfJasQN0d3GMedypez5nPCxYCpK0Jf6I6fxyg+JI4shS9di4wMI87Dq81ZqDPnAeQsaHnsmjhfoDSq+KGSEJw9YGWcrsJasRogLWabOXHN+Qcf9TfT1/PYpcJ2d3mH2MeNyXPVPN55Tr0pwZJaG8HuHebfSqndwezY0kqxyF5LNd8ppQwaaqet55UALS0sHymIxOnMHuWo3IsYB43zeaxXJylN/nXzyyZxsToeTmwvcWEx/DYbDO2aM11kmcHpp+K+0h6cBPFDLS3CcieZTOayIEBbI75Eh0zOlKLZ3JjA7t3DbS/Q1Nmik+zDWBW5qSzT1WaGhgwc1+57AMbmyA+JRvArNEhcYp8FZfu4X22lCawWPvAhkp2EwyiaM3Yf4DaRBTsFPSiXLns/15iErK46cHnk+3GOoXkxrmpwnantFD1SC1PUaJWkb79xKdop3AcMCEuFUzqkTm3KZSVBMqluLwtEvNuMpbyu+m1Xz+De218IlNfefQA4MUzdh8RgUuYrB5jZNeS74bHvObQx3f2A/jLRxk8MVpV+SDZ9RrAKqWgtiOtrVY+69OXBb2O1Hkl3xvAysyhu7fsAaMdalCoKbgLe/XW+71st8wAVkoB1333po6p9jJ+Yp+DBusdaf42CUepk5fxtBUvmi8eP2DPYw6cLnmG/kEu27tIeETas5PXfayaqXmsPjEtYcMPgHgsyGMH6YF6+kSsnjo5DoGPFZVUERO3apfDVswEDXxkrdFICpKS9UDR/CcPiSMXOA4/ar3JTLZUYh3dq9gz7IP1wXyWu3Tk2D6xlGvk9gOUb0UllEwyzefy6+jDQrWjJ1KzP0Pz3rwmjmQahUjgupKVUFadV3yZ/bNwCs1XLB34e8TS7V9tKOL/FMUrWVYpwaOmllXiurWAKLShqBKX09FJvzZEkN5FBN8h2SH3LggIpQT/3kVBtxN82gOq3Z5leD3AubjM04kOE/Okbk9UFDv8iZ00G90eL8vo/gm7iXd7zoTaH4vj/Yxw9cc28o0W1o5iHi/1ojUAkYeKeEexqidanWIPdq5PD9bFOV0jb23WctZSaqcH+1eAAQA3aIrNQeZfXgAAAABJRU5ErkJggg==") no-repeat;
        background-size: 19px 22px;
        vertical-align: top;

    }

    .page-index .fun-list .fun-item:last-child i {
        width: 21px;
        height: 21px;
        display: inline-block;
        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4BpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo0ZDQ2ZTcwMS02YzQ4LTJmNGMtYWY2ZS1kYTM1NzhkMjEwNjciIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NjkxMjMwQjBDQ0E2MTFFNjk1RDA5M0U3QUIxQzVBMzciIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NjkxMjMwQUZDQ0E2MTFFNjk1RDA5M0U3QUIxQzVBMzciIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDplMTU5OGMxZi1lYTYzLTk3NGUtODJkOS04MjgzZmEzZmY4YmYiIHN0UmVmOmRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo5MTAxZjExNC1jY2EwLTExZTYtOWU0Ni1lY2RmOWI4NDk0YjQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4WLdAyAAAFM0lEQVR42rRZa4hVVRQ+c8xpLIfIMDExYZycmlDHLB9ZwRgaBsJoWhhDgdpDJq/6x7FfU0Kj/ao0MvpjNFLB+Mi0hPExRaFdJ++MI5raIAiRmJiY5jOZviXfhuXmnHPXuc5d8ME+++y99nf2Yz32Kent7Q2cVLZvCVJIKTAZqAXGAKOAocBAvr8InAKOA91AO7APuBansKd2VuxgdwTpZRzwJjAHGJTQbhDxKCAMmoBzQCvwKdCZZtAwRduxwHfAAeD1PCTj5F72FR3fU6dJLDNaBjQDiyPay7LuAA4BJ4DTwL98dzcwBKjg1ngOqOK7EmAGMA34GHgbuJJEoiTPHq3kUtV49R3ACuBoyhl9GFgNPOHVdwFzsUd7Cll6UbbXI5kDpgN1BZAM2KeOOnKqXsb4BRM1MS1R6bAHGKzqMsBM4HBw+3KYujKq7j5gVxzZKKKy3NuUmZG9MxfYFPS9bKL1uMRnGXMbyFbmI1rGPelm8hJJ7g2KJ2JbX1JkZexWkC1LItrs7clXvb1ULMlxLL1n34s89fgCsWm/KhOUSbHc4pVeppd6kHUngR+AL2nGLPICsIbl/4DxsATd/ow2K5I5I8n+/PLdwGvc36XEQ6yTd+9zW1n2bE7Z+OZbZhSzOY7eooT10w2nW0i2AE8bZ+tnoB64nqeduNw2lns5q51uRhsUyQ6jCXrXIykHbgJnroxlfQifAt4xmq4O5cEabhZG7tl8J13fPXz5rMGYiyvcCfTj8zLgw5i2S9S7G3SbxwwebDfL58UVhzTujuRvRo8zT5Hcl0BS5CO2CdhnntGDOR7CbaIQnaoa7DTut1rPY+WTTEzfJGlT5amhF2odNCoZocrdhvbdMX2TRHO5OaOjVMWJIhn0UlW+ZuyjuVSEjBmdnDEqOanKYwztq1T5D+MYmstgIVquKi4albSr8hpD+7Wq/JNxDM1lYFjgUn5NUxMwwVua0HYJ2zjz9FUhAwrRC5p5igB4g3r+AHglot1sz3RtSBFway7/hDT2gQqxrNLkLeO6iDbrPBfalEK/5nI69CKbihSKrjPoOMTnu4DHvIjqfnWCGwx+Pojhcjz07JU1fR3BiEhy89EqyM55GepfatAs+1jt6C32PWRuFKioKV/E1Aj8yEhogHq3KKL9Ii97qGffRupKkmnayoT80vMqGKiM6Sj29hu6w/5edC6J2hcRfTZzwAPex2aoa0jMWCOBR9xBkgw1RKx3FYWNqlHU6X0A2OqlKfuBSRIvAtsTZmYX8Djb7vfSDdE5LKKP5iA53FVnRz9RLxYweHVSznRiuKqbz6grm+JwZNlnvqobTt3lXuC8UFsOuTwLeYuW86KV1aq8immFE1nm9bfh99dTh07PV8WM3ea2jfZMjUyoApoZSbSe4U2ckxfzLLNVtjMNdzKLY81WJk64LHdXkaG6m+zyfLL48JXezLb2YUS10ZvJld74a7Xp9C/JBkTcNznjPixFdJXG+/wZcUsoBCdj8i7HXUBc5pL4hL4tAkkXym2NqJujScbdPfVws9/wLgbqi0C0nroDFV3NjLp+DBNMyRTgrKprYZJW0wcEa6irRdXJWFNAMpv2fjTLOLJL1U2if5eDVl0AwWpmpZ3U5UTGeDLJLue7Gv+dZOV0vqXaLyaOAFto6yRXP6Uic4knhzINEe9V5zkSZ4JMV+OWO/wrvGD4nIRneDNUXeDy7yBBU+abJhURhc/TIH8G/F0AuXPsO566rOl5Qf+ZZH+9waXXP8SqgugfYscC4w+xJPlfgAEAI3FIkjLYPNUAAAAASUVORK5CYII=) no-repeat;
        background-size: 21px 21px;
        vertical-align: top;
    }

    .page-index #queryhistory {
        padding: 0 15px;
        font-size: 14px;
        margin-bottom: 5px;
        color: #999;
    }

    .page-index .select-list {
        height: 21px;
        overflow-y: hidden;
        margin-top: 15px;
    }

    .tc-header {
        position: relative;
    }

    .page-index .infos {
        height: 35px;
        background: #ffe8a1;
        line-height: 35px;
        color: #9a7126;
        font-size: 12px;
        display: -webkit-box;
    }

    .page-index .infos .infos-list {
        -webkit-box-flex: 1;
        box-flex: 1;
        white-space: nowrap;
        overflow: hidden;
    }

    .page-index .infos .infos-list li {
        display: inline-block;
        padding-right: 15px;
    }

    .page-index .infos i {
        width: 28px;
        height: 35px;
        display: block;
        line-height: 35px;
    }

    .page-index .infos i:first-child {
        display: block;
        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAYAAADgKtSgAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo0ZDQ2ZTcwMS02YzQ4LTJmNGMtYWY2ZS1kYTM1NzhkMjEwNjciIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NEMzRUQwRTVDMDE4MTFFNkFGRjBBMjZFQTdDRkRGNjkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NEMzRUQwRTRDMDE4MTFFNkFGRjBBMjZFQTdDRkRGNjkiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MzJhN2Y4MmEtYThlOS1lZjQ0LTgzNTgtMzA1YzgyZGYzNWY4IiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6ZmU4MmNjODMtYmRlNS0xMWU2LWE2NDQtYjZhZWQyMDYxYzE0Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+UN3BkwAAAZ5JREFUeNqs1U0oBGEYB/DZ4UARe/BxkItyII6ySlIOOAhREu3iyoGDSBGOkgMnWuEkX7U+ko+Ug4ODXCQpOSC1yVeZ0JL/W/+tbWvN8zb71K93emfmmXeeeWbGNdubbwijDSZhHgYlJ5iCY1wwBkuQCR7pahJt9ifDIjRHzCXEI3k2BKBEmEdd9EtSliI4FSZWcQzX0GCXvAZOINeQxw+PX4fhWMm7YQtSDb2ohgM+/FHwhpOPQxBeYFrngUXU24J6OOfcFKSp5AOQAemGfmTBPReoLtAKIXCDzxS043+Rw4UNQRlcwTL31ZmGsziDXdbay7kAx2KnyVUccczjeMfRHY/kKRyDHMMt/Oo0uWqCrqhyNHK8UMk/HCRv50oPYRUKoYn7dlSn+KCTq/BoJp+DB9iDJFhh972DX618DWrZSj18laXxCRvc3oYCbvfBc3TNZ3ihN8072IRKbqtvvz/Wh2ufd3Gj2TGP0AIjdt/zSyjlLZcLkldwoZb0N/cEVbAgrL2l+w/9hg7oh1/OhaS1kr5EE3w5btnTovgTYAAk80xUNhtvmAAAAABJRU5ErkJggg==) no-repeat center;
        background-size: 11px 11px;
    }

    .page-index .infos i:last-child {
        display: block;
        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo0ZDQ2ZTcwMS02YzQ4LTJmNGMtYWY2ZS1kYTM1NzhkMjEwNjciIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NEU1MkUzRDZDMDE4MTFFNkFGRjBBMjZFQTdDRkRGNjkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NEU1MkUzRDVDMDE4MTFFNkFGRjBBMjZFQTdDRkRGNjkiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MzJhN2Y4MmEtYThlOS1lZjQ0LTgzNTgtMzA1YzgyZGYzNWY4IiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6ZmU4MmNjODMtYmRlNS0xMWU2LWE2NDQtYjZhZWQyMDYxYzE0Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+omMm/AAAANVJREFUeNqU0rENwjAQheFLZGAOKGAIZqCBNEkBM7AOC9AgKlZgB2hgjShECs/SGYHx2WdLv9I4nxxfisN+XhHRGm1RT3lrjGboVjJSoyMymcgJXdHCvrhDI1TxhlpxMoes0AU9LfRCDW/QYD6yQZ37FC0WRMi7kxQmIhS4XAkrYwgJUwphkxhCkXGHMBEhPrK0Cj6JWy0apM1GOeL262QNnzgJhaYzeJ/5hxntfxK4sx/MKBFpAB/MKJEkZjKQKGahKVoqEQnrLXRn6KFEfMw+z28BBgBDSVaVUeptzgAAAABJRU5ErkJggg==) no-repeat center;
        background-size: 11px 11px;
    }

    /*.tc-header:after {
        content: " ";
        position: absolute;
        left: 0;
        bottom: 0;
        right: 0;
        height: 1px;
        border-bottom: 1px solid #e4e4e4;
        -webkit-transform-origin: 0 100%;
        transform-origin: 0 100%;
        -webkit-transform: scaleY(0.5);
        transform: scaleY(0.5);
    }*/

    .page-index .select-item {
        display: inline-block;
        padding-bottom: 10px;
        margin-right: 10px;
    }

    .page-index .select-item a {
        display: inline-block;
        position: relative;
        color: #999;
        font-size: 13px;
        padding: 1px 5px;
    }

    .page-index .select-item a:after {
        content: " ";
        width: 200%;
        height: 200%;
        position: absolute;
        top: 0;
        left: 0;
        border: 1px solid #e4e4e4;
        -webkit-transform: scale(0.5);
        transform: scale(0.5);
        -webkit-transform-origin: 0 0;
        transform-origin: 0 0;
        box-sizing: border-box;
    }

    .page-index #queryhistory .querybox_cont {
        width: 100%;
        height: auto !important;
        margin: 0 auto;
        text-align: center;
        color: #a5a5a7;
        font-size: 11px;
        overflow-y: auto;
    }

    .page-index #queryhistory .querybox_cont ul {
        list-style: none;
    }

    .page-index .linebox {
        position: relative;
        text-align: center;
        z-index: 0;
        margin-bottom: 20px;
    }

    .page-index .linebox span {
        background: none repeat scroll 0 0 #f2f4f7 !important;
        display: inline-block;
        padding: 0 10px;
        position: relative;
        z-index: 12;
    }

    .page-index .linebox p {
        position: absolute;
        left: 15px;
        right: 15px;
        top: 50%;
        height: 1px;
        border-width: 1px 0 0 0;
        border-image: url(//img1.40017.cn/touch/public/borderImage/border-dc.png) 2 0 stretch;
    }

    .page-index .history-item {
        position: relative;
        padding-bottom: 17px;
    }

    .page-index .history-item > div {
        width: 50%;
        box-sizing: border-box;
    }

    .page-index .history-item > div:first-child {
        padding-right: 33px;
        text-align: right;
        font-size: 11px;
    }

    .page-index .history-item > div:last-child {
        padding-left: 33px;
        text-align: left;
        font-size: 11px;
    }

    .page-index .history-item > p {
        position: absolute;
        top: 17.5%;
        left: 50%;
        width: 50px;
        height: 1px;
        margin-left: -25px;
        border-width: 1px 0 0 0;
        border-image: url(//img1.40017.cn/touch/public/borderImage/border-dc.png) 2 0 stretch;
    }

    .page-index footer .flex1 > a {
        color: gray;
    }

    .page-index #cityPage .search {
        position: absolute;
        top: 0;
        width: 100%;
        z-index: 90;
        background: #ededed;
        box-sizing: border-box;
        height: 49px;
        padding: 7px 10px;
        display: -webkit-box;
        display: -moz-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        box-shadow: 0 1px 2px rgba(0, 0, 0, .15);
    }

    .page-index #cityPage .search input {
        display: block;
        padding: 10px 0;
        height: 34px;
        padding-left: 38px;
        border-radius: 5px;
        border: 0;
        box-sizing: border-box;
        font-size: 14px;
    }

    .page-index #cityPage .search .search-icon {
        top: 15px;
        left: 20px;
    }

    /*样式覆盖 头部标题tiile 不居中*/
    #ui-view-1 .tc-header .tc-page-title {
        line-height: 44px !important;
        font-weight: bold;
    }

    .page-index #t_city input.fly-left03 {
        -webkit-transform: translateX(-155%);
        -moz-transform: translateX(-155%);
        -ms-transform: translateX(-155%);
        transform: translateX(-155%);
    }

    .page-index #t_cityinput.fly-left04 {
        -webkit-transform: translateX(-140%);
        -moz-transform: translateX(-140%);
        -ms-transform: translateX(-140%);
        transform: translateX(-140%);
    }

    .page-index #t_city input.fly-left05 {
        -webkit-transform: translateX(-123%);
        -moz-transform: translateX(-123%);
        -ms-transform: translateX(-123%);
        transform: translateX(-123%);
    }

    .page-index #t_city input.fly-right03 {
        -webkit-transform: translateX(155%);
        -moz-transform: translateX(155%);
        -ms-transform: translateX(155%);
        transform: translateX(155%);
    }

    .page-index #t_city input.fly-right04 {
        -webkit-transform: translateX(140%);
        -moz-transform: translateX(140%);
        -ms-transform: translateX(140%);
        transform: translateX(140%);
    }

    .page-index #t_city input.fly-right05 {
        -webkit-transform: translateX(123%);
        -moz-transform: translateX(123%);
        -ms-transform: translateX(123%);
        transform: translateX(123%);
    }

    .header-menu .hide {
        display: none !important;
    }

    .toast-bg {
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background: rgba(0, 0, 0, 0.3);
        z-index: 999999;
        display: -webkit-box;
        -webkit-box-pack: center;
        box-pack: center;
        -webkit-box-align: center;
        box-align: center;
    }

    .toast-bg .content {
        height: 44px;
        padding: 0 30px;
        line-height: 44px;
        color: #fff;
        background: rgba(0, 0, 0, 1);
        -webkit-border-radius: 3px;
        border-radius: 3px;
    }

    .page-index .fed-zx {
        text-align: center;
        width: 100%;
        padding-bottom: 46px;
        display: none;
    }

    .page-index .fed-zx.no {
        position: static;
    }

    .page-index .fed-zx.no img {

    }

    .page-index .fed-zx ul {
        overflow: hidden;
        width: 100%;
        padding: 6px 20px 0;
        box-sizing: border-box;
    }

    .page-index .fed-zx p {
        font-size: 12px;
        color: #ccc;
        padding: 25px 0 15px;
    }

    .page-index .fed-zx li {
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        width: 33.33%;
        float: left;
        text-align: center;
    }

    .page-index .fed-zx img {
        width: 102px;
        height: 25px;
        padding-top: 15px;
    }

    .page-index .fed-zx li em {
        display: inline-block;
        height: 12px;
        width: 12px;
        background: url("//img1.40017.cn/touch/hb/c/hcp/icon.png") no-repeat;
        margin-right: 5px;
        vertical-align: middle;
        background-size: 12px 12px;
        margin-top: -1px;
    }

    .page-index .fed-zx ul span {
        font-size: 12px;
        color: #b6becf;
    }
    .text-right {
        text-align: right;
    }
    .page-index .data-selected:after {
        position: absolute;
        left: 0;
        height: 1px;
        color: #e4e4e4;
        transform-origin: 0 100%;
        transform: scaleY(.5);
    }
    .page-index .data-selected:after, .page-index .search-inner:after {
        -webkit-transform-origin: 0 100%;
        -webkit-transform: scaleY(.5);
        right: 0;
        bottom: 0;
    }
    .flex-box {
        display: flex;
        display: -webkit-flex;
        display: -moz-box;
        display: flexbox;
    }
</style>
