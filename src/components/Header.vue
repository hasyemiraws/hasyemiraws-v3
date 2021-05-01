<template>
    <header ref="header" class="fixed w-full z-10 bg-white left-0 top-0">
        <nav class="menu__overlay animate__animated">
            <div class="menu__overlay--container">
            <ul class="menu__list-link">
                <li>
                    <a href="#" @click.prevent.stop="handleLinkClick('/all-post/')" title="All Posts">All Posts</a>
                </li>
                <!-- <li><a href="#" title="Coming Soon">Portofolio</a></li>
                <li><a href="#" title="Coming Soon">Resources</a></li>
                <li><a href="#" title="Coming Soon">Playground</a></li> -->
                <li><a href="#" @click.prevent.stop="handleLinkClick('/about/')" title="About">About</a></li>
            </ul>
            </div>
        </nav>

        <div class="container mx-auto max-w-screen-xl z-10 relative">
            <div class="flex justify-between items-center">
            <span class="filler"></span>
            <g-link :to="$tp('/')" class="justify-self-center type-link">
                <span class="logo-type">hraws</span>
            </g-link>
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
}

header.scrolled > div, header.scrolled > div > div {
    height: 50px;
}

.logo-type {
	font-family: acumin-pro-wide, sans-serif;
	font-style: normal;
	font-weight: 700;
	letter-spacing: 1px;
    font-size: 28px;
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

.filler {
    width: 60px;
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
