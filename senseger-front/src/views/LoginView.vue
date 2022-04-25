<template>
    <div class="AuthContainer">
      <img class="AuthContainer_background" src="https://images.unsplash.com/photo-1508020963102-c6c723be5764?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"/>
      <div class="flex-col gap-10 w-100">
        <div class="AuthSection">
          <div class="AuthSection_head">
            <div>
              <h2 class="text-3xl">Senseger</h2>
            </div>
            <div>
              <span class="fw-300 text-sm">Please sign in to start enjoying the app</span>
            </div>
          </div>
          <div class="AuthSection_body">
            <div class="input-wrapper">
              <div class="input-main">
                <input type="text" placeholder="Your email or username" v-model="Form.login">
              </div>
            </div>
          </div>
        </div>
        <div class="AuthSection">
          <div class="AuthSection_footer">
            <a :href="AuthLink">
              Discord
            </a>
            <button disabled>Google</button>
            <button @click="test">Facebook</button>
            <button class="main_action" :class="Form.login ? 'active' : ''">Login</button>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import { authDiscord, getDiscordAuthLink, getDiscordProfile, setAccount } from '@/data';
import router from '@/router';
import { createUser } from '@/api';
export default {
  methods: {
    test() {
      this.$bus.emit('ad')
    }
  },
  data () {
    return {
      AuthLink: null,
      Form : {
        login: ''
      }
    }
  },
  async created () {
    this.AuthLink = getDiscordAuthLink();

    const fragment = new URLSearchParams(window.location.search);
    let code = fragment.get('code');
    if(code){
      let authed = await authDiscord(code);
      if(authed){
        let discordProfile = await getDiscordProfile();
        let account = await createUser({
          id: discordProfile.id,
          username: discordProfile.username,
          avatar: discordProfile.avatar_url,
          discordData : discordProfile
        })
        setAccount(account);
        setTimeout(()=>{
          router.push('/');
        })
      }
    }
  },
  name: "LoginView",
  components: {

  },
};
</script>

<style lang="scss" scoped>

@keyframes fadein {
  from { opacity: 0; }
  to   { opacity: 0.3; }
}

.AuthContainer{
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: flex-start;
  align-items: flex-end;
  padding: 40px;
  &_background{
    z-index: -1;
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.3;
    animation: fadein 2s;
  }
}
  .AuthSection{
    max-width: 500px;
    width: 100%;
    border-radius: 10px;
    overflow: hidden;
    &_head{
      background: rgba(255, 255, 255, 0.24);
      backdrop-filter: blur(10px);
      padding: 30px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      min-height: 250px;
      gap: 60px;
    }
    &_body{
      background: white;
      color: black;
      display: flex;
      flex-direction: column;
      input{
        padding: 30px;
        font-size: 1.15rem;
        width: 100%;
        border: none;
        outline: none;
      }
      gap: 60px;
    }
    &_footer{
      position: relative;
      display: flex;
      flex-direction: row;
      gap: 10px;
      
      button, a{
        text-align: center;
        font-size: 0.9rem;
        flex-grow: 1;
        padding: 20px;
        border: none;
        background: rgba(255, 255, 255, 0.24);
        backdrop-filter: blur(10px);
        color: white;
        text-transform: uppercase;
        border-radius: 10px;
        cursor: pointer;
        outline: none;
        border: 1px solid transparent;
        transition: 0.2s ease-in-out;
        user-select: none;
        &:hover, &:focus{
          background: rgba(255, 255, 255, 0.30);
        }
        &:focus{
          border: 1px solid white;
        }
        &:disabled{
          opacity: 0.2;
          pointer-events: none;
        }
      }
      .main_action{
        background: white;
        color: black;
        position: absolute;
        width: 100%;
        transform: translateY(100%);
        visibility: hidden;
        transition: 0.2s linear;
        backdrop-filter: none;
        &:hover , &:focus{
          background: whitesmoke;
        }
        &.active{
          visibility: visible;
          transform: translateY(0%);
        } 
      }
    }
  }
</style>
