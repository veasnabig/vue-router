<template>
<el-menu default-active="2" class="el-menu-vertical-demo">
    <el-menu v-for="sideBar,key in sideBars" :key='key'>
        <router-link :to="'/'+sideBar.route">
            <el-menu-item index="2">
                <i class="el-icon-menu"></i>
                <span>{{sideBar.name}}</span>
            </el-menu-item>
        </router-link>
    </el-menu>
</el-menu>
</template>

<script>
export default {
    name: "SideMenu",
    data() {
        return {
            sideBars: [{
                    name: "Dashboard",
                    route: ""
                },
                {
                    name: "Category",
                    route: "category"
                },
                {
                    name: "Product",
                    route: "product"
                },
                {
                    name: "Inventory",
                    route: "inventory"
                },
                {
                    name: "Setting",
                    route: "setting"
                }
            ]
        };
    }
};
</script>

<style>

</style>
