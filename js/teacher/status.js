/**
 * Created by Administrator on 2017/10/19.
 */
define(['jquery'],function($){
    return function (id,status,stat) {
        $.ajax({
            url:'/api/teacher/handle',
            type:'post',
            data:{
                tc_id:id,
                tc_status:status
            },
            success: function (res) {
                var postuatu=res.result.tc_status;
                console.log(res.result.tc_status);
                stat(postuatu);
            }
        })
    }
})