var task1 = {
	title: "Создать объект из двух массивов",
	description: "Сделай объект",
	depends: {
		article: [],
		task: [{
			uri: "extend-object",
			strength: 3
		}, {
			uri: "query-string-to-object",
			strength: 6
		}]
	},
	relates: {
		article: [{
			uri: "about-objects",
			strength: 10
		}],
		task: [{
			uri: "split-object-into-arrays",
			strength: 5
		}]
	}
};


// get all srtong resources
var dependenciesNames = ['depends', 'relates'];
var depedencyType;
var taskDependencies;
var depdenciesSources;
var strongSrouces = [];
for (var i = 0; i < dependenciesNames.length; i += 1) {
	depedencyType = dependenciesNames[i];
	taskDependencies = task1[depedencyType];
	for (var depedencySourceType in taskDependencies) {
		depdenciesSources = taskDependencies[depedencySourceType];
		for (var j = 0; j < depdenciesSources.length; j += 1) {
			if (depdenciesSources[j].strength >= 5) {
				strongSrouces.push(depdenciesSources[j]);
			}
		}
	}
}
console.log(strongSrouces);


// get all tasks
var keysWithTasks = ['depends', 'relates'];
var tasks = [];
var taskKeyName;
var tasksList;
for (var i = 0; i < keysWithTasks.length; i += 1) {
	taskKeyName = keysWithTasks[i];
	tasksList = task1[taskKeyName].task;
	console.log('tasksList', tasksList);
	for (var j = 0; j < tasksList.length; j += 1) {
		console.log('tasksList[j]', tasksList[j]);
		tasks.push(tasksList[j]);
	}
}
console.log(tasksList);