<template>
    <div class="container">
        <div class="card">
            <h2 class="pb-3 pt-2 border-bottom mb-5">Mein Weg zum Webentwickler</h2>
            <!--first section-->
            <div class="row align-items-center how-it-works d-flex">
                <div class="col-2 text-center bottom d-inline-flex justify-content-center align-items-center">
                    <div class="circle font-weight-bold"><i class="fas fa-map-signs fa-3x"></i></div>
                </div>
                <div class="col-6">
                    <span>06.2019-07.2019</span><h5>Frontend Developer bei Cierra GmbH</h5>
                    <p>Entwicklung von WebApps mit VueJS und NuxtJS</p>
                </div>
            </div>
            <!--path between 1-2-->
            <div class="row timeline">
                <div class="col-2">
                    <div class="corner top-right"></div>
                </div>
                <div class="col-8">
                    <hr/>
                </div>
                <div class="col-2">
                    <div class="corner left-bottom"></div>
                </div>
            </div>
            <!--second section-->
            <div class="row align-items-center justify-content-end how-it-works d-flex">
                <div class="col-6 text-right">
                    <span>02.2019</span>
                    <h5>Praktikum bei Piwonka Medienagentur in Kassel</h5>
                    <p>Webdesign mit HTML, CSS und JavaScript, E-Commerce mit CMS-Systemen</p>
                </div>
                <div class="col-2 text-center full d-inline-flex justify-content-center align-items-center">
                    <div class="circle font-weight-bold"><i class="fas fa-map-marker-alt fa-2x"></i></div>
                </div>
            </div>
            <!--path between 2-3-->
            <div class="row timeline">
                <div class="col-2">
                    <div class="corner right-bottom"></div>
                </div>
                <div class="col-8">
                    <hr/>
                </div>
                <div class="col-2">
                    <div class="corner top-left"></div>
                </div>
            </div>
            <!--third section-->
            <div class="row align-items-center how-it-works d-flex">
                <div class="col-2 text-center full d-inline-flex justify-content-center align-items-center">
                    <div class="circle font-weight-bold"><i class="fas fa-map-marker-alt fa-2x"></i></div>
                </div>
                <div class="col-6">
                    <span>03.2018-01.2019</span>
                    <h5>Selbstudium</h5>
                    <p>Webentwickung: JavaScript, Jquery, Angular. App Entwicklung: Vusual Studio Xamarin</p>
                </div>
            </div>
            <!--path between 1-2-->
            <div class="row timeline">
                <div class="col-2">
                    <div class="corner top-right"></div>
                </div>
                <div class="col-8">
                    <hr/>
                </div>
                <div class="col-2">
                    <div class="corner left-bottom"></div>
                </div>
            </div>
            <!--second section-->
            <div class="row align-items-center justify-content-end how-it-works d-flex">
                <div class="col-6 text-right">
                    <span>01.2018</span>
                    <h5>Abschlüssprüfung and der IHK</h5>
                    <p>Fachinformatiker in der Fachrichtung Anwendungsentwicklung</p>
                </div>
                <div class="col-2 text-center full d-inline-flex justify-content-center align-items-center">
                    <div class="circle font-weight-bold"><i class="fas fa-map-marker-alt fa-2x"></i></div>
                </div>
            </div>
            <div class="row timeline">
                <div class="col-2">
                    <div class="corner right-bottom"></div>
                </div>
                <div class="col-8">
                    <hr/>
                </div>
                <div class="col-2">
                    <div class="corner top-left"></div>
                </div>
            </div>
            <!--third section-->
            <div class="row align-items-center how-it-works d-flex">
                <div class="col-2 text-center full d-inline-flex justify-content-center align-items-center">
                    <div class="circle font-weight-bold"><i class="fas fa-map-marker-alt fa-2x"></i></div>
                </div>
                <div class="col-6">
                    <span>03.2017 - 12.2017</span>
                    <h5>7-Monatige Praxisphase
                    an der Universität Kassel im IT-Servicecentrum</h5>
                    <p>Programmierung mit PHP, Entwicklung, Anpassung und Erweiterung Webapplikationen und Webdesign mit HTML5 CSS3 und JavaScript</p>
                </div>
            </div>
            <div class="row timeline">
                <div class="col-2">
                    <div class="corner top-right"></div>
                </div>
                <div class="col-8">
                    <hr/>
                </div>
                <div class="col-2">
                    <div class="corner left-bottom"></div>
                </div>
            </div>
            <!--second section-->
            <div class="row align-items-center justify-content-end how-it-works d-flex">
                <div class="col-6 text-right">
                    <span>01.2016-03.2017</span>
                    <h5>Umschulung zum Fachinformatiker Anwendungsentwicklung bei der WBS TRAINING AG</h5>
                    <p>Programmierung in C und C#, Projektmanagement un Netzwerk</p>
                </div>
                <div class="col-2 text-center full d-inline-flex justify-content-center align-items-center">
                    <div class="circle font-weight-bold"><i class="far fa-dot-circle fa-2x"></i></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Timeline"
    }
</script>

<style scoped>

    @media screen and (max-width: 600px) {
        .col-6 {
            -ms-flex: 0 0 50%;
            -webkit-box-flex: 0;
            flex: 0 0 70%;
            max-width: 70%;
        }
    }
    .col-6 {
        text-align: left;
    }

    .card {
        background-color: #fffc;
    }
    .circle {
        padding: 13px 20px;
        border-radius: 50%;
        background-color: transparent;
        color: #5e5e5e;
        max-height: 50px;
        z-index: 2;
    }

    .how-it-works.row .col-2 {
        align-self: stretch;
    }
    .how-it-works.row .col-2::after {
        content: "";
        position: absolute;
        border-left: 0px solid #ED8D8D;
        z-index: 1;
    }
    .how-it-works.row .col-2.bottom::after {
        height: 50%;
        left: 50%;
        top: 50%;
    }
    .how-it-works.row .col-2.full::after {
        height: 100%;
        left: calc(50% - 3px);
    }
    .how-it-works.row .col-2.top::after {
        height: 50%;
        left: 50%;
        top: 0;
    }


    .timeline div {
        padding: 0;
        height: 40px;
    }
    .timeline hr {
        border-top: 3px solid rgba(27, 110, 255, 0.5);
        margin: 0;
        top: 17px;
        position: relative;
    }
    .timeline .col-2 {
        display: flex;
        overflow: hidden;
    }
    .timeline .corner {
        border: 3px solid rgba(27, 110, 255, 0.5);
        width: 100%;
        position: relative;
        border-radius: 15px;
    }
    .timeline .top-right {
        left: 50%;
        top: -50%;
    }
    .timeline .left-bottom {
        left: -50%;
        top: calc(50% - 3px);
    }
    .timeline .top-left {
        left: -50%;
        top: -50%;
    }
    .timeline .right-bottom {
        left: 50%;
        top: calc(50% - 3px);
    }

</style>
