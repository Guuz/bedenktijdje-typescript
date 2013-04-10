module.exports = function(grunt) {

	grunt.initConfig({
		typescript: {
			base: {
				src: ['src/*.ts'],
				dest: 'build',
				options: {
					base_path: 'src',
					sourcemap: true
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-typescript');

	grunt.registerTask('default', ['typescript']);

};
