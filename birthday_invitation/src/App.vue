<template>
  <div id="app">
    <BirthdayInvitation />
  </div>
</template>

<script>
import BirthdayInvitation from './components/BirthdayInvitation.vue'

export default {
  name: 'App',
  components: {
    BirthdayInvitation
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

body {
  background-color: #FFE3E4;
  font-family: "Cormorant Garamond", serif;
  font-family: "Tangerine", cursive;
}

a {
  text-decoration: none;
}

/* Стили для среднего телефона */
@media (max-width: 1024px) {

  .header .content__text,
  .header .content__address,
  .header .content__withMyself {
    padding-bottom: 20px;
    color: #000;
    text-align: center;
    font-family: Cormorant Garamond;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .body {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .header {
    margin: 40px;
    padding-top: 40px;
    border: 2px solid #FF9094;
    background: #FFF;
  }

  .header__title {
    max-width: 280px;
    color: #000;
    text-align: center;
    font-family: Tangerine;
    font-size: 45px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  .header__text {
    max-width: 300px;
    padding-bottom: 30px;
    color: #000;
    text-align: center;
    font-family: Cormorant Garamond;
    font-size: 30px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .photo {
    padding-top: 50px;
    max-width: 120px;
  }
}
</style>
