module.exports = function(grunt) {
	 grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),		
		clean:[ "build", "topublish"],	
		bump:{			
				options:{
					files:['package.json'],
					commit:false,
					createTag:false,
					push:false				
				}			
		},
		copy:{
			main:{
				files:
				[
					{
						expand:true, 
						cwd:"src/",
						src:['**'],
						dest:"build/"
					}
				]
			}
		},
		jshint:{
			all:['src/scripts/*.js']
			//ignores:["src/third/**"]
		},		
		compress:{
				main:{
					options:{
						archive:"topublish/quickjump.zip"						
					},
					files:[
						{expand:true,cwd:"build/" ,src:["**"]}
					]
				}
			}
	  });
		
	grunt.loadNpmTasks('grunt-contrib-compress');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-copy');	
	grunt.loadNpmTasks('grunt-bump');
		
	grunt.registerTask('default', ["clean","copy","compress","bump",]);
}

