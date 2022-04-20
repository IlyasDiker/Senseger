<template>
  <template v-if="isLoading">
    LOADING
  </template>
  <template v-else>
    <template v-if="Account">
      <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="/add">Add User</router-link> |
        <router-link to="/profile">Profile</router-link>
      </nav>
      <router-view />
    </template>
    <template v-else>
      <form>
        <div class="input-wrapper">
          <div class="input-head">
            <label for="">Login</label>
          </div>
          <div class="input-main">
            <input type="text" v-model="Form.login">
          </div>
        </div>
        <button @click="">login</button>
      </form>
    </template>
  </template>
</template>

<script>
import { getUser } from './api';
import { getAccount, setAccount, setSession } from './data'

export default {
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
    if(acnt){
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
    }
  },
  
  
}
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
