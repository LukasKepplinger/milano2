
<script lang="ts">
    import type {NavSettings} from './NavSettings';
    export let navsettings: NavSettings
</script>


<nav class="navbar navbar-expand-lg bg-body-tertiary bg-primary">
    <div class="container-fluid">
        <a class="navbar-brand text-white ms-3 mb-1 font-size-16" href="/"
            >{navsettings.title}</a
        >
        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul class="navbar-nav me-auto">
                {#each navsettings.routes as route}
                    <li class="nav-item rainbow">
                        <a 
                            class="nav-link text-white font-wight-bold font-size-12"
                            data-sveltekit-preload-data="hover" href="{route.path}"
                            ><div class="anim">{route.title}</div></a
                        >
                    </li>
                {/each}
            </ul>
            <slot name="Login" class="m-0">
                Keppi moch den Scheiß login Slot!!!
            </slot>
        </div>
    </div>
</nav>

<style>
    .font-size-12 {
        font-size: 1.2rem;
    }
    .font-size-16 {
        font-size: 1.6rem;
    }

    .nav-item {
        margin-left: 0.7rem;
    }

    .rainbow {
        color: #000000;
        position: relative;
        text-decoration: none;
    }

    .rainbow::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 4px;
        border-radius: 4px;
        background-image: linear-gradient(
            to right,
            rgb(255, 251, 0),
            rgb(255, 72, 0),
            rgb(255, 0, 0)
        );
        bottom: 0;
        left: 0;
        transform-origin: right;
        transform: scaleX(0);
        transition: transform 0.2s ease-in-out;
    }

    .rainbow:hover::before {
        transform-origin: left;
        transform: scaleX(1);
    }
</style>
