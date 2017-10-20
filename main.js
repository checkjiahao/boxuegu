/**
 * Created by Administrator on 2017/10/17.
 */


require.config({
    baseUrl:'js',
    paths:{
        jquery:'lib/jquery-2.1.4',
        bootstrap:'../assets/bootstrap/js/bootstrap.min',
        tpls:'../tpls',
        text:'lib/text',
        art:'lib/template-web',
        timetool:'../assets/bootstrap-datetimepicker/js/bootstrap-datetimepicker',
        timetoollang:'../assets/bootstrap-datetimepicker/js/locales/bootstrap-datetimepicker.zh-CN'
    },
    shim:{
        bootstrap:{
            deps:['jquery']
        },
        timetoollang:{
            deps:['timetool']
        }
    }

});
require(['jquery','teacher/lis','bootstrap'],function($,teacherLis){

    $('.list-group').on('click','a',function(){
        console.log('dianji');
        var value = $(this).attr('v');
        switch(value){
            case "teacher":
                teacherLis();

                break;
            case "class":
                $(".main").html("课程管理");
                break;
            case "addclass":
                $(".main").html("添加课程");
                break;
            case "category":
                $(".main").html("课程分类");
                break;
            case "chart":
                $(".main").html("图表统计");
                break;
        }
        $('a').removeClass('active');
        $(this).addClass('active');
    });
    $('.list-group a[v=teacher]').trigger('click');
})