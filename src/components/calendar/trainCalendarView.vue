<template>
    <transition name="fade" mode="in-out">
        <calendar :leave-date="currentDate"
                  :today="today"
                  :title="title"
                  :end-date="endDate"
                  :callback="setTime"
                  :show-qiang="true"
                  :is-html-title="true"></calendar>
    </transition>
</template>

<script>
    import {mapGetters} from 'vuex'
    import calendar from './calendar'

    export default {
        data() {
            return {
                title: '',
                today: new Date(sessionStorage['wx'] * 1),
                name: '',
                temp: 1483027200000 // 12月30日的时间戳
            }
        },
        computed: {
            ...mapGetters({
                trainBegintime: 'begTime'
            }),
            currentDate() {
                let date = ['2017', '05', '23'];
                return date.join('-')
            },

        },
        props: {
            endDate: {
                type: String,
                default () {
                    let time = sessionStorage['wx'] * 1,
                            date = new Date(sessionStorage['wx'] * 1),
                            end

                    //2016年12月30日之后，预售期调整为30天
                    // if (time >= this.temp) {
                    end = new Date(date.setTime(date * 1 + (29 + 45) * 24 * 60 * 60 * 1000))
                    /*} else {
                     //2016年12月30日之前，预售期调整为60天，添加15天预售期，提示文字 “预约”
                     end = new Date(date.setTime(date * 1 + (59 + 15) * 24 * 60 * 60 * 1000))
                     }*/
                    return `${end.getFullYear()}-${end.getMonth() + 1}-${end.getDate()}`
                }
            }
        },
        components: {
            calendar
        },
        methods: {
            setTime(time) {
                this.$store.dispatch('setTrainBegintime', JSON.stringify(time))
                history.go(-1)
            }
        },

        created() {
            sessionStorage.setItem('wx', new Date().getTime())
            this.title = '因铁路局列车运行图调整，火车票预售期调整为30天，建议您提前预约抢票，开售自动抢票。'

            /*
             const date = new Date(sessionStorage['wx'] * 1),
             isThirty = date >= this.temp,
             after = setDateTime(isThirty ? 30 : 60, 'd', date).date,
             bookDate = setDateTime(75, 'd', date).date

             */

            // this.title = `<div>今天是${date.getMonth() + 1}月${date.getDate()}日，可购买${after[1]}月${after[2]}日之前的票</div>
            //               <div>可提前预约${bookDate[1]}月${bookDate[2]}日前的火车票，开售自动为您抢票</div>`
        }
    }
</script>

<style scoped>
    .content {
        padding: 15px;
    }
</style>
