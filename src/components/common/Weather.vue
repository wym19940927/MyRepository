<template>
  <div id="weather">
      <div class="column">
        <svg class="icon center weather_icon_big" aria-hidden="true">
            <use :xlink:href="currentIconXlink"></use>
        </svg>
      </div>
      <div class="column">
          <span class="temperature_left">{{currentTemperature}}</span>
          <span class="temperature_right">
              <i class="degree">℃</i>
              <i class="weather_today">{{currentWeather}}</i>
          </span>
      </div>
      <div class="column lineheight_1">
          <div class="weather_detail">{{currentWeatherLimits}}<br/><span class="color_red">{{weatherComments}}</span></div>
      </div>
  </div>
</template>

<script lang="ts">
import { getWeatherData } from '@/api/http';
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Weather extends Vue {
    // 天气类型
    private weatherType:any = {
        '晴': {iconClass: 'icon-qing', comment: ''},
        '中雪': {iconClass: 'icon-zhongxue', comment: '别忘记带伞哦'},
        '雨夹雪': {iconClass: 'icon-yujiaxue', comment: '别忘记带伞哦'},
        '阵雨': {iconClass: 'icon-zhenyu', comment: '别忘记带伞哦'},
        '中雨': {iconClass: 'icon-zhongyu', comment: '别忘记带伞哦'},
        '雾': {iconClass: 'icon-wu', comment: ''},
        '小雪': {iconClass: 'icon-xiaoxue', comment: '别忘记带伞哦'},
        '阴': {iconClass: 'icon-yintian', comment: ''},
        '小雨': {iconClass: 'icon-xiaoyu', comment: '别忘记带伞哦'},
        '特大暴雨': {iconClass: 'icon-tedabaoyu', comment: '宅在家里最舒适'},
        '雷阵雨': {iconClass: 'icon-leizhenyu', comment: '别忘记带伞哦'},
        '雷阵雨伴有冰雹': {iconClass: 'icon-leizhenyubanyoubingbao', comment: '别忘记带伞哦'},
        '冻雨': {iconClass: 'icon-dongyu', comment: '别忘记带伞哦'},
        '多云': {iconClass: 'icon-duoyun', comment: ''},
        '大雪': {iconClass: 'icon-daxue', comment: '别忘记带伞哦'},
        '暴雪': {iconClass: 'icon-baoxue', comment: '宅在家里最舒适'},
        '大雨': {iconClass: 'icon-dayu', comment: '别忘记带伞哦'},
        '大暴雨': {iconClass: 'icon-dabaoyu', comment: '宅在家里最舒适'},
        '暴雨': {iconClass: 'icon-baoyu', comment: '宅在家里最舒适'}
    }
    // currentIconXlink
    private currentIconXlink: string = '';
    // currentTemperature
    private currentTemperature: string = '';
    // today weather
    private currentWeather: string = '';
    // today weather limits
    private currentWeatherLimits: string = '';
    // weather comments
    private weatherComments: string = '';

    // 天气数据
    private weatherData:any;
    /*
        * 获取天气信息
    */
    private getWeatherInfo (): void {
        getWeatherData('武汉').then((res) => {
            if (res.desc.toLowerCase() === 'ok') {
                this.weatherData = res.data;
                this.currentIconXlink = `#${this.weatherType[res.data.forecast[0].type].iconClass}`;
                this.currentWeather = res.data.forecast[0].type;
                this.currentTemperature = res.data.wendu;
                this.currentWeatherLimits = `${res.data.forecast[0].high.substring(3)}-${res.data.forecast[0].low.substring(3)}`;
                this.weatherComments = this.weatherType[res.data.forecast[0].type].comment;
                console.log(this.weatherData)
            } else {
                console.log('error')
            }
        }).catch((err) => {
            console.log('error')
        })
    }
    created () {
        this.getWeatherInfo();
    }
}

</script>
<style lang="scss">
#weather {
    position: fixed;
    z-index: 999;
    display: flex;
    width: 100%;
    height: 200px;
    background-color: #1f5299;
    .column {
        position: relative;
        flex: 1 0 33.33%;
        text-align: center;
        &.lineheight_1 {
            line-height: 200px;
        }
        .weather_icon_big {
            font-size: 120px;
        }
        .temperature_left {
            display: inline-block;
            vertical-align: middle;
            color: #fff;
            font-size: 100px;
            font-weight: 600;
            line-height: 200px;
        }
        .temperature_right {
            display: inline-block;
            vertical-align: middle;
            i {
                display: block;
                &.degree, &.weather_today {
                    color: #fff;
                }
            }
        }
        .weather_detail {
            display: inline-block;
            vertical-align: middle;
            color: #fff;
            line-height: 36px;
        }
    }
}
</style>