<script >
import { store } from '../store.js';
import MyButton from './MyButton.vue'
export default {
    name: 'PageHeader',
    data() {
        return {
            store
        }
    },
    components: {
        MyButton

    }
}
</script>

<template>
    <div class="top-header">
        <div class="left">
            <span class="language">English</span>
            &nbsp;

            <a href="#">
                <i class="fa-solid fa-chevron-down"></i>
            </a>
        </div>

        <div class="right">
            <div class="categories">
                <a class="single-category" href="#" v-for="(category, index) in store.pageHeaderDatas" :key="index">{{
                    category }}</a>
            </div>

            <div class="icons">
                <a class="single-icon" href="#" v-for="(icon, c) in store.pageHeaderIcons" :key="c"><i
                        :class="`fa-brands fa-${icon}`"></i></a>
            </div>
        </div>

    </div>

    <hr class="complete-hr" />

    <div class="bottom-header">

        <div class="logo">
            <img src="../assets/images/MasterStudy_logo.svg" alt="master_study_logo" />
        </div>

        <div class="search-section">
            <div class="category-filter">
                <a href="#">
                    <i class="fa-solid fa-bars"></i>
                </a>
                <span>CATEGORY</span>
            </div>
            <div class="search-bar">
                <input type="text" placeholder="search courses" />
                <button><i class="fa-solid fa-magnifying-glass"></i></button>
            </div>
        </div>

        <div class="client-plan">
            <a href="#" class="plan">
                <i class="fa-solid fa-bullhorn"></i>
                <span>Become an Instructor</span>
            </a>

            <a href="#" class="plan">
                <i class="fa-solid fa-briefcase"></i>
                <span>For Enterprise</span>
            </a>
        </div>

        <div class="user-login">
            <div class="login-link">
                <i class="fa-regular fa-user"></i>
                <span>Log in</span>
            </div>
            <MyButton text="SIGN UP" />
            <i class="fa-regular fa-bookmark"></i>

        </div>

    </div>
</template>



<style scoped lang="scss">
@use '../styles/partials/mixins';
@use '../styles/partials/colors' as*;

.complete-hr {
    background-color: $grey-light;
    height: 1px;
    border: none;
}

.top-header,
.bottom-header {
    @include mixins.flex-space-between;
    @include mixins.container-90;

}

.top-header {
    font-size: 8px;
    height: 30px;
    color: $grey-dark;

    .left {
        i {
            font-size: 8px;
            text-decoration: none;
            color: $grey-dark;


        }
    }

    .right {
        @include mixins.flex-space-between;
        gap: 20px;

        .single-category,
        .single-icon {
            text-decoration: none;

        }

        .single-category {
            margin-left: 15px;

            color: $grey-dark;
        }

        .single-icon {
            font-size: 10px;
            color: $grey-darker;
            margin-left: 10px;
        }
    }


}

.bottom-header {
    height: 50px;

    .logo {
        @include mixins.flex-align-center;
        height: 100%;

        img {
            height: 28px;
        }
    }


    .search-section {
        @include mixins.flex-align-center;

        .category-filter {

            color: $grey-dark;
            font-size: 8px;
            margin-right: 8px;

            span {
                margin-left: 5px;
            }
        }

        .search-bar {
            @include mixins.flex-align-center;

            input,
            button {
                height: 28px;
                border: none;
            }

            button {
                background-color: $button-blue;
                color: $white;
                font-size: 12px;
                width: 40px;

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
                font-size: 10px;
                padding-left: 5px;
                width: 300px;
            }
        }

    }

    .client-plan {
        @include mixins.flex-align-center;
        font-size: 8px;
        gap: 10px;

        a {
            text-decoration: none;

            i {
                color: $button-blue;
            }

            span {
                margin-left: 5px;
                color: $grey-darker;

            }
        }
    }

    .user-login {
        @include mixins.flex-align-center;

        .login-link {
            color: $button-blue;
            font-size: 8px;
            margin-right: 15px;

            span {
                margin-left: 5px;
                ;
            }
        }

        i {
            margin-left: 15px;
            color: $button-blue;
        }
    }


}
</style>
