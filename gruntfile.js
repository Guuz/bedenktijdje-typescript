module.exports = function(grunt) {

	grunt.initConfig({
		typescript: {
			sources: {
				src: ['src/*.ts'],
				dest: 'build/scripts.js',
				options: {
					base_path: 'src',
					sourcemap: true
				}
			}
		},

		clean: ['build'],

		copy: {
			sources: {
				files: [{expand: true, cwd: 'src/', src: ['*.ts'], dest: 'build/'}]
			}
		},

		watch: {
			sources: {
				files: ['src/*.ts'],
				tasks: ['default']
			}
		}
	});

	grunt.loadNpmTasks('grunt-typescript');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['clean', 'typescript', 'copy']);

};
