const state = {
    navList:[{
        text:'身份证正面',
        src:'',
        imgUrl:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1546435231585&di=8621e6f65fe82b83ccff4e46055d474c&imgtype=0&src=http%3A%2F%2Fimg.mp.sohu.com%2Fq_mini%2Cc_zoom%2Cw_640%2Fupload%2F20170704%2F83902139496349e2a6e88d2486150248_th.jpg"
    },{
        text:'身份证反面',
        src:'',
        imgUrl:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1546439836691&di=3df30531bb38d9c654a5985db5b74b85&imgtype=0&src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20161104%2F91d2e33462d74da996e03b91ac832353_th.jpeg"
    },{
        text:'驾驶证正页',
        src:'',
        imgUrl:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1546439876252&di=b4f0ec948072a3c5c89ee4c222616778&imgtype=0&src=http%3A%2F%2Fjiakao-web.image.mucang.cn%2Fjiakao-web%2F2017%2F07%2F13%2F20%2F87dadf2904b34588bd35b3cf08f126f4.jpeg"
    },{
        text:'驾驶证副页',
        src:'',
        imgUrl:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1546439888030&di=6e999e21ced44a9af73a297f6040174f&imgtype=0&src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20160410%2Faeb610fe99a2457bbe58fd2d64878c29_th.jpg"
    },{
        text:'白底半身照',
        src:'',
        imgUrl:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1546439913008&di=c6bfffcf915f6b88759572ace7a4bc6c&imgtype=0&src=http%3A%2F%2Fimg13.360buyimg.com%2Fn1%2Fs350x449_jfs%2Ft2842%2F83%2F2095483915%2F194221%2F8bb6f7ad%2F57565f75N5b2807c7.jpg%2521cc_350x449.jpg"
    }]
}

const mutations = {
    updateList(state, payload) {
        state.navList[payload.index].src = payload.src;
    }
}

export default {
    namespaced: true,
    state,
    mutations
}