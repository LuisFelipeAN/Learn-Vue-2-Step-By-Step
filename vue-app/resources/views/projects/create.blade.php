<!DOCTYPE html>
<html>
<head>
    <title></title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.2.3/css/bulma.css">
</head>
<body>
    @include('projects.list')
    <div id="app">
        <example></example>
        <form action="/projects" method="POST" @submit.prevent="onSubmit"  @keydown="form.errors.clear($event.target.name)">
            <div class="control">
                <label for="descnameription" class="label">Name:</label>
                <input id="name" name="name" class="input" type="text" placeholder="Normal input" v-model="form.name">
                <span class="help is-danger" v-if="form.errors.get('name')" v-text="form.errors.get('name')"></span>
            </div>
            <div class="control">
                <label for="description" class="label">Description:</label>
                <input id="description" name="description" class="input" type="text" placeholder="Normal input" v-model="form.description" >
                <span class="help is-danger" v-if="form.errors.get('description')" v-text="form.errors.get('description')"></span>

            </div>
            <div class="control">
                <button class="button is-primary" :disabled="form.errors.any()">Create</button>
            </div>
        </form>
    </div>
    <script src="/js/vendor.js"></script>
    <script src="/js/app.js"></script>
</body>
</html>


