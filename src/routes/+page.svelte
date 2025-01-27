<script lang="ts">  
    import { HeroSection, AboutMeSection, MyWorkSection } from '$components';

    const { data } = $props();
    let { workExperience, projects } = $derived(data);
    // $inspect(workExperience);
</script>

<HeroSection />
<AboutMeSection {workExperience}/>
<MyWorkSection {projects}/>