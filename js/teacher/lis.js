/**
 * Created by Administrator on 2017/10/18.
 */
define(['jquery',
    'text!tpls/teacherlis.html',
    'art','teacher/show',
    'teacher/add',
    'teacher/edit',
    'teacher/status'], function ($,teacherlis,art,teachershow,teacheradd,teachedit,teachstatus) {

    return function(){
        //console.log('dianji222');
        $('.main').html(teacherlis);

        $.ajax({
            url:"/api/teacher",
            type:'get',
            success:function(res){

                if(res.code != 200) return console.log(res.msg);

                var htmls = art.render(teacherlis,res);
               var $peron = $(htmls);
                console.log($peron);
                $peron.on("click",".btn-show",function(){

                   var tc_id= $(this).parent().attr('tc_id');

                    teachershow(tc_id);
                }).on('click','.btn-addteacher', function () {
                    console.log('dianji');
                    teacheradd();
                }).on('click','.btn-edit', function () {
                    var tc_id= $(this).parent().attr('tc_id');
                    teachedit(tc_id);
                }).on('click','.btn-status',function(){
                    var $this = $(this);
                    var tc_id= $(this).parent().attr('tc_id');
                    var tc_status= $(this).parent().attr('tc_status');

                    teachstatus(tc_id,tc_status,function(postatus){
                        $this.text(postatus ==0?'注销':'启用');
                        $this.parent().siblings('.stau').text(postatus ==1?'注销':'启用');
                       $this.parent().attr('tc_status',postatus);
                    });
                })

                $('.main').html($peron);
            }
        })

    }

})