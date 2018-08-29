<template>
  <div id="app" class="container-fluid h-100 d-flex flex-column">
    
    <nav class="navbar navbar-expand-sm bg-light">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link :to="{name: 'Home'}" class="nav-link">Main</router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{name: 'Add'}" class="nav-link">Add SLAM</router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{name: 'List'}" class="nav-link">SLAM List</router-link>
        </li>
      </ul>
    </nav>


    <div class="gap">
      <router-view></router-view>
    </div>

    <footer class="mt-auto p-3">
      <div class="container">
        <span>
          <footer id="made-with-love">Made with  <svg class="heart" viewBox="0 0 32 29.6"> 
            <path d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2
            c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"/>
          </svg> by <a href="https://ecomarine.kz/hse.html" target="_blank">EcoMarine</a>
          </footer>
        </span>
      </div>
    </footer>

      

  </div>
</template>

<script>
  import DatePicker from "vue-pikaday-component";
  export default {
    name: "App",
    components: {
      DatePicker
    }
  };
</script>

<style>
  @import "bootstrap/dist/css/bootstrap.min.css";
    #app {
      font-family: "Roboto", sans-serif;
      color: #2c3e50;
    }
    .gap {
      margin-top: 50px;
    }
</style>

<style lang="scss">
  @import url("https://fonts.googleapis.com/css?family=Roboto");
    
    .footer {
      font-family: "Roboto", sans-serif;
      bottom: 0;
      width: 100%;
      /* Set the fixed height of the footer here */
      /* height: 120px;
      /* line-height: 60px; /* Vertically center the text there */
      background-color: #f5f5f5;
    }

    #made-with-love {
      text-align: left;
      padding-top: 10vh;
    }

    a {
      font-family: "Roboto", sans-serif;
      color: #0d326e;
      font-weight: bold;
    }
    .heart {
      fill: red;
      position: relative;
      top: 3px;
      width: 17px;
      animation: pulse 1s ease infinite; 
    }

    @keyframes pulse {
      0% { transform: scale(1); }
      50% { transform: scale(1.3); }
      100% { transform: scale(1); }
    }

</style>


<style>
    
  @import url("https://fonts.googleapis.com/css?family=Roboto");
     *{
      margin: 0;
      padding: 0;
      border: none;
      outline: none;
      font-size: 100%;
      font-family: "Roboto";
      text-decoration: none;
      box-sizing: border-box;
    }

  </style>
