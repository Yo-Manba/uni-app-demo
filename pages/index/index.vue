<template>
    <view class="container">
        <view class="intro">
            本项目已包含uni ui组件，无需import和注册，可直接使用。在代码区键入字母u，即可通过代码助手列出所有可用组件。光标置于组件名称处按F1，即可查看组件文档。
        </view>
        <text class="intro">详见：</text>
        <!-- <uni-link :href="href" :text="href"></uni-link> -->

        <view @click="tapOpenMap">点击</view>

        <button type="default">按钮</button>

        <uni-card title="标题文字" thumbnail="" extra="额外信息" note="Tips">内容主体，可自定义内容及样式</uni-card>

        <uni-card title="标题文字" thumbnail="" extra="额外信息" note="Tips">内容主体，可自定义内容及样式</uni-card>

        <uni-card title="标题文字" thumbnail="" extra="额外信息" note="Tips">内容主体，可自定义内容及样式</uni-card>

        <uni-card title="标题文字" thumbnail="" extra="额外信息" note="Tips">内容主体，可自定义内容及样式</uni-card>

        <view class="navBtn" @click="toTwoPage">进入二级页面</view>
    </view>
</template>

<script>
export default {
    data() {
        return {
            href: 'https://uniapp.dcloud.io/component/README?id=uniui'
        };
    },
    methods: {
        tapOpenMap() {
            uni.openLocation({
                latitude: 30.243749,
                longitude: 120.182488,
                success: function() {
                    console.log('success');
                },
                fail(err) {
                    console.log(err);
                }
            });
        },
        
        toTwoPage() {
            uni.navigateTo({
                url: '/pages/twoPage/twoPage'
            })
        }
            
    }
};
</script>

<style lang="less" scoped>
.container {
    padding: 20px;
    font-size: 14px;
    line-height: 24px;
    
    .navBtn {
        width: 90%;
        padding: 30rpx;
        box-sizing: border-box;
        margin: 0 auto;
        margin-top: 30rpx;
        background-color: #f5f5f5;
        border-radius: 20rpx;
    }
}


</style>
