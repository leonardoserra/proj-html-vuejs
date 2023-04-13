<script>
export default {
    name: 'MyBanner'
}
</script>
<template>
    <div class="banner-body">

        <div class="left-banner">
            <h3 class="title">Subscribe our newsletter</h3>
            <p class="text">
                There are many variations of passages of Lorem
                Ipsum available, but the majority have
                suffered alteration in some form, by injected humour, or
                randomised words
            </p>
        </div>
        <div class="right-banner">
            <div class="title">YOUR E-MAIL ADDRESS</div>
            <div class="mail-form">
                <input type="email" placeholder="Enter your E-mail" />
                <button>SUBSCRIBE</button>
            </div>


        </div>

    </div>
</template>


<style scoped lang="scss">
@use '../styles/partials/mixins';
@use '../styles/partials/colors' as*;

.banner-body {
    width: 60%;
    margin: auto;
    height: 200px;
    @include mixins.flex-center;
    color: $white;

    .left-banner,
    .right-banner {
        .title {
            margin-bottom: 10px;
        }
    }

    .left-banner {
        width: calc(60% - 40px);
        margin: 0 20px;


    }

    .right-banner {
        width: calc(40% - 40px);
        margin: 0 20px;

        .mail-form {
            @include mixins.flex-align-center;

            input,
            button {
                height: 45px;
                border: none;
            }

            button {
                background-color: $button-blue;
                color: $white;
                font-size: 14px;
                padding: 10px 20px;
                // width: 40px;

                &:hover {
                    background-color: $hover-button;
                }

                &:active {
                    background-color: $active-button;
                }
            }

            input {
                background-color: $grey-light;
                color: $black-thunder;
                font-size: 14px;
                padding-left: 10px;
                width: 420px;
            }
        }

    }
}
</style>