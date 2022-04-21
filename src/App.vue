<template>
  <template v-if="isLoading">
    LOADING
  </template>
  <template v-else>
      <div class="app-layout">
        <navabar-ui />
        <div class="app-layout_router">
          <router-view />
          <div class="app-layout_disabled" v-if="!Account && $route.name != 'login'">
            <router-link to="/login">
              <button>got to login</button>
            </router-link>
          </div>
        </div>
      </div>
  </template>
</template>

<script>
import { getAccount, setAccount, setSession } from './data'
import NavabarUi from '@/components/NavabarUi.vue';

export default {
  components: { NavabarUi },
  methods: {
    
  },
  data () {
    return {
      Account: null,
      Form: {
        login: ''
      },
      isLoading: true,
    }
  },
  async created () {
    let acnt = await getAccount();
    if(acnt && acnt.id){
      console.log('found accnt', acnt);
      // let user = await getUser(parseInt(acnt.id));
      // if(user){
      //   console.log('logged');
        this.isLoading = false;
        this.Account = acnt;
        setSession(acnt);
        setAccount(acnt);
      // }
    } else {
      this.isLoading = false;
      console.log('no account');
      // if(this.route.name != 'login') {
      //   router.push('/login');
      // } 
    }
  },
  
}
</script>

<style lang="scss">
@import '@/sass/global.scss';
</style>
