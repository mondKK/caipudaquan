<template>
    <div class="main">
        <h4>家常菜谱大全</h4>
        <p style="margin-top:100px">555</p>
        <div class="img_div">
            <img src="../assets/img/11.png" alt="">
            <img src="../assets/img/12.png" alt="">
        </div>
        <div class=""><van-search class="serch" v-model="value" placeholder="请输入搜索关键词" input-align="center"/></div>
    </div>
</template>

<style scoped>
    .main{
        padding: 0px 20px;
    }
    h4{
        text-align: center;
        font-size: 40px;
        padding: 10px 0px;
    }
    .img_div img{
        width: 430px;
        margin: 0px 6px;
    }
    .img_div{
        display: flex;
        flex-direction: row;
        justify-content: center;
        margin-top: 15px;
    }
    .serch{
      line-height: 300px;
    }
</style>

<script>
export default {
    name:'shouye',
}
</script>