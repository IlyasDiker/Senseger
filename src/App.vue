<template>
  <template v-if="isLoading">
    LOADING
  </template>
  <template v-else>
      <div class="app-layout">
        <navabar-ui />
        <div class="app-layout_router">
          <router-view />
        </div>
      </div>
  </template>
</template>

<script>
import { getUser } from './api';
import { getAccount, setAccount, setSession } from './data'
import NavabarUi from '@/components/NavabarUi.vue';

export default {
  components: { NavabarUi },
  methods: {
    async login(){
      let user = await getUser(parseInt(this.Form.login));
      if (user) {
        this.Account = user;
        setSession(user);
        setAccount(user);
      } else {
        window.alert('wrong password');
        this.Form.login = '';
      }
    }
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
      let user = await getUser(parseInt(acnt.id));
      if(user){
        console.log('logged');
        this.isLoading = false;
        this.Account = user;
        setSession(user);
        setAccount(user);
      }
    } else {
      this.isLoading = false;
      // console.log('no account');
      //   console.log(this.$route.name);
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
