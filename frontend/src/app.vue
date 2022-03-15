<template >
    <section class="app">
        <app-header />
        <router-view />
    </section>
</template>

<script>
import appHeader from './components/app-header.vue';

export default {  
    name: 'app',
    created() {
        this.$store.dispatch('loadToys')
    },
    components: {
        appHeader
    }
}
</script>

<style lang="">
  
</style>