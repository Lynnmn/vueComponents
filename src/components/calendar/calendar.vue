<template>
	<div class="calendar">
		<div class="calendar-header">
			<p class="calendar-title" :class="{'html-title': isHtmlTitle}" v-html="title" v-show="title !== ''"></p>
			<div class="week-number">
				<span v-for="item in weekList" v-text="item"></span>
			</div>
		</div>
		<div :style='{marginTop: title === "" ? "33px" : isHtmlTitle ? "85px" : "65px"}'>
			<div class="calendar-wrapper" v-for="item in calendar">
				<h3 v-text="item.year + '年' + item.month + '月'"
					class="{ this.title === '' ? 'top-low' : isHtmlTitle ? 'top-high-html' : 'top-high'}"></h3>
				<ul class="each-month">
					<li class="each-day" track-by="$index" v-for="day in item.dayList" @click="chooseDate(day, item.month, item.year)">
						<div :class="[addClassName(day, item.month, item.year), {'trip-time': isCurrent(day, item.month, item.year)}]">
							{{ (setFestival(day, item.month, item.year) !== 0) &&  (setFestival(day, item.month, item.year) !== 1) ? setFestival(day, item.month, item.year) : day}}
						</div>
						<span class="jia" v-if="setFestival(day, item.month, item.year) !== 0">假</span>
						<span class="jia" :class="{qiang: showQiang}" v-if="setQiang(day, item.month, item.year)">可预约</span>
						<span class="recent" v-text="setTip(day, item.month, item.year)"></span>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
  export default {
    props: {
      today: {
        type: [String, Object, Date], //'2016-3-5'格式
        default () {
          return new Date();
        }
      },
      title: {
        type: [String, Object],
        default () {
          return ''
        }
      },
      isAboard: {
        type: Boolean,
        default () {
          return false //有去程和返程，默认没有
        }
      },
      mode: {
        type: [String, Object],
        default () {
          return 'rangeFrom'
        }
      },
      leaveDate: { //离开日期
        type: [String, Object],
        default () {
          return ''
        }
      },
      backDate: { //返回日期
        type: [String, Object],
        default () {
          return ''
        }
      },
      endDate: { //日历可选截止日期
        type: [String, Object, Date],
        default () {
          return ''
        }
      },
      callback: {
        type: Function,
        default () {
          return function () {
          }
        }
      },
      showQiang: false,
      isHtmlTitle: false
    },
    data() {
      return {
        weekList: ['日', '一', '二', '三', '四', '五', '六'],
        year: 0,
        month: 0,
        calendar: [],
        festival: {
          // 2017
          "2016-12-31": "假",
          "2017-1-1": "元旦",
          "2017-1-2": "假",
          "2017-1-27": "除夕",
          "2017-1-28": "春节",
          "2017-1-29": "初二",
          "2017-1-30": "初三",
          "2017-1-31": "初四",
          "2017-2-1": "初五",
          "2017-2-2": "初六",
          "2017-4-2": "假",
          "2017-4-3": "假",
          "2017-4-4": "清明",
          "2017-4-29": "假",
          "2017-4-30": "假",
          "2017-5-1": "五一",
          "2017-5-28": "假",
          "2017-5-29": "假",
          "2017-5-30": "端午",
          "2017-10-1": "国庆",
          "2017-10-2": "假",
          "2017-10-3": "假",
          "2017-10-4": "中秋",
          "2017-10-5": "假",
          "2017-10-6": "假",
          "2017-10-7": "假",
          "2017-10-8": "假"
        }
      }
    },
    created() {

      this.init()
    },
    watch: {
      leaveDate: {
        handler(val) {
          typeof(val) === 'string' && (this.leaveDate = new Date(val.replace(/-/g, '/')))
        },
        deep: true
      },
      backDate: {
        handler(val) {
          typeof(val) === 'string' && (this.backDate = new Date(val.replace(/-/g, '/')))
        },
        deep: true
      },
      endDate: {
        handler(val) {
          typeof(val) === 'string' && (this.endDate = new Date(val.replace(/-/g, '/')))
          this.calendar = []
          this.createClendar()
        },
        deep: true
      }
    },
    methods: {
      init() {
        if (typeof(this.today) === 'string') {
          this.today = new Date(this.today.replace(/-/g, '/'))
        } else {
          this.resetTime(this.today)
        }

        if (this.endDate === '') {
          //默认结束日期为180天后
          this.endDate = new Date(this.today * 1 + 180 * 24 * 3600 * 1000)
        } else {
          this.endDate = this.resetTime(new Date(this.endDate.replace(/-/g, '/')))
        }

        if (this.leaveDate === '') {
          this.leaveDate = new Date(this.today * 1 + 24 * 3600 * 1000)
        } else {
          this.leaveDate = this.resetTime(new Date(this.leaveDate.replace(/-/g, '/')))
        }

        if (this.isAboard && this.backDate !== '') {
          this.backDate = this.resetTime(new Date(this.backDate.replace(/-/g, '/')))
        }

        this.year = this.today.getFullYear();
        this.month = this.today.getMonth() + 1;
        this.createClendar(); //创建日历数据
      },
      //创建每个月日历数据，传入月份1号前面用null填充
      createDayList(month, year) {
        const count = this.getDayNum(month, year),
          _week = new Date(year + '/' + month + '/1').getDay();
        let list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28]

        for (let i = 29; i <= count; i++) {
          list.push(i)
        }
        for (let i = 0; i < _week; i++) {
          list.unshift(null)
        }
        return list;
      },
      //计算传入月份有多少天
      getDayNum(month, year) {
        let dayNum = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

        if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)) {
          dayNum[1] = 29;
        }
        return dayNum[month - 1]
      },
      //根据当天和结束日期创建日历数据
      createClendar() {
        const endY = this.endDate.getFullYear(),
          endM = this.endDate.getMonth() + 1,
          interval = (endY - this.year) * 12 + endM - this.month;

        for (let i = 0; i <= interval; i++) {
          let month = this.month + i,
            year = this.year,
            _monthData = {
              dayList: [],
              month: '',
              year: ''
            };

          if (month > 12) {
            month = month - 12;
            year += 1;
          }
          _monthData.year = year;
          _monthData.month = month;
          _monthData.dayList = this.createDayList(month, year);
          this.calendar.push(_monthData)
        }
      },
      //添加日历样式
      addClassName(day, month, year) {
        if (!day) {
          return;
        }
        const _date = new Date(year + '/' + month + '/' + day)
        let className = [],
          festival = this.festival[year + "-" + month + "-" + day];

        if (_date.getDay() === 0 || _date.getDay() === 6) { //周末或周六样式
          className.push('weekend')
        }

        if (_date * 1 < this.today * 1 || (this.mode === 'rangeTo' && _date * 1 < this.leaveDate * 1) || _date * 1 > this.endDate * 1) { //当天和结束日期之外不可选
          className.push('disabled')
        } else if (_date * 1 === this.today * 1) {
          className.push('today');
        }

        if (festival) {
          if (festival === '假') {
            className.push('holiday')
          } else {
            className.push('festival holiday')
          }
        }
        return className.join(' ');
      },
      //清除时间 时 分 秒 毫秒
      resetTime(date) {
        date.setHours(0);
        date.setMinutes(0);
        date.setSeconds(0);
        date.setMilliseconds(0);
        return date;
      },
      //设置日期和假日
      setFestival(day, month, year) {
        const festivalStr = this.festival[year + "-" + month + "-" + day]

        if (festivalStr) {
          if (festivalStr !== '假') {
            return festivalStr;
          } else {
            return 1;
          }
        } else {
          return 0;
        }
      },
      //设置后5天显示 “预约” 字
      setQiang(day, month, year) {
        let flag = false

        if (day && this.showQiang) {
          const curDate = new Date(year + "/" + month + "/" + day)
          let time = this.endDate - curDate,
            cha = 86400000, // 前一个和后一个日期差86400000
            temp = 1483027200000 //12月30日

          //预约时间戳由结束日期减去各个日期的差是否在15天内
          // console.log(time, (time >= 86400000 && time <= 1209600000) || time === 0)

          if (this.today >= temp) {
            if ((time >= cha && time <= cha * 44) || time === 0) {
              flag = true
            } else {
              flag = false
            }
          } else {
            if ((time >= cha && time <= cha * 44) || time === 0) {
              flag = true
            } else {
              flag = false
            }
          }
        }

        return flag
      },
      //设置今天，明天，后天
      setTip(day, month, year) {
        if (!day) {
          return;
        }
        const _date = new Date(year + '/' + month + '/' + day)
        let tip;

        if (_date * 1 == this.today * 1) {
          tip = '今天'
        } else if (_date * 1 - this.today * 1 === 24 * 3600 * 1000) {
          tip = '明天'
        } else if (_date * 1 - this.today * 1 === 2 * 24 * 3600 * 1000) {
          tip = '后天'
        }

        if (this.isAboard) {
          if (this.mode === 'rangeTo') {
            if (_date * 1 === this.leaveDate * 1 && _date * 1 === this.backDate * 1) {
              tip = '去/返'
            } else {
              if (_date * 1 === this.backDate * 1) {
                tip = '返程'
              } else if (_date * 1 === this.leaveDate * 1) {
                tip = '去程'
              }
            }
          } else {
            if (_date * 1 === this.leaveDate * 1) {
              tip = '去程'
            }
          }
        }
        return tip;
      },
      isCurrent(day, month, year) {
        if (!day) {
          return false;
        }
        const _date = new Date(year + '/' + month + '/' + day)

        if (_date * 1 === this.leaveDate * 1 || (this.mode === 'rangeTo' && _date * 1 === this.backDate * 1)) {
          return true
        }
      },
      chooseDate(day, month, year) {
        if (!day) {
          return;
        }
        const _date = new Date(year + '/' + month + '/' + day),
          weekList = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
          week = weekList[_date.getDay()];
        if (_date * 1 < this.today * 1 || (this.mode === 'rangeTo' && _date * 1 < this.leaveDate * 1) || _date * 1 > this.endDate * 1) {
          return;
        }
        const choose = {
          week: week,
          date: [year, month, day],
          recent: ''
        }
        if (_date * 1 == this.today * 1) {
          choose.recent = '今天'
        } else if (_date * 1 - this.today * 1 === 24 * 3600 * 1000) {
          choose.recent = '明天'
        } else if (_date * 1 - this.today * 1 === 2 * 24 * 3600 * 1000) {
          choose.recent = '后天'
        }

        if (this.isAboard && this.mode === 'rangeTo') {
          this.backDate = _date;
        } else {
          this.leaveDate = _date;
        }
        this.callback(choose)
      }
    }
  }
</script>

<style scoped>
  .calendar {
    width: 100%;
    min-height: 100%;
    background: #fff;
    text-align: left;
  }

  .calendar .calendar-header {
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 101;
  }

  .calendar .calendar-header .calendar-title {
    height: 32px;
    line-height: 32px;
    background: #fff7dc;
    font-size: 12px;
    padding-left: 15px;
    color: #9e8052;
  }

  .calendar .calendar-header .calendar-title.html-title {
    height: auto;
    line-height: 20px;
    padding-top: 5px;
    padding-bottom: 5px;
  }

  .calendar .calendar-header .week-number {
    background: #556a72;
    color: #fff;
    padding: 0 1%;
  }

  .calendar .calendar-header .week-number span {
    display: inline-block;
    text-align: center;
    height: 33px;
    line-height: 33px;
    width: 14.2857143%;
  }

  .calendar .calendar-header .week-number span:first-child, .calendar .calendar-header .week-number span:last-child {
    color: #04be02;
  }

  .calendar .calendar-wrapper {
    position: relative;
    color: #000;
  }

  .calendar .calendar-wrapper h3 {
    position: sticky;
    position: -webkit-sticky;
    z-index: 11;
    width: 100%;
    left: 0;
    text-align: center;
    font-size: 16px;
    font-weight: 400;
    line-height: 30px;
    height: 30px;
    background: #f2f5f7;
  }

  .calendar .calendar-wrapper .each-month {
    display: inline-block;
    width: 98%;
    margin-left: 1%;
    padding-bottom: 10px;
    font-size: 0;
  }

  .calendar .calendar-wrapper .each-month .each-day {
    position: relative;
    display: inline-block;
    text-align: center;
    vertical-align: middle;
    width: 14.2857143%;
    font-size: 16px;
    height: 50px;
    line-height: 50px;
  }

  .calendar .calendar-wrapper .each-month .each-day div {
    display: inline-block;
    height: 28px;
    width: 28px;
    line-height: 28px;
  }

  .calendar .calendar-wrapper .each-month .each-day .disabled {
    color: #ccc !important;
  }

  .calendar .calendar-wrapper .each-month .each-day .today {
    background: #e7e7e7;
    border-radius: 5px;
  }

  .calendar .calendar-wrapper .each-month .each-day .trip-time {
    background: #09bb07;
    color: #fff !important;
    border-radius: 5px;
  }

  .calendar .calendar-wrapper .each-month .each-day .weekend {
    color: #09bb07;
  }

  .calendar .calendar-wrapper .each-month .each-day .jia,
  .calendar .calendar-wrapper .each-month .each-day .recent {
    position: absolute;
    line-height: 12px;
    color: #09bb07;
  }

  .calendar .calendar-wrapper .each-month .each-day .jia {
    font-size: 10px;
    top: 6px;
    right: 0;
    height: 12px;
  }

  .calendar .calendar-wrapper .each-month .each-day .jia.qiang {
    top: auto;
    bottom: -3px;
    color: #ff6540;
    font-size: 9px;
    left: 50%;
    width: 100%;
    transform: translate(-50%);
  }

  .calendar .calendar-wrapper .each-month .each-day .recent {
    font-size: 11px;
    width: 100%;
    text-align: center;
    bottom: -4px;
    left: 0;
  }

  .calendar .calendar-wrapper .each-month .each-day .festival {
    font-size: 12px;
  }

  .calendar .calendar-wrapper .each-month .each-day .holiday {
    color: #09bb07;
  }

  .calendar .calendar-wrapper .top-high {
    top: 65px;
  }

  .calendar .calendar-wrapper .top-high-html {
    top: 83px;
  }

  .calendar .calendar-wrapper .top-low {
    top: 33px;
  }
</style>
