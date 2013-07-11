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
		 uglify: {								
						options: {
						 // banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
						 compress:true
						},
						build: {
							files:{
								"build/scripts/settings.min.js":[
									  'src/scripts/config.js',
									  'src/scripts/providers.js',
									  'src/scripts/utils.js'
									  ],
								"build/scripts/popup.min.js":[
									  'src/scripts/config.js',
									  'src/scripts/providers.js',
									  'src/scripts/utils.js'
									  ]				  
						}
					}						
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
	
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-compress');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-bump');
	
	grunt.registerTask('default', ["clean","jshint:all","copy","bump",]);
	grunt.registerTask('"release', ["clean","uglify:","compress","bump",]);
}

