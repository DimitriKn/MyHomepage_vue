<template>
    <div class="container">
        <footer class="footer" id="cont">
            <div class="container">
                <div class="row">
                    <div class="col-md-4">
                        <h4 id="dt">Datenschutz</h4>
                        <router-link   to="/impressum">Impressum</router-link>
                    </div>
                    <div class="col-md-4">
                        <h4>Social Media</h4>
                        <a href="https://www.facebook.com/profile.php?id=1761776341"><i class="fab fa-facebook-f fa-2x" ></i></a>
                        <a href="https://www.xing.com/profile/Dimitri_Knippenberg/cv"><i class="fab fa-xing fa-2x"></i></a>
                        <a href="https://github.com/DimitriKn"><i class="fab fa-github fa-2x"></i></a>
                    </div>
                    <div class="col-md-4">
                        <h5><strong>Kontakt</strong></h5>
                        <p><strong>Email:</strong> <a href="mailto:d.knippenberg@rivia-it.de">d.knippenberg@rivia-it.de</a></p>
                        <p><strong>Tel.:</strong> +49 15902166068</p>
                        <p><strong>Adresse:</strong> Ludwig-Mond-Str. 90</p>
                         <p>34121 Kassel</p>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style scoped>
footer {
    margin-top: 60px;
    height: 12.5rem;
    line-height: 1rem;
    position: relative;
    left: 0;
    bottom: 0;
    width: 100%;
    background-color: rgba(193, 193, 193, 0.76);
    color: #000000;
    text-align: center;
    padding: 25px;
    border-radius: 10px 10px 0 0  ;
}
    a {
        color: #2c3e50;
    }

    i {
        padding: 30px 10px;
    }

    #dt {
        padding-bottom: 30px;
    }
    @media screen and (max-width: 600px) {
    footer{
        height: 25rem;
    }
    }
</style>
