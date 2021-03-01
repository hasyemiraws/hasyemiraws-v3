<template>
    <header class="fixed w-full z-10 bg-white left-0 top-0">
        <div class="container mx-auto max-w-screen-xl">
            <div class="flex justify-between items-center">
            <span class="filler"></span>
            <a href="https://hasyemiraws.com" class="justify-self-center type-link">
                <span class="logo-type">hraws</span>
            </a>
            <span class="hamburger-menu">
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
    }
}
</script>
