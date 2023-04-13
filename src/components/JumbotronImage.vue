<script>
export default {
    name: 'JumbotronImage'
}
</script>
<template>
    <div class="wrapper">
        <img class="pos-abs bubblespeech" src="../assets/images/bubblespeech.png" alt="base" />
        <img class="pos-abs magnifier" src="../assets/images/magnifier.png" alt="base" />
        <img class="pos-abs book1" src="../assets/images/book1.png" alt="base" />
        <img class="pos-abs book2" src="../assets/images/book2.png" alt="base" />
        <img class="pos-abs moon" src="../assets/images/moon.png" alt="base" />
    </div>
</template>


<style scoped lang="scss">
@use '../styles/partials/mixins';
@use '../styles/partials/colors' as*;

.wrapper {
    background-image: url("../assets/images/base.png");
    width: 800px;
    height: 500px;
    background-size: contain;
    background-repeat: no-repeat;
    @include mixins.pos-rel;
}

.pos-abs {
    position: absolute;
}




.bubblespeech {
    right: 210px;
    top: 75px;
    animation-name: floating-bubble;
    animation-duration: 2s;
    animation-iteration-count: infinite;
}

.magnifier {
    right: 244px;
    bottom: 122px;
    animation-name: floating-magnifier;
    animation-duration: 3s;
    animation-iteration-count: infinite;
}

.book1 {
    top: 122px;
    right: 215px;
    animation-name: floating-book1;
    animation-duration: 3s;
    animation-iteration-count: infinite;
}

.book2 {
    bottom: 45px;
    left: 250px;
    animation-name: floating-book2;
    animation-duration: 6s;
    animation-iteration-count: infinite;
}

.moon {
    left: 120px;
    top: 140px;
    filter: grayscale(0.9);
    animation-name: floating-moon;
    animation-duration: 3s;
    animation-iteration-count: infinite;

}

@keyframes floating-bubble {
    0% {
        right: 210px;
        top: 75px;
    }

    12% {
        right: 209px;
        top: 76px;
    }

    25% {
        right: 208px;
        top: 78px;
    }

    40% {
        right: 207px;
        top: 76px;
    }

    50% {
        right: 206px;
        top: 75px;
    }

    60% {
        right: 207px;
        top: 73px;
    }

    75% {
        right: 208px;
        top: 72px;
    }

    85% {
        right: 209px;
        top: 73px;
    }

    100% {
        right: 210px;
        top: 75px;
    }
}

@keyframes floating-magnifier {
    0% {
        right: 244px;
        bottom: 122px;
    }

    12% {
        right: 244px;
        bottom: 123px;
    }

    25% {
        right: 244px;
        bottom: 125px;
    }

    38% {
        right: 244px;
        bottom: 126px;
    }

    50% {
        right: 244px;
        bottom: 128px;
    }

    62% {
        right: 244px;
        bottom: 127px;
    }

    75% {
        right: 244px;
        bottom: 125px;
    }

    88% {
        right: 244px;
        bottom: 124px;
    }

    100% {
        right: 244px;
        bottom: 122px;
    }
}

@keyframes floating-book1 {
    0% {
        right: 215px;
        top: 122px;
    }

    25% {
        right: 216px;
        top: 125px;
    }

    50% {
        right: 215px;
        top: 128px;
    }

    75% {
        right: 214px;
        top: 125px;
    }

    100% {
        right: 215px;
        top: 122px;
    }
}

@keyframes floating-moon {
    0% {
        left: 120px;
        top: 140px;
    }

    25% {
        left: 123px;
        top: 140px;
    }

    50% {
        left: 123px;
        top: 142px;
    }

    75% {
        left: 120px;
        top: 138px;
    }

    100% {
        left: 120px;
        top: 140px;
    }
}

@keyframes floating-book2 {
    0% {
        left: 250px;
        bottom: 45px;
    }

    25% {
        left: 251px;
        bottom: 40px;
    }

    50% {
        left: 250px;
        bottom: 45px;
    }

    75% {
        left: 249px;
        bottom: 38px;
    }

    100% {
        left: 250px;
        bottom: 45px;
    }
}
</style>