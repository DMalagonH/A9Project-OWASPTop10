module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		retire: {
			node: ['.'],
			options: {
				jsRepository: 'https://raw.githubusercontent.com/RetireJS/retire.js/master/repository/jsrepository.json',
				nodeRepository: 'https://raw.githubusercontent.com/RetireJS/retire.js/master/repository/npmrepository.json',
				packageOnly: false
			}
		}
	});

	grunt.loadNpmTasks('grunt-retire');
};