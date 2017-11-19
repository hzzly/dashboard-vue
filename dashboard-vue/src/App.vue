<template>
  <div id="app">
    <div class="header">Hzzly</div>
    <div class="content">
      <div class="slide">
        <el-menu
          default-active="home"
          class="el-menu-vertical-demo"
          background-color="#545c64"
          text-color="#fff"
          router
        >
          <el-menu-item index="home">
            <i class="el-icon-menu"></i>
            <span slot="title">dashboard</span>
          </el-menu-item>
        </el-menu>
      </div>
      <router-view class="router-view"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html,
body,
#app {
  width: 100%;
  height: 100%;
}
#app {
  display: flex;
  flex-direction: column;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei,
    SimSun, sans-serif;
  font-size: 12px;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  min-width: 1200px;
  min-height: 500px;
  background-color: #efeff4;
  overflow: hidden;
  .header {
    background-color: #4d4d4d;
    color: #2aa5f9;
    font-size: 24px;
    padding: 28px 60px;
    text-align: left;
  }
  .content {
    position: relative;
    flex: 1 1 0;
    margin: 8px 0 0;
    overflow: auto;
    .slide {
      float: left;
      height: 100%;
      width: 204px;
      margin-right: 8px;
      padding: 20px 0 ;
      border-radius: 5px;
      background-color: #404040;
      overflow: auto;
      .el-menu {
        border-right: none !important;
      }
    }
    .router-view {
      position: relative;
      width: auto;
      height: 100%;
      background-color: #fff;
      border-top-left-radius: 6px;
      margin-left: 212px;
      padding: 10px 20px 0px;
      overflow: auto;
    }
  }
}
</style>
