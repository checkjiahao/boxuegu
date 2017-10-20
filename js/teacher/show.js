/**
 * Created by Administrator on 2017/10/18.
 */
define(['jquery',
    'text!tpls/teachershow.html',
    'art'], function ($,teachershow,art) {
    return function (id) {
        //teachershow.modal();

        $.ajax({
            url:'/api/teacher/view',
            type:'get',
            data:{tc_id:id},
            success: function (res) {
              var html= art.render(teachershow,res.result);
                var $html=$(html).on('hidden.bs.modal',function(){
                    $html.remove();
                }).appendTo('body').modal();
            }
        })
    }
})