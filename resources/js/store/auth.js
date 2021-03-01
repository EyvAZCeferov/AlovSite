import axios from 'axios'
export default ({
  namespaced:true,
  state: {
      token:null,
      user:null,
  },
  getters:{
      authenticated(state){
        return state.token && state.user;
      },
      user(state){
        return state.user;
      }
  },
  mutations: {
      SET_TOKEN(state,token){
          state.token=token;
      },
      SET_USER(state,user){
          state.user=user;
      }
  },
  actions:{
      async signin ({dispatch},cred){
          let response= await axios.post("/auth/login",cred);
          return dispatch("attempt",response.data.access_token);
      },
      async refresh({dispatch}){
          let response= axios.post('auth/refresh');
          return dispatch("attempt",response.data.access_token);
      },
      async attempt({commit,state},token){
          if(token){
            commit("SET_TOKEN",token);
          }
          if(!state.token){
              return
          }
          try {
              let response=await axios.post('/auth/me');
              commit("SET_USER",response.data);
          } catch (error) {
              commit("SET_TOKEN",null);
              commit("SET_USER",null);
              this.$toast.error(error);
          }
      },
        async signOut({commit}){
          return await axios.post('/auth/signout').then(()=>{
              commit('SET_TOKEN',null);
              commit('SET_USER',null);
          })
      }
  },
})
