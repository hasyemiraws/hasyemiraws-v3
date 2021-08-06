<template>
    <header ref="header">
        <nav class="menu__overlay animate__animated">
            <div class="menu__overlay--container">
            <ul class="menu__list-link">
                <li>
                    <a href="#" @click.prevent.stop="handleLinkClick('/all-post/')" :title="$t('tulisan')">{{ $t('tulisan') }}</a>
                </li>
                <li>
                    <a target="_blank" href="https://www.youtube.com/c/hasyemiraws" :title="$t('youtube')">{{ $t('youtube') }}</a>
                </li>
                <!-- <li>
                    <a href="#" :title="$t('membaca')">{{ $t('membaca') }}</a>
                </li> -->
                <li>
                    <a href="#" @click.prevent.stop="handleLinkClick('/currently-reading/')" :title="$t('sedang baca')">{{ $t('sedang baca') }}</a>
                </li>
                <li>
                    <a href="#" @click.prevent.stop="handleLinkClick('/about/')" :title="$t('tentang')">{{ $t('tentang') }}</a>
                </li>
            </ul>
            </div>
        </nav>

        <div class="header__inner container mx-auto max-w-screen-xl z-10 relative">
            <div class="flex justify-between items-center">
                <g-link :to="$tp('/')" class="justify-self-center type-link">
                    <span class="logo-type">
                        h<span class="hide-mobile">asyemi</span>raws
                    </span>
                </g-link>
                <nav class="nav__desktop">
                    <transition
                        mode="out-in"
                        appear
                        enter-active-class="animate__animated animate__fadeIn animate__fast"
                        leave-active-class="animate__animated animate__fadeOut animate__faster">
                    <ul class="nav__item" :key="$i18n.locale">
                        <li>
                            <g-link :to="$tp('/all-post/', $context.locale, true)" :title="$t('tulisan')">{{ $t('tulisan') }}</g-link>

                            <ul class="nav__subitem">
                                <li>
                                    <g-link :to="$tp('/anotasi-daily/')">
                                        anotasi daily
                                    </g-link>
                                </li>
                                <li v-for="cat in $page.allCategories.edges" :key="cat.node.name">
                                    <g-link :to="$tp(cat.node.path, $context.locale, true)">
                                        {{ cat.node.name }}
                                    </g-link>
                                </li>
                            </ul>
                        </li>
                        <!-- <li>
                            <g-link :to="$tp('/podcast/')" :title="$t('podcast')">{{ $t('podcast') }}</g-link>
                        </li> -->
                        <li>
                            <a target="_blank" href="https://www.youtube.com/c/hasyemiraws" :title="$t('youtube')">{{ $t('youtube') }}</a>
                        </li>
                        <li>
                            <a href="#" :title="$t('membaca')">{{ $t('membaca') }}</a>
                            <ul class="nav__subitem">
                                <li>
                                    <g-link :to="$tp('/currently-reading/')">
                                        {{ $t('sedang baca') }}
                                    </g-link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <g-link :to="$tp('/about/')" :title="$t('tentang')">{{ $t('tentang') }}</g-link>
                        </li>
                    </ul>
                    </transition>
                    <div class="header__nav--lang">
                        <span class="header__nav--lang-label" @click="toggleDropdown">
                            {{currentLocale}}
                        </span>
                        <ul class="header__nav--lang-list" id="js__lang--list" :class="{'show': langSelectorOpen}">
                            <li v-for="lang in langListRearrange" :key="lang">
                                <a @click.prevent.stop="changeLocale(lang)" href="#">{{ lang }}</a>
                            </li>
                        </ul>
                    </div>
                </nav>

                <span class="hamburger-menu" @click="showMenu">
                    <hamburger-menu/>    
                </span>
            </div>
        </div>
    </header>
</template>

<style scoped>

header {
    padding-top: 5px;
    padding-bottom: 5px;
    margin-top: 20px;
    position: sticky;
    top: 0px;
    background: white;
    z-index: 10;
}

.header__inner {
    max-width: 1080px;
    height: 50px;
    display: flex;
    align-items: center;
    padding-left: 20px;
    padding-right: 20px;
}

.header__inner > div {
    flex: 1;
}

header.scrolled > div, header.scrolled > div > div {
    height: 50px;
}

.logo-type {
	font-family: acumin-pro-wide, sans-serif;
	font-style: normal;
	font-weight: 700;
	letter-spacing: -1px;
    font-size: 21px;
}

.menu-active .logo-type {
    color: #fff;
}

.type-link, 
.hamburger-menu {
    -webkit-transition: transform 0.4s ease;
    transition: transform 0.4s ease;
}

header.scrolled .type-link,
header.scrolled .hamburger-menu {
    transform: scale(0.8);
}

.hamburger-menu {
    margin-right: -15px;
}

.filler {
    width: 60px;
}

.nav__desktop, .hide-mobile {
    display: none;
}

@media screen and (min-width: 640px)  {
    header {
        margin-top: 60px;
    }

    .header__inner {
        padding-left: 0;
        padding-right: 0;
    }

    .nav__desktop {
        display: flex;
        align-items: center;
    }

    .nav__item {
        display: inline-flex;
        font-family: acumin-pro-wide, sans-serif;
        font-size: 13px;
        letter-spacing: 0.5px;
        text-transform: uppercase;
    }

    .nav__item > li {
        position: relative;
    }

    .nav__subitem {
        position: absolute;
        visibility: hidden;
        width: 185px;
        border-radius: 3px;
        border: 1px solid #202020;
        top: calc(100% + 10px);
        left: 50%;
        transform: translateX(-50%);
        text-align: center;
        background: white;
        padding: 5px 0px;
        box-shadow: -2px 2px 0px 2px #202020;
        opacity: 0;
        transition: all 0.3s ease;
        transition-delay: 0.2s;
    }

    .nav__item > li:hover .nav__subitem {
        visibility: visible;
        opacity: 1;
        top: calc(100% + 15px);
    }

    .nav__subitem > li {
        margin-bottom: 5px;
    }

    .nav__item > li + li {
        margin-left: 25px;
    }

    .hide-mobile {
        display: inline;
    }

    .hamburger-menu {
        display: none;
    }

    .header__nav--lang {
        display: inline-flex;
        align-items: center;
        margin-left: 20px;
        height: 35px;
        width: 45px;
        position: relative;
        text-transform: uppercase;
        font-family: acumin-pro-wide, sans-serif;
    }

    .header__nav--lang-list {
        list-style-type: none;
        display: block;
        margin-bottom: 0;			
        border-radius: 3px;						
        position: absolute;						
        width: 100%;
        background: white;
        transition: all ease 0.3s;			
        overflow: hidden;
        top: 0;
        max-height: 80px;
        height: auto;
        visibility: hidden;
        opacity: 0;
        border: 1px solid #202020;
        box-shadow: -2px 2px 0px 2px #202020;
    }

    .header__nav--lang-label {
        display: flex;
        justify-content: center;
        align-items: center;
        color: #202020cf;
        cursor: pointer;
        border: 1.2px solid #202020;
        border-radius: 3px;
        height: 35px;
        width: 45px;
        transition: box-shadow 0.3s ease;
    }

    .header__nav--lang-label:hover { 
        box-shadow: -2px 2px 0px 2px #202020;
    }   

    .header__nav--lang-list.show {				
        visibility: visible;
        opacity: 1;
    }			

    .header__nav--lang-list li {
        margin-bottom: 0;
        height: 35px;				
        display: flex;
        justify-content: center;
        align-items: center;	
        cursor: pointer;	
    }		

    .header__nav--lang-list li a {
        color: #202020cf;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;	
    }

    .header__nav--lang-list li a:hover {
        color: black;
    }
}
</style>

<script>
import HamburgerMenu from "./HamburgerMenu";

export default {
    data() {
        return {
            langSelectorOpen: false,
            currLocale: this.$i18n.locale.toString(),
        }
    },
    computed: {
        currentLocale() {
            return this.$i18n.locale.toString() == 'in-id' ? 'id' : 'en'
        },
        langListRearrange() {
            let lang = ['en', 'id'];
            let self = this;
            return lang.sort(function(x,y){ return x == self.currentLocale ? -1 : y == self.currentLocale ? 1 : 0; });
        }
    },
    components: {
        HamburgerMenu
    },
    methods: {
        showMenu() {
            let header = this.$refs["header"];
            let menuOverlay = document.querySelector('.menu__overlay');
            const windowWidth = window.innerWidth;

            let inAnimation = "animate__slideInRight"
            let outAnimation = "animate__slideOutRight"

            if (windowWidth < 730) {
                inAnimation = "animate__fadeIn"
                outAnimation = "animate__fadeOut"
            }

            const hideMenu = function() {
                header.classList.remove("menu-active")
                menuOverlay.style.display = "none";
                
                menuOverlay.removeEventListener("webkitAnimationEnd", hideMenu);
                menuOverlay.removeEventListener("animationend", hideMenu);
            }

            if (header.classList.contains('menu-active')) {
                menuOverlay.classList.add(outAnimation)
                menuOverlay.classList.remove(inAnimation)

                menuOverlay.addEventListener("webkitAnimationEnd", hideMenu);
                menuOverlay.addEventListener("animationend", hideMenu);

            } else {
                menuOverlay.style.display = "block";
                menuOverlay.classList.remove(outAnimation)
                menuOverlay.classList.add(inAnimation)
                header.classList.add("menu-active")
            }   
        },
        toggleDropdown() {
            if (this.langSelectorOpen) {
                this.langSelectorOpen = false
            } else {
                this.langSelectorOpen = true
            }
        },
        changeLocale(currentLocale) {
            this.toggleDropdown();
            let locale = (currentLocale == 'en' ? 'en-us' : 'in-id');
            if (this.$i18n.locale.toString() != locale) {
                
                this.$router.push({
                    path: this.$tp(this.$route.path, locale, true)
                })
            }
        },
        handleLinkClick(path) {
            let hamburgerMenu = document.querySelector('#hamburgerMenu');
            this.showMenu();
            hamburgerMenu.classList.toggle('active');
            
            this.$router.push({
                path: this.$tp(path, this.$i18n.locale.toString(), true)
            })
        }
    }
}
</script>
