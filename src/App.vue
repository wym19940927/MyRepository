<template>
  <div id="app">
    <router-view />
    <ul class="app_nav">
      <li>
        <router-link to="/">
          <i class="iconfont icon-dating1"></i>
          <span>HOME</span>
        </router-link>
      </li>
      <li>
        <router-link to="/habit">
          <i class="iconfont icon-yundan1"></i>
          <span>LIST</span>
        </router-link>
      </li>
      <li>
        <router-link to="/Mine">
          <i class="iconfont icon-wode1"></i>
          <span>MINE</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  .app_nav {
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 999;
    display: flex;
    width: 100%;
    height: 100px;
    border-top: 1px solid #1f5299;
    background-color: #fff;
    text-align: center;
    li {
      flex: 1 0 auto;
      a {
        display: flex;
        justify-content: center;
        flex-direction: column;
        transition: 0.8s;
        height: 100%;
        font-size: 14px;
        &.router-link-exact-active {
          background-color: #1f5299;
          color: #fff;
        }
        .iconfont {
          font-size: 32px;
        }
      }
    }
  }
}
</style>
