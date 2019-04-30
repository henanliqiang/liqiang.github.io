if (typeof console === "undefined" || console === null) {
	console = {
		log: function() {}
	};
}

var APP = APP || {};

APP.register = function(neo_name){
	var parts = neo_name.split('.'),
	parent = APP;    
	for(var i = 0; i < parts.length; i += 1){
		if(typeof parent[parts[i]] === "undefined"){
			   parent[parts[i]] = {};
		}
		parent = parent[parts[i]];
	}
	return parent;
};