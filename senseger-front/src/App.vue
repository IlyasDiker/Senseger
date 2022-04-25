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
              <button>Go to login</button>
            </router-link>
          </div>
        </div>
      </div>
  </template>
</template>

<script>
import { getAccount, getSession, setAccount, setSession } from './data'
import NavabarUi from '@/components/NavabarUi.vue';

export default {
  components: { NavabarUi },
  methods: {
    
  },
  data () {
    return {
      Account: getSession(),
      Form: {
        login: ''
      },
      isLoading: true,
    }
  },
  async created () {
    this.$bus.on('ad', ()=>{
      console.log('test ad');
    })
  },
  async mounted() {
    let acnt = await getAccount();
    if(acnt && acnt.id){
      console.log('found accnt', acnt);
      this.isLoading = false;
      setSession(acnt);
      setAccount(acnt);
      this.Account = getAccount();
    } else {
      this.isLoading = false;
      console.log('no account');
    }

  },
  
}
</script>

<style lang="scss">
@import '@/sass/global.scss';
</style>
