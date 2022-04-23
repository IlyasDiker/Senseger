<template>
    <section class="HeroSection">
        <img :src="asset" alt="" class="HeroSection_background">
        <h1 class="text-3xl fw-400">{{title}}</h1>
        <span class="text-sm fw-300 op-7">{{description}}</span>
    </section>
</template>

<script>
export default {
  props: {
      title: String,
      description: String,
      asset: String,
  },
    
}
</script>

<style lang="scss" scoped>
    .HeroSection{
        background: var(--neutral-700);
        width: 100%;
        padding: 60px 40px 40px 40px;
        border-radius: 40px;
        position: relative;
        display: flex;
        flex-direction: column;
        gap: 5px;

        &_background{
            position: absolute;
            top: 0px;
            left: 0px;
            right: 0px;
            bottom: 0px;
            widows: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
</style>