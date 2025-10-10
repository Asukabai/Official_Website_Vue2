<template>
  <div id="app">
    <Header></Header>
    <router-view/>
    <Footer></Footer>
    <GoTop></GoTop>
  </div>
</template>
<!--export default {
  name: 'App',
  metaInfo: {
    link: [
      { rel: 'icon', href: require('/assets/img/favicon.ico') }
    ]
  }
}-->
<script>
export default {
  name: 'App'
}
</script>

<style>
</style>
