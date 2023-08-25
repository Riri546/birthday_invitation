new Vue({
    el: '#app',
})

Vue.component('birthday', {
    data() {
        return {

        }
    },

    template: `<section class="header">
    <div class="main">
        <h1 class="header__title">Birthday invitation</h1>
        <p class="header__text">Приглашение на день рождения</p>
        <article class="content">
            <p class="content__text">Дорогие друзья! Приглашаю вас на торжество, посвященное моему дню рождению.
                Хочу в этот день видеть
                рядом
                самых близких и родных людей. Задор и веселье гарантирую! </p>
            <p class="content__address">Жду вас 24.09.23г. в 15 часов на улице Котовского 121. </p>
            <p class="content__withMyself">С собой иметь хорошее настроение и парочку тостов в мою честь. Отказы
                не принимаются.</p>
        </article>
    </div>
    <article class="content__img">
        <img class="photo" src="img/img1.svg" alt="flower">
        <img class="photo" src="img/img2.svg" alt="flower">
    </article>
</section>`,
});
