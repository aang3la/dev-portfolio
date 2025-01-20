<script lang="ts">
    import { SectionHeadline, Button } from '$components';
    import image from '$assets/angela_bnw.jpg';
	import { goto } from '$app/navigation';

    function onclick() {
        goto("/#contact-form");
    };
</script>

<section class="about-me mt-l">
    <SectionHeadline sectionName="about-me">About me</SectionHeadline>
    <div class="mt-m content-container default-margin">
        <img class="image" src={image} alt="Angela" />
        <div class="text">
            <p>
                Hey! I'm Angela, a web developer based in the North Macedonia. I'm passionate about creating beautiful and functional websites that are easy to use and navigate.
            </p>
            <p>
                I'm a quick learner and I'm always looking to improve my skills. I haveexperience in React and TypeScript, currently expanding my skill set to include NextJS, Svelte and WordPress development. I'm a team player and I'm always willing to help others.
            </p>
            <p>
               Transitioning from a background in digital marketing, I bring a unique blend of technical and user-focused insights to my work, always aiming to create engaging, responsive interfaces. Passionate about clean, efficient code and intuitive design, I’m excited to continue building impactful web experiences.
            </p>
            <Button className="mt-m" {onclick}>Tell me about your project</Button>
        </div>
    </div>
</section>

<style>
    .content-container {
        display: flex;
        align-items: stretch;
        justify-content: space-between;
    }
    .image {
        width: 42%;
        border-radius: 20px;
        object-fit: cover;
    }
    .text {
        width: 55%;
        text-align: left;
    }
</style>