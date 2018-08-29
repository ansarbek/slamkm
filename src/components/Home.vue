<template>  


  <div class="container-fluid h-100 d-flex flex-column">

    <main class="row align-items-center flex-grow-1">
        <div class="col-12 mx-auto">
            <div class="bg-transparent text-center mb-0">
                <div class="logo">
                  <img width="300" height="100" src="/images/cb-logo.svg" title="KAZ Minerals S.L.A.M." alt="KAZ Minerals S.L.A.M.">
                </div>
            </div>
        </div>
    </main>

    
    <h3>S.L.A.M.</h3>
    <p>Stop, look, assess, manage</p>
    <div>
    You can <router-link :to="{name: 'Add'}">add new SLAM</router-link> or <router-link :to="{name: 'List'}">look throw </router-link> all created S.L.A.M.'s.
    </div>
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>

<style lang="scss" scoped>
  @import url("https://fonts.googleapis.com/css?family=Roboto");

  h3 {
    font-family: "Roboto", sans-serif;
    color: #0d326e;
    margin-bottom: 24px;
    font-weight: bold;
  }

  p {
    font-family: "Roboto", sans-serif;
    color: #0d326e;
    margin-bottom: 14px;
    font-weight: bold;
  }

  img {
    width: 100%;
    max-width: 300px;
    display: block;
    max-height: 100px;
    object-fit: cover;
    margin: 32px auto 64px;
  }
</style>

