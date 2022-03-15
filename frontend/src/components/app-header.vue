<template>
    <header class="app-header">
        <h1>Toy App</h1>

        <section class="nav-container">
            <nav class="main-nav">
                <ul>
                    <li>
                        <router-link to="/">Home</router-link>
                    </li>
                    <li>
                        <router-link to="/toy">Toy App</router-link>
                    </li>
                </ul>
            </nav>
        </section>
    </header>
</template>

<style>
@import "@/assets/app-header.css";
</style>