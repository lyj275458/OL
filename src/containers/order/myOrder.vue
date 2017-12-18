<template>
	<div>
		<div class="swiper-container gallery-top">
	    <div class="swiper-wrapper">
	      <div class="swiper-slide" style="background:#f49"></div>
	      <div class="swiper-slide" style="background:#f99"></div>
	      <div class="swiper-slide" style="background:red"></div>
	      <div class="swiper-slide" style="background:green"></div>
	      <div class="swiper-slide" style="background:yellow"></div>
	     
	    </div>
	    <!-- Add Arrows -->
	    <div class="swiper-button-next swiper-button-white"></div>
	    <div class="swiper-button-prev swiper-button-white"></div>
	  </div>
	  <div class="swiper-container gallery-thumbs">
	    <div class="swiper-wrapper">
	      <div class="swiper-slide" style="background:#f49"></div>
	      <div class="swiper-slide" style="background:#f99"></div>
	      <div class="swiper-slide" style="background:red"></div>
	      <div class="swiper-slide" style="background:green"></div>
	      <div class="swiper-slide" style="background:yellow"></div>
	     
	    </div>
	  </div>
	</div>
</template>

<script>
	import Swiper from 'swiper'
	export default {
		data : function() {
			return{
				useImg:'/static/images/use.jpg',
				iconImg:'/static/images/pinicon.png',
				
				curObj:{},
				
			}
		},
		components: {
			Swiper,
		},
		mounted(){
			var galleryTop = new Swiper('.gallery-top', {
		      spaceBetween: 10,
		     
		      navigation: {
		        nextEl: '.swiper-button-next',
		        prevEl: '.swiper-button-prev',
		      },
		    });
		    var galleryThumbs = new Swiper('.gallery-thumbs', {
		      spaceBetween: 10,
		      centeredSlides: true,
		      
		      slidesPerView: 'auto',
		      touchRatio: 0.2,
		      slideToClickedSlide: true,
		    });
		    galleryTop.controller.control = galleryThumbs;
		    galleryThumbs.controller.control = galleryTop;
		},
		methods:{
			
		}
		
	}
</script>

<style lang="scss" scoped>
@import "../../../static/swiper.min.css";
.swiper-container {
      width: 100%;
      height: 6.0rem;
      margin-left: auto;
      margin-right: auto;
    }
    .swiper-slide {
      background-size: cover;
      background-position: center;
    }
    .gallery-top {
      height: 2.4rem;
      width: 100%;
    }
    .gallery-thumbs {
      height:0.6rem;
      box-sizing: border-box;
      padding: 0.10rem 0;
    }
    .gallery-thumbs .swiper-slide {
      width: 25%;
      height: 100%;
      opacity: 0.4;
    }
    .gallery-thumbs .swiper-slide-active {
      opacity: 1;
    }
</style>