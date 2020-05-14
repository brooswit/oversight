module.exports = function(grunt) {
  grunt.initConfig({
    watch: {
      files: ['**/*', '!**/node_modules/**', '!**/.git/**'],
      tasks: ['shell']
    },
    shell: {
      command: 'bash ./add_scripts/update.sh && bash ./add_scripts/test.sh && bash ./add_scripts/push.sh',
      options: {stdout: true}
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch')
  grunt.loadNpmTasks('grunt-shell');

  grunt.registerTask('default', ['shell', 'watch']);
};
