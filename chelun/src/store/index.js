import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex);
import upload from './modules/upload';
import cityPicker from './modules/cityPicker';
import address from './modules/address';

export default new Vuex.Store({
    modules: {
        upload,
        cityPicker,
        address
    },
    plugins: [createLogger()]
})