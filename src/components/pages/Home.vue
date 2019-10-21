<template>
    <div>
        <div style="margin-top: 200px;">
            <Infocard></Infocard>
        </div>
        <div id="skill" style="margin-top: 100px;">
            <Skills></Skills>
        </div>
        <div id="serv" style="margin-top: 100px;">
            <Service></Service>
        </div>
        <div  id="time" style="margin-top: 100px;">
            <Timeline></Timeline>
        </div>
        <div  id="pro" style="margin-top: 100px;">
            <Projects></Projects>
        </div>
    </div>
</template>

<script>
    import Infocard from "@/components/Infocard";
    import Skills from "@/components/Skills";
    import Service from "@/components/Service";
    import Timeline from "@/components/Timeline";
    import Projects from "@/components/pages/Projects";
    export default {
        name: "Home",
        components: {
            Projects,
            Infocard,
            Skills,
            Service,
            Timeline
        }
    }
</script>

<style scoped>

</style>
