<script lang="ts">
    import '../app.css';

    let { children } = $props();
</script>

<!-- First way -->
<!-- <slot /> -->

<!-- Second way -->
{@render children()}
