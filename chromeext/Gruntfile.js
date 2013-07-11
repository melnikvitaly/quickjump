module.exports = function(grunt) {
	 grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),		
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
			  }
	  });
	grunt.loadNpmTasks('grunt-contrib-uglify');
		
	grunt.registerTask('default', ["uglify"]);
}

