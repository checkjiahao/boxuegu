/**
 * Created by Administrator on 2017/10/19.
 */
define(['jquery',
    'text!tpls/teacheredit.html',
    'art'],function($,teachedit,art){
   return function (id) {
       $.ajax({
           url:'/api/teacher/edit',
           type:'get',
           data:{tc_id:id},
           success: function (res) {
               var html = art.render(teachedit,res.result);
               $html = $(html);
               $html.on('submit','form',function(e){
                   e.preventDefault;
                   var formData=$(this).serialize();
                   $.ajax({
                       url:'/api/teacher/update',
                       type:'post',
                       data:formData,
                       success:function(){
                           console.log('dianjidsds');
                           console.log(formData);
                           $('.list-group a[v=teacher]').trigger('click');
                       }
                   })
               }).appendTo('body').modal();
           }
       })
   }
})