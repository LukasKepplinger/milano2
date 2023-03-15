<script lang="ts">
    import pb from "$lib/connections/pb";
    import { user } from "$lib/stores/userStore";
    import { goto } from '$app/navigation';

    let login = {
        email: "",
        password: "",
    };

    const submit = async () => {
        const userData = await pb
            .collection("users")
            .authWithPassword(login.email, login.password);

        user.set(structuredClone(userData.record));
        goto(`/`);
    };
</script>

<h1>Login</h1>

<div class="mb-3">
    <label for="email" class="form-label">Email</label>
    <input
        bind:value={login.email}
        type="email"
        class="form-control"
        id="email"
        name="email"
        placeholder="Email"
    />
</div>
<div class="mb-3">
    <label for="password" class="form-label">Password</label>
    <input
        bind:value={login.password}
        type="password"
        class="form-control"
        id="password"
        name="password"
        placeholder="Password"
    />
</div>
<button on:click={submit} type="submit" class="btn btn-primary">Submit</button>
