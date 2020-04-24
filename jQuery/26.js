$(function(){//文档加载完再执行，同时设置作用域不会污染全局空间
     //设置inner的宽
 $('.inner').css('width',$('.inner img').length*300);

 //设置点击翻页
    var $inner=$('.inner');//找到图片的容器实现平滑移动
    var $a=$('.da a');//找到导航点
    var $btn=$('div').filter('[class=btnl],[class=btnr]');//找到按钮
    var $arri=$('.inner img');//找到图片
    var nowleft=-300;//当前left值
    var zdtime;//自动翻页定时器
    autochange();//开启自动翻页
    binddh();//导航条绑定clik函数执行
    
    var index=0;//为图片设置下表
    var i=0;
    $arri.each(function(){
        this.index=++index;
        this.ileft=i;
        i-=300;
    })
    i=nowleft;
//为导航点设置下标left
$a.each(function(){
    this.ileft=i;
    i-=300;
})

//点击导航条翻页
    function binddh(){
        $('.da a').on('click',function(){
       
            animal(this,this.ileft-nowleft,10,10.7,function(){
                if(nowleft==0)
                {
                    $inner.css('left',-1500);
                    nowleft=-1500;
                }
                if(nowleft==-1800)
                {
                    $inner.css('left',-300);
                    nowleft=-300;
                }
            })
        })
    }

    //自动翻页
            function autochange(){
                clearInterval(zdtime)
                zdtime=setInterval(function(){
                    animal($inner,-300,10,10.7,function(){
                        if(nowleft==0)
                        {
                            $inner.css('left',-1500);
                            nowleft=-1500;
                        }
                        if(nowleft==-1800)
                        {
                            $inner.css('left',-300);
                            nowleft=-300;
                        }
                    })
                },3000)
            }
    

    //鼠标移入页面关闭自动切换
    $('.box').hover(function(){clearInterval(zdtime)},function(){autochange()})
    
            //设置更新导航点函数
            function updatedh(offset){
                var index=nowleft/-300;//当前left转换成导航点的伪数组下表
                lastoffset=(nowleft+offset)/-300;
                index=nowleft/-300;
               
                if(index==5||index==0)
                {
                    $a.eq(4).removeClass('on');
                }
                if(index==1||index==6)
                {
                    $a.eq(0).removeClass('on')
                }
                if(index==2||index==3||index==4)
                {
                    $a.eq(index-1).removeClass('on')
                }

                if(lastoffset==0||lastoffset==5)
                {
                    $a.eq(4).addClass('on');
                }
                if(lastoffset==1||lastoffset==6)
                {
                    $a.eq(0).addClass('on')
                }
                if(lastoffset==2||lastoffset==3||lastoffset==4)
                {
                    $a.eq(lastoffset-1).addClass('on')
                }
            }





    $btn.on('click',function(){
        //得到当前的left值
        
        if(this.className=='btnl')
        {
         
                
           nextpage(true);
        }

        else
        {
            nextpage(false);
        }

        //创建翻页函数 
        function nextpage(bool)
        {
            
            var offset=bool?300:-300;//设置当前偏移量的正负
            animal(this,offset,10,10.7,function(){
                if(nowleft==0)
                {
                    $inner.css('left',-1500);
                    nowleft=-1500;
                }
                if(nowleft==-1800)
                {
                    $inner.css('left',-300);
                    nowleft=-300;
                }
            });
          
                
        }

      
    
    
    
    })




    //封装动画
    //创建过度动画 //参数 偏移量 持续时间 间隔时间
  function animal(obj,offset,speed,itime,fun){
         
    clearInterval(obj.js)   
    //得到位移的方向
  var fx=offset>=0?1:-1;
  //得到末位置的left值
  var lastoffset=nowleft+offset;   
  updatedh(offset);
obj.js=setInterval(function(){
    //动画执行期间解绑点击事件
    $('a').off();
    $inner.css('left', parseInt($inner.css('left'))+(fx*speed))
  if(offset>=0&&parseFloat($inner.css('left'))+(fx*speed)>=lastoffset)
  {
  
      $inner.css('left',lastoffset)
      clearInterval(obj.js);
      nowleft+=offset//设置动画完成后的lefe值
      //查看是否为第一张和最后一张，调换位置
     fun();
     binddh();
    
  }
  if(offset<=0&&parseInt($inner.css('left'))+(fx*speed)<=lastoffset)
  {

      $inner.css('left',lastoffset)
      clearInterval(obj.js);
      nowleft+=offset//设置动画完成后的lefe值
      //查看是否为第一张和最后一张，调换位置
      fun(); 
      binddh();
  
  }
 

},itime)
}
})





  