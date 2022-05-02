<!DOCTYPE html>
<html>
<head>
    <title></title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.2.3/css/bulma.css">
</head>
<body>
    @include('projects.list')
    <div id="app">
        <form action="/projects" method="POST" @submit.prevent="onSubmit"  @keydown="errors.clear($event.target.name)">
            <div class="control">
                <label for="descnameription" class="label">Name:</label>
                <input id="name" name="name" class="input" type="text" placeholder="Normal input" v-model="name">
                <span class="help is-danger" v-if="errors.get('name')" v-text="errors.get('name')"></span>
            </div>
            <div class="control">
                <label for="description" class="label">Description:</label>
                <input id="description" name="description" class="input" type="text" placeholder="Normal input" v-model="description" >
                <span class="help is-danger" v-if="errors.get('description')" v-text="errors.get('description')"></span>

            </div>
            <div class="control">
                <button class="button is-primary" :disabled="errors.any()">Create</button>
            </div>
        </form>
    </div>
    <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
    <script src="https://unpkg.com/vue@2.1.3/dist/vue.js"> </script>
    <script src="/js/app.js"></script>
</body>
</html>

