<template>
  <div class="flex-col py-4 px-3">
    <div class="container">
        <header-block title="Looking for someone?" description="Add your beloved one" />
    </div>
  </div>
  <!-- <div class="AddUser">
    <h1>List users</h1>
    <ul>
      <template v-for="(item, index) in users" :key="index">
        <li>{{item.name}} <button>Add</button></li>
      </template>
    </ul>
  </div> -->
</template>

<script>
import { getUsers } from '@/api';
import HeaderBlock from '@/components/Blocks/HeaderBlock.vue';
export default {
  data () {
    return {
      users: null
    }
  },
  async created () {
    this.users = await getUsers();
  },
  name: "HomeView",
  components: {
    HeaderBlock
  },
};
</script>
