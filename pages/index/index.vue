<template>
    <view class="container">
        <view class="intro navBtn">
            本项目已包含uni ui组件，无需import和注册，可直接使用。在代码区键入字母u，即可通过代码助手列出所有可用组件。光标置于组件名称处按F1，即可查看组件文档。
        </view>
        <text class="intro navBtn">详见：</text>
        <view class="navBtn" style="overflow-x: hidden;"><uni-link :href="href" :text="href"></uni-link></view>

        <button style="width: 90%; margin-top: 40rpx;" type="primary" @click="tapOpenMap">点击</button>

        <button style="width: 90%; margin-top: 40rpx;" type="default">按钮</button>

        <uni-card title="标题文字" thumbnail="" extra="额外信息" note="Tips">内容主体，可自定义内容及样式</uni-card>

        <uni-card title="标题文字" thumbnail="" extra="额外信息" note="Tips">内容主体，可自定义内容及样式</uni-card>

        <uni-card title="标题文字" thumbnail="" extra="额外信息" note="Tips">内容主体，可自定义内容及样式</uni-card>

        <uni-card title="标题文字" thumbnail="" extra="额外信息" note="Tips">内容主体，可自定义内容及样式</uni-card>

        <view class="navBtn" @click="toTwoPage">进入二级页面</view>

        <!-- 宣传视频 -->
        <view class="itemBox">
            <view class="head"><view class="tit">宣传视频</view></view>
            <video
                id="myVideo"
                class="videoo"
                src="https://gmncfile.jjyapp.com/191713785085763810/1865721247340152754"
                poster=""
                enable-play-gesture
                show-mute-btn
                title="龙门秘境宣传视频"
                @play="videoPlayHandle"
                @pause="videoPauseHandle"
                @ended="videoEndedHandle"
            ></video>
        </view>

        <view style="height: 50rpx;"></view>
    </view>
</template>

<script>
export default {
    data() {
        return {
            href: 'https://uniapp.dcloud.io/component/README?id=uniui',
            videoIsPlay: false,
            changeVideoStatus: true
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
            });
        },

        videoPlayHandle() {
            this.videoIsPlay = true;
        },

        videoPauseHandle() {
            if (this.changeVideoStatus) {
                this.videoIsPlay = false;
            }
        },

        videoEndedHandle() {
            this.videoIsPlay = false;
        }
    },

    onReady() {
        console.log('onReady');
        this.videoContext = uni.createVideoContext('myVideo');
    },

    onShow() {
        console.log('onShow');
        this.changeVideoStatus = true;
        if (this.videoIsPlay) {
            this.videoContext.play();
        }
    },

    onHide() {
        console.log('onHide');
        this.changeVideoStatus = false;
        if (this.videoIsPlay) {
            this.videoContext.pause();
        }
    }
};
</script>

<style lang="less" scoped>
.container {
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
        display: flex;
        flex-wrap: wrap;
    }

    .itemBox {
        margin-bottom: 20rpx;

        .head {
            width: 100%;
            height: 80rpx;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 0 0 40rpx;
            box-sizing: border-box;

            .tit {
                font-size: 28rpx;
                color: #343338;
                font-weight: bold;
            }
        }

        /* 视频 */
        .videoo {
            width: 90%;
            height: 380rpx;
            display: block;
            margin: 0 auto;
            border-radius: 14rpx;
        }
    }
}
</style>
