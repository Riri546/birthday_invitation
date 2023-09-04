<template>
    <div>
        `<section class="header">
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
                <img class="photo" src="#" :alt="alt">
                <img class="photo" src="#" :alt="alt">
            </article>
        </section>`
    </div>
</template>

<script>
export default {
    name: 'BirthdayInvitation',

    data() {
        return {
            title: 'Birthday invitation',
            header__text: 'Приглашение на день рождения',
            content__text: 'Дорогие друзья! Приглашаю вас на торжество, посвященное моему дню рождению. Хочу в этот день видеть рядом самых близких и родных людей.Задор и веселье гарантирую!',
            content__address: 'Жду вас 24.09.23г. в 15 часов на улице Котовского 121.',
            content__withMyself: 'С собой иметь хорошее настроение и парочку тостов в мою честь. Отказы не принимаются.',
            img_one: 'img/img1.svg',
            img_two: 'img/img2.svg',
            alt: 'flower'
        };
    },
};
</script>

<style lang="css" scoped>
.header .content__withMyself,
.header .content__address,
.header .content__text {
    padding-bottom: 70px;
    max-width: 500px;
    color: #000;
    text-align: center;
    font-family: Cormorant Garamond;
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}

.main {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.header {
    margin: 60px 180px;
    padding-top: 70px;
    border: 5px solid #FF9094;
    background: #FFF;
}

.header__title {
    color: #000;
    text-align: center;
    font-family: Tangerine;
    font-size: 150px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
}

.header__text {
    max-width: 500px;
    padding-bottom: 52px;
    color: #000;
    text-align: center;
    font-family: Cormorant Garamond;
    font-size: 50px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}

.header .content__img {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
</style>