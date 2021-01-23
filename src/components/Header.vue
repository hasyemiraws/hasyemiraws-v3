<template>
    <header class="fixed w-full z-10 bg-white left-0 top-0">
        <div class="container mx-auto max-w-screen-xl">
            <div class="flex justify-between items-center">
            <span class="filler"></span>
            <a href="https://hasyemiraws.com" class="justify-self-center">
                <span class="logo-type">hraws</span>
            </a>
            <span>
                <hamburger-menu/>    
            </span>
            </div>
        </div>    
    </header>
</template>

<style scoped>

header {
    padding-top: 20px;
    padding-bottom: 20px;
}

.logo-type {
	font-family: acumin-pro-wide, sans-serif;
	font-style: normal;
	font-weight: 700;
	letter-spacing: 1px;
	font-size: 24px;
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
