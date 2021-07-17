<template>
    <header ref="header">
        <nav class="menu__overlay animate__animated">
            <div class="menu__overlay--container">
            <ul class="menu__list-link">
                <li>
                    <a href="#" @click.prevent.stop="handleLinkClick('/all-post/')" title="All Posts">All Posts</a>
                </li>
                <li>
                    <a href="#" @click.prevent.stop="handleLinkClick('/currently-reading/')" title="Currently Reading">Currently Reading</a>
                </li>
                <!-- <li><a href="#" title="Coming Soon">Portofolio</a></li>
                <li><a href="#" title="Coming Soon">Resources</a></li>
                <li><a href="#" title="Coming Soon">Playground</a></li> -->
                <li><a href="#" @click.prevent.stop="handleLinkClick('/about/')" title="About">About</a></li>
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
                <ul class="nav__item">
                    <li>
                        <g-link :to="'/all-post/'" title="All Posts">All Posts</g-link>
                    </li>
                    <li>
                        <g-link :to="'/currently-reading/'" title="Currently Reading">Currently Reading</g-link>
                    </li>
                    <li><g-link :to="'/about/'" title="About">About</g-link></li>
                </ul>
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

.type-link, .hamburger-menu {
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
        display: block;
    }

    .nav__item {
        display: inline-flex;
    }

    .nav__item li {
        font-family: 'acumin-pro-semi-condensed';
    }

    .nav__item li + li {
        margin-left: 20px;
    }

    .hide-mobile {
        display: inline;
    }

    .hamburger-menu {
        display: none;
    }
}
</style>

<script>
import HamburgerMenu from "./HamburgerMenu";

export default {
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
        handleLinkClick(path) {
            let hamburgerMenu = document.querySelector('#hamburgerMenu');
            this.showMenu();
            hamburgerMenu.classList.toggle('active');
            this.$router.push({
                path: this.$tp(path)
            })
        }
    }
}
</script>
