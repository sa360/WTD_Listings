module.exports = function(grunt){

	//configure tasks
	grunt.initConfig({
		pkg: grunt.file.readJSON("package.json"),
		uglify: {
			build: {
				src:'src/js/*.js',
				dest:'js/script.min.js'
			},
			dev:{
				options:{
					beautify: true,
					mangle: false,
					compress: false,
					preserveComments: 'all'
				},
				src:'src/js/*.js',
				dest: 'js/script.min.js'
			}
		}

		watch:{
			js:{
				files:['src/js/*.js'],
				tasks:['uglify:dev']
			}
		}
	});

	//load plugins
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');




	//Register task(s)
	grunt.registerTask('default', ['uglify:dev']);
	//run it with '>grunt'
	grunt.registerTask('build', ['uglify:build']);
	//run it with '>grunt build'



};