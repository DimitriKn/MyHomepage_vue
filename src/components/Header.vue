<template>

    <nav class="navbar navbar-expand-lg navbar-light fixed-top bg-light">

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#nav10" aria-controls="nav10" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-md-center" id="nav10">
            <a class="navbar-brand" href="#">Web Developer +</a>
            <ul class="navbar-nav">
                <li class="nav-item ">
                    <router-link class="nav-link" to="/">Home<span class="sr-only">(current)</span></router-link>
                </li>
                <li class="nav-item">
                    <a class="nav-link"  href="#" v-scroll-to="{ el: '#skill', offset: -100 }" >Skills</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link " href="#" v-scroll-to="{ el: '#serv', offset: -100 }">Leistungen</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link " href="#" v-scroll-to="{ el: '#time', offset: -100 }">Werdegang</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link " href="#" v-scroll-to="{ el: '#pro', offset: -100 }">Projekte</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link " href="#" v-scroll-to="{ el: '#cont', offset: -100 }">Kontakt</a>
                </li>

            </ul>
        </div>
    </nav>

</template>

<script>

    export default {
        name: "Header"
    }




</script>

<style scoped>
.navbar{
 padding: 0.5rem 0.5rem 0.5rem 0.5rem;
}
.navbar-brand {
    margin-right: 10rem;
    font-family: "Forte",sans-serif;
    padding-top: 0;
    padding-bottom: 0;
    font-size: 1.5rem;
}

</style>
