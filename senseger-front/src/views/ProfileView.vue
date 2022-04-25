<template>
  <div class="flex-col py-4 px-3">
      <div class="container">
          <header-block :title="UserProfile.username" />
          <div class="profile mt-5 mx-3">
            <h1>User Profile</h1>

            <form>
              <div class="input-wrapper">
                <div class="input-head">
                  <label for="">Id</label>
                </div>
                <div class="input-main">
                  <input type="text" v-model="UserProfile.id" readonly>
                </div>
              </div>
              <div class="input-wrapper">
                <div class="input-head">
                  <label for="">Name</label>
                </div>
                <div class="input-main">
                  <input type="text" v-model="UserProfile.username">
                </div>
              </div>
              <div class="input-wrapper">
                <div class="input-head">
                  <label for="">Token</label>
                </div>
                <div class="input-main">
                  <input type="text" v-model="UserProfile.token" readonly>
                </div>
              </div>

            </form>
            <button @click="logout()">Logout</button>
          </div>
      </div>
  </div>

  
</template>

<script>
import { getSession, logoutAccount } from '@/data'
import HeaderBlock from '@/components/Blocks/HeaderBlock.vue';
export default {
  components: { HeaderBlock },
  methods: {
    logout(){
      logoutAccount();
      this.$router.push('/');
    }
  },
  data () {
    return {
      UserProfile: {
        id: 0,
        name: '',
        token: ''
      }
    }
  },
  async mounted() {
    this.UserProfile = await getSession();
  },
  
}
</script>

<style lang="scss">

</style>