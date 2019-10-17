import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
// import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
    async getBrandList() {
      let {data} = await Axios.get('http://private-bc245d-brewoptixv2.apiary-mock.com/brands');
      return data;
    },
    async getBrandDetail(payload) {
      let {data} = await Axios.get(`http://private-bc245d-brewoptixv2.apiary-mock.com/brands/${payload.entity_id}`);
      return data;
    }
  },
  modules: {
  }
})
