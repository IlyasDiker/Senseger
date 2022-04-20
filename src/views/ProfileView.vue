<template>
  <div class="profile">
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
          <input type="text" v-model="UserProfile.name">
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
      <div class="input-wrapper">
        <div class="input-head">
          <label for="">Name</label>
        </div>
        <div class="input-main">
          <input type="text" v-model="UserProfile.name">
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      UserProfile: {
        id: 0,
        name: '',
        token: ''
      }
    }
  },
  created () {
  },
  
}
</script>

<style lang="less">

</style>