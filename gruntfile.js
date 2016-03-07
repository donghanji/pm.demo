


module.exports=function(grunt){
    //
    var _from_directory='/workspace/github/donghanji/';//change here as your directory
    var _js=['**/*.js','!**/*.min.js','!pm.demo/**/*.*','!pm.modules/**/*.*'];
    var _zh_reg=/[\u4e00-\u9fa5]/;

    grunt.initConfig({
        pkg:grunt.file.readJSON('package.json'),
        jshint:{
            all:[
                'gruntfile.js',
                'module.js'
            ],
            options:{
                'jshintrc':'jasmine.jshintrc'
            }
        },
		uglify:{
            options:{
                banner:'/*\n   <%= pkg.name %> ,version <%= pkg.version %> ,updated on <%= grunt.template.today("yyyy-mm-dd") %>\n   <%= pkg.description %>\n\n   <%= pkg.homepage %>\n */\n\n'
            },
            build:{
                files:grunt.file.expandMapping(_js, '', {
                    cwd:_from_directory,
                    filter:function(v){
                        if(_zh_reg.test(v)){

                            return false;
                        }
                        if(/\.min\.js$/.test(v)){

                            return false;
                        }

                        return true;
                    },
                    rename: function(base,file) {

                        return _from_directory+'/'+file.replace('.js', '.min.js');
                        //return _to_directory+'/'+file;
                    }
                }),
            },
            jquery:{
                //cwd:_from_directory+_pm_module_dir,
                src: 'dist/jquery.module.js',//
                dest: 'dist/jquery.module.min.js'//
            },
            zepto:{
                //cwd:_from_directory+_pm_module_dir,
                src: 'dist/zepto.module.js',//
                dest: 'dist/zepto.module.min.js'//
            },
            flexslider: {
                //cwd:_from_directory+_pm_module_dir,
                src: 'dist/jquery.flexslider.module.js',//
                dest: 'dist/jquery.flexslider.module.min.js'//
            }
        }
    });
    //
	grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.registerTask('default',['jshint','uglify']);
};