<template>
   <div class="container">
       <h3>Projekte</h3>
        <br>
        <b-carousel
                id="carousel-1"
                :interval="9000"
                controls
                indicators
                background="#ababab"
                img-width="1024"
                img-height="480"
                style="text-shadow: 1px 1px 2px #333;"
        >
            <b-carousel-slide
            >
                <template v-slot:img>
                    <img
                            class="d-block  w-100"
                            src="../../assets/agora.png"
                            alt="image slot"
                    >
                </template>
            </b-carousel-slide>
            <b-carousel-slide
            >
                <template v-slot:img>
                    <img
                            class="d-block w-100"
                            src="../../assets/story.png"
                            alt="image slot"
                    >
                </template>
            </b-carousel-slide>
            <b-carousel-slide
            >
                <template v-slot:img>
                    <img
                            class="d-block w-100"
                            src="../../assets/termin.png"
                            alt="image slot"
                    >
                </template>
            </b-carousel-slide>
            <b-carousel-slide
            >
                <template v-slot:img>
                    <img
                            class="d-block  w-100"
                            src="../../assets/Zd.png"
                            alt="image slot"
                    >
                </template>
            </b-carousel-slide>
            <b-carousel-slide
            >
                <template v-slot:img>
                    <img
                            class="d-block  w-100"
                            src="../../assets/App.png"
                            alt="image slot"
                    >
                </template>
            </b-carousel-slide>
        </b-carousel>

   </div>

</template>

<script>


    export default {
        name: "Projects",

    }
</script>

<style scoped>
#myCarousel{
    padding-top: 60px;
}
    .card{
        margin-top: 50px;
        margin-bottom: 50px;
    }
 img {
     height:480px;
 }
    @media (max-width: 600px){
        img {
            height: 50%;
        }
    }
</style>
