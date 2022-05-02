<div class="content">
    <h1>Pojects</h1>
    <ul>
        @foreach(App\Models\Project::all() as $project)
            <li>{{$project->name}}</li>
        @endforeach
    </ul>
</div>