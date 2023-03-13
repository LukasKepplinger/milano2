<script lang="ts">
    import { createEventDispatcher } from "svelte";
    import { user } from "$lib/stores/userStore";
    import pb from "$lib/connections/pb";

    let userForm = {
        name: "",
        email: "",
        password: "",
        passwordConfirm: "",
    };

    const generateUsername = (name: string) => {
        const id = Math.random().toString(16).slice(2, 7);
        return `${name.slice(0, 5)}${id}`;
    };

    const submit = async () => {
        let username = generateUsername(
            userForm.name.split(" ").join("")
        ).toLowerCase();

        const data = {
            username,
            name: userForm.name,
            email: userForm.email,
            password: userForm.password,
            passwordConfirm: userForm.passwordConfirm,
        };

        const record = await pb.collection("users").create(data);

        window.location.href = "/";
    };
</script>

<h1>Register</h1>

<div class="mb-3">
    <label for="name" class="form-label">Name</label>
    <input
        bind:value={userForm.name}
        type="text"
        class="form-control"
        id="name"
        name="name"
        placeholder="Name"
    />
</div>
<div class="mb-3">
    <label for="email" class="form-label">Email</label>
    <input
        bind:value={userForm.email}
        type="email"
        class="form-control"
        id="email"
        name="email"
        placeholder="Email"
    />
</div>
<div class="row">
    <div class="col">
        <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input
                bind:value={userForm.password}
                type="password"
                class="form-control"
                id="password"
                name="password"
                placeholder="Password"
            />
        </div>
    </div>
    <div class="col">
        <div class="mb-3">
            <label for="passwordConfirm" class="form-label">Confirm</label>
            <input
                bind:value={userForm.passwordConfirm}
                type="password"
                class="form-control"
                id="passwordConfirm"
                name="passwordConfirm"
                placeholder="Password"
            />
        </div>
    </div>
</div>
<button type="submit" on:click={submit} class="btn btn-primary">Submit</button>
