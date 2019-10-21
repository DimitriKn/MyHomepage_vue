<template>
    <div class="container py-3">
        <div>
            <b-jumbotron>

                <template v-slot:header>Willkommen !</template>
                <template v-slot:lead>
                    Mein Name ist Dimitri Knippenberg. Als ausgebildeter Fachinformatiker für Anwendungsentwicklung suche ich neue Herausforderungen.
                </template>
                <img src="../assets/photo2.jpg" alt="img" >
                <hr class="my-4">
                <div class="card">
                    <div class="row ">
                        <div class="col-md-12 px-3">
                            <div class="card-block px-3">
                                <p class="card-text">Meine Schwerpunkte liegen in Webentewicklung (HTML, CSS, JavaScript) und Design (Adobe XD) sowie in PHP und C# Programmierung </p>
                            </div>
                        </div>

                    </div>
                </div>

            </b-jumbotron>
        </div>

    </div>
</template>

<script>
    export default {
        name: "Infocard"
    }
</script>

<style scoped>
img{
    width: 200px;
border-radius: 10px;
    -webkit-filter: drop-shadow(3px 3px 3px #5e5e5e);
    filter: drop-shadow(3px 3px 3px #5d5d5d);
}

    .card{
        background-color: transparent;
    }
.display-3 {
    font-size: 2.5rem;
    font-weight: 300;
    line-height: 1.2;
}
.jumbotron {
    padding: 2rem 1rem;
    margin-bottom: 2rem;
    background-color: #fffc;
    border-radius: 0.3rem;
}
</style>
