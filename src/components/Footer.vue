<template>
  <div class="footer__about--container">
    <!-- <div class="footer__about--image" style="background-image: url('{{ '/assets/images/profile_2.jpg'|theme }}');">   
  </div> -->
    <div class="footer__about--info">
      <!-- <h2 class="title-section">Hasyemi Rafsanjani Asyari</h2> -->
      <!-- <p>I'm a Front End Developer from Indonesia currently living and work my daily life here in Kuala Lumpur, Malaysia. I write about books, code, and personal thoughts about life. Say hi <a class="footer__about--info--link" href="mailto:{{ site.email }}">hi@hasyemiraws.com</a>.</p> -->
      <div class="footer__about--social">
        <a target="_blank" href="https://twitter.com/hasyemiraws">
          <i class="fab fa-twitter"></i>
        </a>
        <a target="_blank" href="https://instagram.com/hasyemiraws">
          <i class="fab fa-instagram"></i>
        </a>
        <a target="_blank" href="https://www.youtube.com/channel/UCzvyjUsomu2sdTbuBJHA9ag">
          <i class="fab fa-youtube"></i>
        </a>
        <a target="_blank" href="https://codepen.io/hasyemiraws">
          <i class="fab fa-codepen"></i>
        </a>
      </div>
      <small class="footer__about--copyright"
        >Made with
        <a
          class="link link__dotted"
          href="https://gridsome.org/"
          target="_blank"
          >Gridsome</a
        >
        and many hours of procrastinating.</small
      >
    </div>
  </div>
</template>

<style>
.footer__about--container {
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-items: center;
    padding: 20px 0;       
}

.footer__about--copyright {
    font-family: neue-haas-unica, sans-serif;
    font-size: 11px;
}

.footer__about--info {		
    max-width: 90%;
    padding: 10px;
}

.footer__about--social {
    font-size: 1.5em;
}

.footer__about--social a {
    color: #101010;
    margin-right: 15px;
}

.link__dotted {
  border-bottom: 1px dashed #202020;
}
</style>