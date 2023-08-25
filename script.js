

Vue.component('birthday', {
    data() {
        return {
            title: 'Birthday invitation',
            header__text: 'Приглашение на день рождения',
            content__text: 'Дорогие друзья! Приглашаю вас на торжество, посвященное моему дню рождению. Хочу в этот день видеть рядом самых близких и родных людей.Задор и веселье гарантирую!',
            content__address: 'Жду вас 24.09.23г. в 15 часов на улице Котовского 121.',
            content__withMyself: 'С собой иметь хорошее настроение и парочку тостов в мою честь. Отказы не принимаются.',
            img_one: 'img/img1.svg',
            img_two: 'img/img2.svg'
        }
    },

    template: `<section class="header">
    <div class="main">
        <h1 class="header__title">{{ title }}</h1>
        <p class="header__text">{{ header__text }}</p>
        <article class="content">
            <p class="content__text">{{ content__text }}</p>
            <p class="content__address">{{ content__address }}</p>
            <p class="content__withMyself">{{ content__withMyself }}</p>
        </article>
    </div>
    <article class="content__img">
        <img class="photo" :src="img_one" alt="flower">
        <img class="photo" src="" alt="flower">
    </article>
</section>`,
});
