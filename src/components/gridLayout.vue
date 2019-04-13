<template>
  <div class="wrapper">
    <div class="head-wrapper"><headview></headview></div>
    <div class="navi-wrapper"><naviview></naviview></div>
    <div class="context-wrapper">context</div>
  </div>
</template>

<script>
import headview from '@/components/HeadWrapper'
import naviview from '@/components/navi'

export default {
  name: 'grid-layout',
  components: {
    'headview': headview,
    'naviview': naviview
  }
}
</script>

<style scoped>
  .wrapper {
    display: grid;
    background-color: #c6f3ff;
    width: 100%;
    height: 100%;
    grid-template-rows: 60px minmax(220px, auto) ;
    grid-template-columns: 220px minmax(50px, auto);
    bottom: 0;
  }

  .head-wrapper{
    background-color: #3c8dbc;
    width: 100%;
    grid-column-start: 1;
    grid-column-end: 4;

  }

  .navi-wrapper {
    background-color: #3c8dbc;
    height: 100%;
    grid-column-start: 1;
    grid-column-end: 2;
  }

  .context-wrapper {
    background-color: #a0f4c7;
    height: 100%;
    grid-column-start: 2;
    grid-column-end: 4;
  }
</style>
