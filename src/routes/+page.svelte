<script lang="ts">  
    import { HeroSection, AboutMeSection } from '$components';

    const { data } = $props();
    let { workExperience } = $derived(data);
    // $inspect(workExperience);
</script>

<HeroSection />
<AboutMeSection {workExperience}/>