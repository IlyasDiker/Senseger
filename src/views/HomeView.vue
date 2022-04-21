<template>
  <div class="home">
    <ul>
      <template v-for="(item, index) in users" :key="index">
        <li>
          <span>{{item.name}}</span>
          <ul>
            <li><button>Kiss</button></li>
            <li><button>Hug</button></li>
            <li><button>Pinch</button></li>
          </ul>  
        </li>
      </template>
    </ul>
  </div>
</template>

<script>
import { getUsers } from '@/api';
export default {
  data () {
    return {
      users: null,
      
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
