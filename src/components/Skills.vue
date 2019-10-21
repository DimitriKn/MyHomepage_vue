<template>

    <div class="container" >
        <div class="card">
            <h2 class="pb-3 pt-2 border-bottom mb-5">Skills-Erfahrungen</h2>
        <div class="row">
            <div class="col-md-4">
                <p>Programmiersprachen</p>
                <h3 class="progress-title">JavaScript</h3>
                <div class="progress pink">
                    <div class="progress-bar" style="width:70%; background:#ff4b7d;">
                        <div class="progress-value">70%</div>
                    </div>
                </div>
                <h3 class="progress-title">PHP</h3>
                <div class="progress pink">
                    <div class="progress-bar" style="width:70%; background:#ff4b7d;">
                        <div class="progress-value">70%</div>
                    </div>
                </div>
                <h3 class="progress-title">C#</h3>
                <div class="progress pink">
                    <div class="progress-bar" style="width:70%; background:#ff4b7d;">
                        <div class="progress-value">70%</div>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <p>Frameworks</p>
                <h3 class="progress-title">VueJS</h3>
                <div class="progress blue"  >
                    <div class="progress-bar" style="width:70%; background:#3485ef;">
                        <div class="progress-value">70%</div>
                    </div>
                </div>
                <h3 class="progress-title">NuxtJS</h3>
                <div class="progress blue">
                    <div class="progress-bar" style="width:60%; background:#3485ef;">
                        <div class="progress-value">60%</div>
                    </div>
                </div>
                <h3 class="progress-title">Angular</h3>
                <div class="progress blue">
                    <div class="progress-bar" style="width:50%; background:#3485ef">
                        <div class="progress-value">50%</div>
                    </div>
                </div>
                <h3 class="progress-title">Laravel</h3>
                <div class="progress blue">
                    <div class="progress-bar" style="width:70%; background:#3485ef;">
                        <div class="progress-value">70%</div>
                    </div>
                </div>
                <h3 class="progress-title">JQuery</h3>
                <div class="progress blue">
                    <div class="progress-bar" style="width:60%; background:#3485ef;">
                        <div class="progress-value">60%</div>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <p>Webdesign</p>
                <h3 class="progress-title">HTML5</h3>
                <div class="progress yellow"  >
                    <div class="progress-bar" style="width:90%; background:#e8d324;">
                        <div class="progress-value">90%</div>
                    </div>
                </div>
                <h3 class="progress-title">CSS3</h3>
                <div class="progress yellow">
                    <div class="progress-bar" style="width:90%; background:#e8d324;">
                        <div class="progress-value">90%</div>
                    </div>
                </div>
                <h3 class="progress-title">Bootstrap</h3>
                <div class="progress yellow">
                    <div class="progress-bar" style="width:80%; background:#e8d324;">
                        <div class="progress-value">80%</div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Skills"
    }
</script>

<style scoped>
    .card{
        padding: 10px;
        background-color: #fffc;
    }
    p {
        color: black;
    }
    .progress-title{
        font-size: 12px;
        font-weight: 700;
        color: black;
        margin: 0 0 15px;
        text-align: left;
    }
    .progress{
        height: 5px;
        background: #cbcbcb;
        border-radius: 0;
        box-shadow: none;
        margin-bottom: 25px;
        overflow: visible;
    }
    .progress .progress-bar{
        box-shadow: none;
        position: relative;
        -webkit-animation: animate-positive 2s;
        animation: animate-positive 2s;
    }
    .progress .progress-bar:after{
        content: "";
        display: block;
        border: 10px solid transparent;
        border-bottom: 16px solid transparent;
        position: absolute;
        top: -21px;
        right: -12px;
    }
    .progress .progress-value{
        font-size: 12px;
        font-weight: bold;
        color: black;
        position: absolute;
        top: -33px;
        right: 0;
    }
    .progress.pink .progress-bar:after{
        border-bottom-color: #ff4b7d;
    }
    .progress.green .progress-bar:after{
        border-bottom-color: #5fad56;
    }
    .progress.yellow .progress-bar:after{
        border-bottom-color: #e8d324;
    }
    .progress.blue .progress-bar:after{
        border-bottom-color: #3485ef;
    }
    @-webkit-keyframes animate-positive{
        0% { width: 0; }
    }
    @keyframes animate-positive{
        0% { width: 0; }
    }

</style>
