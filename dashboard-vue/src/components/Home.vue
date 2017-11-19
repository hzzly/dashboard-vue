<template>
  <div class="home">
    <el-tabs v-model="activeName">
      <el-tab-pane label="首 页" name="home">
        <div class="main">
          <div class="title-bar">
            <div class="title">筛选</div>
            <div class="group">
              <el-select v-model="bizs" size="mini" placeholder="所有渠道">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </div>
            <div class="group">
              <el-select v-model="channel" size="mini" placeholder="所有业务">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </div>
            <div class="group">
              <el-select v-model="groups" style="width: 350px" size="mini" placeholder="所有客服组">
                <el-option
                  multiple
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </div>
            <div class="button">
              <el-button type="primary" style="width: 80px" size="small" round>查询</el-button>
            </div>
          </div>

          <div class="data-screening">
            <v-card :title="'数据总览'">
              <div class="card-group">
                <div class="item" v-for="(item, index) in dataScreening" :key="index">
                  <el-card class="box-card">
                    <div class="label">{{item.label}}</div>
                    <div class="num">{{item.num}}</div>
                  </el-card>
                </div>
              </div>
            </v-card>
          </div>

          <div class="charts">
            <v-card :title="'今日在线服务数据趋势'">
              <div slot="center" class="legends">
                <div v-for="(item, index) in chartsLegends" :key="index" class="legend">
                  <span :style="{backgroundColor: item.color}"></span>
                  <span>{{item.label}}</span>
                </div>
              </div>
              <el-row style="margin-top: 20px">
                <el-col :span="24">
                  <v-line id="home1" :options="charts"></v-line>
                </el-col>
              </el-row>
            </v-card>
          </div>

          <div class="charts">
            <v-card :title="'咨询分类'">
              <el-row :gutter="20">
                <el-col :span="12">
                  <v-pie id="pie1" :options="pie1"></v-pie>
                  <!-- <div class="desc" style="text-align: center">已接入会话</div> -->
                </el-col>
                <el-col :span="12">
                  <v-pie id="pie2" :options="pie1"></v-pie>
                </el-col>
              </el-row>
            </v-card>
          </div>

          <div class="charts">
            <v-card :title="'会话分类'">
              <el-row :gutter="20">
                <el-col :span="12">
                  <v-pie id="pie3" :options="pie1"></v-pie>
                </el-col>
                <el-col :span="12">
                  <v-pie id="pie4" :options="pie1"></v-pie>
                </el-col>
              </el-row>
            </v-card>
          </div>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
// 按需引入
// import Vue from 'vue'
// import { Button } from 'element-ui'
// Vue.use(Button)

import VCard from '@/components/Card'
import VLine from '@/components/Charts/Line'
import VPie from '@/components/Charts/Pie'

const TRAFFIC = [8000, 8300, 8500, 8200, 8600, 8800, 7900, 7600, 8500, 9000, 9200, 8900, 8400, 9500, 9900, 10000, 11000, 10100, 9200, 9900, 10300, 10000, 9500, 10000, 8600]

// const TOTAL = 14000

const data1 = TRAFFIC.slice(0, 25)
const data2 = data1.map(e => Math.floor(e - (Math.random() * 500 + 4000)))
const data3 = data2.map(e => Math.floor(e - (Math.random() * 500 + 1500)))
const data4 = data3.map(e => Math.floor(e - (Math.random() * 500 + 800)))

const colors = ['rgba(108, 203, 199, .8)', 'rgba(75, 163, 203, .8)', 'rgba(239, 121, 118, .8)', 'rgba(213, 105, 235, .8)']

export default {
  name: 'home',
  components: {
    VCard,
    VLine,
    VPie
  },
  data () {
    return {
      activeName: 'home',
      biz: '',
      subject: '',
      bizs: '',
      channel: '',
      groups: '',
      options: [{
        value: '小程序',
        label: 'xcx'
      }],
      dataScreening: [{
        label: '正在咨询人数',
        num: 500
      }, {
        label: '正在排队人数',
        num: 500
      }, {
        label: '今日会话量',
        num: 500
      }, {
        label: '今日未接入会话量',
        num: 500
      }, {
        label: '今日相对满意度',
        num: '30%'
      }],
      chartsLegends: [{
        color: '#6CCBC7',
        label: '总会话量'
      }, {
        color: '#4BA3CB',
        label: '已接入会话量'
      }, {
        color: '#EF7976',
        label: '未接入会话量'
      }, {
        color: '#D569EB',
        label: '排队量'
      }],
      charts: {
        data: [{
          name: '总会话量',
          data: data1,
          areaStyle: {
            normal: {
              color: 'rgba(108, 203, 199, .6)'
            }
          }
        }, {
          name: '已接入会话量',
          data: data2,
          areaStyle: {
            normal: {
              color: 'rgba(75, 163, 203, .5)'
            }
          }
        }, {
          name: '未接入会话量',
          data: data3,
          areaStyle: {
            normal: {
              color: 'rgba(239, 121, 118, .5)'
            }
          }
        }, {
          name: '排队量',
          data: data4,
          areaStyle: {
            normal: {
              color: 'rgba(213, 105, 235, .6)'
            }
          }
        }],
        colors: colors
      },
      pie1: {
        data: [{
          name: '已接入会话',
          radius: '75%',
          center: ['40%', '50%'],
          data: [
            {value: 5, name: '有标签会话'},
            {value: 150, name: '未分类会话'},
            {value: 48, name: '无效会话'}
          ]
        }]
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.main {
  margin: 0 30px 0 20px;
  .title-bar {
    display: flex;
    align-items: center;
    height: 60px;
    font-size: 14px;
    position: relative;
    .title {
      flex: 0 0 70px;
    }
    .group {
      display: flex;
      align-items: center;
      margin-right: 15px;
      span {
        flex: 0 0 50px;
      }
    }
    .button {
      position: absolute;
      right: 0;
    }
  }

  .data-screening {
    margin: 10px 0 30px;
    .card-group {
      display: flex;
      margin-top: 15px;
      .item {
        flex: 1;
        margin-right: 15px;
        text-align: center;
        .label {
          font-size: 15px;
          font-weight: 500;
        }
        .num {
          margin: 15px 0 5px;
          font-size: 28px;
          color: #F5A623;
        }
      }
    }
    
  }
  .charts {
    margin-bottom: 30px;
    .legends {
      display: flex;
      font-size: 12px;
      color: #666666;
      margin-left: 100px;
      .legend {
        display: flex;
        align-items: center;
        margin-right: 15px;
        span {
          &:first-child {
            width: 10px;
            height: 10px;
            border-radius: 5px;
            margin-right: 8px;
          }
        }
      }
    }
  }
}
</style>


