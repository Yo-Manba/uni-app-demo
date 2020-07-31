<template>
    <view>
        <view class="item" v-for="(item,index) in listArr" :key="index">
            <view class="">{{item.companyName}}</view>
            <view class="">{{item.name}}</view>
            <view class="">{{item.rent}}</view>
            <view class="">{{item.serviceLife}}</view>
            <view class="">{{item.townshipName}}</view>
        </view>
    </view>
</template>

<script>
export default {
    data() {
        return {
            listArr: []
        };
    },

    onLoad() {
        this.getInfo()
    },

    methods: {
        getInfo() {
            uni.request({
                url: getApp().globalData.comUrl + '/api/c/EandW/Elist',
                // #ifdef H5
                url: 'api/api/c/EandW/Elist',
                // #endif
                method: 'post',
                data: {
                    type: 2,
                    page: 1,
                    size: 20
                },
                success: res => {
                    console.log(res) 
                    this.listArr = res.data.result
                },
                fail: err => {
                    console.error(err)
                }
            });
        }
    }
};
</script>

<style lang="less">
    .item{
        margin-top: 50rpx;
    }
    
</style>
