import Vue from 'vue'
import Vuex from 'vuex'
import citizens from './modules/citizens';
import jobs from './modules/jobs';
import houses from './modules/houses';

Vue.use(Vuex);

export default new Vuex.Store({
    strict: true,
    modules: {
        citizens,
        jobs,
        houses
    }
});
