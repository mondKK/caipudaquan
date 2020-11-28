<template>
    <div>
        <h5 style="margin-top:5px;">更多</h5>
        <div class="titile">
            <div class="img_div"></div>
            <h5>登录 / 注册账号</h5>
            <p>解锁收藏、云端同步功能、</p>
            <p>收藏内容不丢失</p>
        </div>
        <div class="list">
            <ul class="list_ul">
                <li>
                    <img src="../assets/img/5.png" alt=""> <span>厨房故事</span> <van-icon name="arrow" size="20"/>
                </li>
                <li>
                    <img src="../assets/img/6.png" alt=""> <span>菜谱收藏</span> <van-icon name="arrow" size="20"/>
                </li>
                <li>
                    <img src="../assets/img/7.png" alt=""> <span>历史记录</span> <van-icon name="arrow" size="20"/>
                </li>
                <li>
                    <img src="../assets/img/8.png" alt=""> <span>用着不错，鼓励一下吧</span> <van-icon name="arrow" size="20"/>
                </li>
                <li>
                    <img src="../assets/img/9.png" alt=""> <span>关于我们</span> <van-icon name="arrow" size="20"/>
                </li>
                <li>
                    <img src="../assets/img/10.png" alt=""> <span>意见反馈</span> <van-icon name="arrow" size="20"/>
                </li>
            </ul>
        </div>
    </div>
</template>

<style scoped>
    h5{
        font-size: 45px;
        width: 100%;
        padding: 20px 0px;
        text-align: center;
    }
    .img_div{
        width: 300px;
        height: 300px;
        margin: 0 auto;
        background-color: rgb(240, 234, 234);
        border-radius: 50%;
        margin-top: 30px;
    }
    .titile{
        text-align: center;
        color:#868686;
    }
    .titile>p{
        font-size: 30px;
        margin-top: 10px;
    }
    .titile>h5{
        margin-top: 10px;
    }
    .list{
        margin-top: 30px;
    }
    .list_ul img{
        /* width: 80px; */
        height: 70px;
    }
    .list_ul li{
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 80px 40px;
    }
    .list_ul li>span{
        flex: 3;
        font-size: 40px;
        padding: 0px 10px;
        margin-left: 25px;
    }
    .van-icon{
        flex: 3;
        text-align: right;
    }
</style>