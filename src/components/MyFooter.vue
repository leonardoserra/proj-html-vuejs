<script>
import { store } from '../store.js'
export default {
    name: 'MyFooter',
    data() {
        return {
            store,
            about: store.footerData[0],
            contact: store.footerData[1],
            pages: store.footerData[2],
            blog: store.footerData[3]

        }
    },
    created() {
        console.log(this.about)
        console.log(this.contact)
        console.log(this.pages)
        console.log(this.blog)
    }
}
</script>
<template>
    <div class="footer">
        <ul>
            <li class="categories">
                <ul class="about category">
                    <li class="title">{{ about.title }}</li>
                    <li class="text">
                        <span><a href="#">{{ about.link1 }}</a></span>
                        <span>&nbsp;{{ about.text }}</span>
                        <span>&nbsp;<a href="#">{{ about.link2 }}</a></span>
                    </li>
                    <li class="icons">
                        <span v-for="(icon, index) in about.icons" :key="index">
                            <a href="#">
                                <i :class="`fa-brands fa-${icon}`"></i>
                            </a>
                        </span>
                    </li>


                </ul>
                <ul class="contact category">
                    <li class="title">{{ contact.title }}</li>
                    <li class="text">
                        <div class="address">{{ contact.address }}</div>
                        <div class="tel">Tel.:&nbsp;{{ contact.tel }}</div>
                        <div class="fax">Fax.:&nbsp;{{ contact.fax }}</div>
                        <div class="mail"><a href="#">{{ contact.mail }}</a></div>
                    </li>

                </ul>
                <ul class="pages category">
                    <li class="title">{{ pages.title }}</li>

                </ul>
                <ul class="blog category">
                    <li class="title">{{ blog.title }}</li>

                </ul>
            </li>
        </ul>

    </div>
</template>


<style scoped lang="scss">
@use '../styles/partials/mixins';
@use '../styles/partials/colors' as*;

.footer {

    .categories {
        @include mixins.flex-center;
        list-style: none;
        gap: 50px;

        .category {
            list-style: none;
            width: calc(100% / 4);

            li:first-child {
                font-weight: 600;
                margin-bottom: 25px;
                font-size: 1.1rem;

            }

            li {
                font-size: 0.8rem;
            }
        }

        .about {
            .text {
                margin-bottom: 15px;
                font-size: 0.8rem;

                a {
                    text-decoration: none;
                    color: $button-blue;
                }
            }

            .icons {
                i {
                    font-size: 1.2rem;
                    margin-right: 10px;
                    color: $grey-dark;
                }

            }
        }

        .contact {
            .text {
                margin-bottom: 15px;
                font-size: 0.8rem;
            }

            .address {
                margin-bottom: 15px;
            }

            .fax {
                margin-bottom: 12px;
            }

            .mail {
                a {
                    text-decoration: none;
                    color: $grey-dark;

                }
            }
        }
    }
}
</style>