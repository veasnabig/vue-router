<template>
    <div id="app">
        <el-container>
            <el-header>
                <el-row>
                    <span v-for="routeLink,key in routeLinks" :key='key'>
                        <router-link :to="routeLink.path">
                            <el-button >{{routeLink.name}}</el-button>
                        </router-link>
                    </span>
                </el-row>
            </el-header>
            <el-container>
                <el-aside width="200px">
                    <side-menu/>
                </el-aside>
                <el-container>
                    <router-view/>
                </el-container>
            </el-container>
        </el-container>
    </div>
</template>

<script>
import { store } from "./store";
import SideMenu from "@/components/SideMenu";

export default {
  components: {
    SideMenu
  },
  name: "App",
  mounted() {
    // console.log(this.$store.state.routeLink)
  },
  computed: {
    routeLinks() {
      return this.$store.getters.getRoute;
    },
  },
  watch: {
    $route(route) {
      this.$store.commit("routeHistory", route);
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}

.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
