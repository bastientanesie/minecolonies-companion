import Vue from 'vue'
import Vuex from 'vuex'
import citizen from './modules/citizen';

Vue.use(Vuex);

export default new Vuex.Store({
    strict: true,
    modules: {
        citizen
    }
});
