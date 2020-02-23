<template>
    <div class="box">
        <div class="list">
            <div>
                <video id="a" autoplay :src="video1" controls playsInline webkit-playsinline></video>
            </div>
           <div>
                <video id="b" autoplay :src="video2" controls playsInline webkit-playsinline></video>
            </div>
        </div>
        <div class="list">
            <div>
                <video id="c" autoplay :src="video3" controls playsInline webkit-playsinline></video>
            </div>
           <div>
                <video id="d" autoplay :src="video4" controls playsInline webkit-playsinline></video>
            </div>
        </div>
    </div>
    
</template>
<script>
export default {
    data(){
        return{
            video1:'',
            video2:'',
            video3:'',
            video4:'',
        }
    },
    created(){
        this.$http.post(this.baseUrl+'getAccessToken').then(res=>{
            
            var data = JSON.parse(res.data.message).data;
            console.table(data)
            if( data.length === 0 ){
                return;
            }
            console.log(data)
            this.video1 = data[0].rtmp;
            this.video2 = data[1] && data[1].rtmp;
            this.video3 = data[2] && data[2].rtmp;
            this.video4 = data[3] && data[3].rtmp;
            
            this.$nextTick( () => {
                new EZUIKit.EZUIPlayer('a');
                new EZUIKit.EZUIPlayer('b');
                new EZUIKit.EZUIPlayer('c');
                new EZUIKit.EZUIPlayer('d');
            })
        })
    },
    mounted(){
        // var player = new EZUIKit.EZUIPlayer('a');
        // var player = new EZUIKit.EZUIPlayer('b');
        // var player = new EZUIKit.EZUIPlayer('c');
        // var player = new EZUIKit.EZUIPlayer('d');
    }
}
</script>
<style scoped>
.box{
    width: 100%;
    height: 100%;
}
.box .list{
    width: 100%;
    height: 50%;
    display: flex;
}
.list > div{
    width: 50%;
    flex-grow: 1;
    padding: 10px 10px 0 10px;
    background: #fff;
}
.list video{
    width: 100%;
    height: 100%;
}

</style>

