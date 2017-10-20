/**
 * Created by Administrator on 2017/10/18.
 */
define(['jquery',
        'text!tpls/teacheradd.html',
    'timetool',
    'timetoollang'], function ($,teachadd) {
    return function () {
        var $html =$(teachadd)
        $html.on('shown.bs.modal',function(){
            $(this).find('.timeadd').datetimepicker({
                format: 'yyyy-mm-dd',
                weekStart:1,
                autoclose:true,
                minView:2,
                todayHighlight:true,
                todayBtn:true,
                language:"zh-CN"
            });
        }).on("hidden.bs.modal",function(){
            //移除模态框容器
            $(this).remove();       //也可以使用：$html.remove();

        }).on('submit','form', function (e) {
            e.preventDefault();
            var formData=$(this).serialize();
            $.ajax({
                url:'/api/teacher/add',
                type:'post',
                data:formData,
                success:function(res){
                    console.log(formData);
                    console.log(res);
                    $html.modal('hide');
                    $('.list-group a[v=teacher]').trigger('click');
                }
            })

        }).appendTo('body').modal();


    }
})