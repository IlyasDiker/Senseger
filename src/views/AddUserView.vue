<template>
  <div class="AddUser">
    <h1>List users</h1>
    <ul>
      <template v-for="(item, index) in users" :key="index">
        <li>{{item.name}} <button>Add</button></li>
      </template>
    </ul>
  </div>
</template>

<script>
import { getUsers } from '@/api';
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
  },
};
</script>
