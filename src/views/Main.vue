<template>
    <div id="main">
        <div>
            <router-view></router-view>
        </div>
        <div class="foot">
            <ul class="foot_ul">
                <router-link to="/shouye">
                <li>
                   <van-icon name="wap-home-o" size="35"/>
                    <p>首页</p>
                </li>
                </router-link>
                <li>
                   <van-icon name="coupon-o" size="35"/>
                    <p>菜谱分类</p>
                </li>
                <li>
                    <van-icon name="goods-collect-o" size="35"/>
                    <p>菜篮子</p>
                </li>
                <router-link to="more">
                <li>
                    <van-icon name="other-pay" size="35"/>
                    <p>更多</p>
                </li>
                </router-link>
            </ul>
        </div>
    </div>
</template>

<style scoped>
    #main{
        height: 1800px;
        width: 100%;
        /* position: relative; */
    }
    .foot{
        width: 100%;
        position: fixed;
        bottom: 0;
    }
    .foot_ul{
        list-style: none;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }
    .foot_ul li{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .foot_ul li p{
        font-size: 25px;
        padding: 15px 0px;
    }
</style>

<script>
export default {
    name:'mian',

}
</script>