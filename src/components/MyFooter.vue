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
    },
    methods: {
        getImageURL: function (path) {
            return new URL(path, import.meta.url).href;

        }
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
                    <ul class="list">
                        <li v-for="(item, index) in pages.list" :key="index">
                            <a href="#">{{ item }}</a>
                        </li>
                    </ul>

                </ul>
                <ul class="blog category">
                    <li class="title">{{ blog.title }}</li>
                    <li v-for="(article, index) in blog.articles" :key="index">
                        <a class="article" href="#">
                            <div class="left">
                                <div class="img-wrapper">
                                    <img :src="getImageURL(`../assets/images/${article.imagePath}`)"
                                        :alt="article.imagePath" class="image">
                                </div>
                            </div>
                            <div class="right">
                                <h4 class="catchPhrase">
                                    {{ article.catchPhrase }}
                                </h4>
                                <div class="date">
                                    {{ article.date }}
                                </div>
                            </div>

                        </a>

                    </li>

                </ul>
            </li>
        </ul>

    </div>
</template>


<style scoped lang="scss">
@use '../styles/partials/mixins';
@use '../styles/partials/colors' as*;

.footer {
    margin-bottom: 100px;

    .categories {

        display: flex;
        justify-content: center;


        list-style: none;
        gap: 50px;

        .category {
            list-style: none;
            width: calc(100% / 4);

            .title {
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

        .pages {
            margin-bottom: 30px;

            .list {
                @include mixins.flex-space-between-wrap;
                list-style: disc;
                margin-left: 17px;

                li {
                    width: 50%;
                    margin-bottom: 15px;

                    a {
                        text-decoration: none;
                        font-size: 0.9rem;
                        color: $black-thunder;

                        &:hover {
                            color: $active-button;
                        }
                    }
                }

                ;
            }

        }

        .blog {
            .article {
                @include mixins.flex-space-between;
                gap: 20px;
                text-decoration: none;
                margin-bottom: 10px;

            }

            .left {
                width: 30%;

                .img-wrapper {
                    width: 65px;
                    height: 65px;

                    &:hover {
                        box-shadow: 0 0 5px $grey-darker;
                    }

                    .image {
                        object-fit: cover;
                        width: 65px;
                        height: 65px;

                    }
                }
            }

            .right {
                width: 70%;
                color: $grey-dark;

                .catchPhrase {
                    &:hover {
                        text-decoration: underline;
                    }
                }
            }
        }
    }
}
</style>