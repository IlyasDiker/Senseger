<template>
    <nav class="Navbar" :class="this.$route.name == 'login' ? 'disabled' : ''">
        <ul>
            <router-link to="/">
                <li class="Navbar_item" :class="this.$route.name == 'home' ? 'active' : ''">
                    <span class="material-icons">home</span>
                    <span class="material-icons-outlined">home</span>
                </li>
            </router-link>
            <router-link to="/add">
                <li class="Navbar_item" :class="this.$route.name == 'add' ? 'active' : ''">
                    <span class="material-icons">photo_camera</span>
                    <span class="material-icons-outlined">photo_camera</span>
                </li>
            </router-link>
            <router-link to="/settings">
                <li class="Navbar_item" :class="this.$route.name == 'settings' ? 'active' : ''">
                    <span class="material-icons">settings</span>
                    <span class="material-icons-outlined">settings</span>
                </li>
            </router-link>
            <router-link to="/profile" v-if="userSession">
                <li class="Navbar_item" :class="this.$route.name == 'profile' ? 'active' : ''">
                    <img :src="userSession.avatar" alt="">
                </li>
            </router-link>
        </ul>
    </nav>
</template>

<script>
import { getSession } from '@/data'
export default {
  data () {
    return {
        userSession: getSession()
    }
  },
  mounted () {
      this.userSession = getSession();
  },
    
}
</script>

<style lang="scss" scoped>

$btn-width: 50px;
$btn-gap: 20px;

.Navbar{
    display: flex;
    flex-direction: column;
    padding: 20px;
    height: 100%;
    justify-content: center;
    align-items: center;
    transition: 0.4s ease-in-out;

    &.disabled{
        opacity: 0.6;
        pointer-events: none;
        filter: blur(8px);
    }

    ul{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: $btn-gap;
        list-style: none;
    }

    &_item{
        text-decoration: none;
        width: $btn-width;
        height: $btn-width;
        display: flex;
        justify-content: center;
        align-items: center;
        background: var(--neutral-700);
        color: white;
        border-radius: 50%;
        transition: 0.2s ease-in-out;
        overflow: hidden;
        img{
            position: relative;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            inset: 0;
            widows: 100%;
            height: 100%;
            object-fit: cover;
        }
        &:hover{
            background: var(--neutral-600);
            border-radius: 40%;
        }
        &.active{
            background: var(--primary);
           .material-icons{
                display: flex;
            } 
            .material-icons-outlined{
                display: none;
            }
        }
        .material-icons{
            display: none;
        }
    }
}
    
</style>