//自定义封装事件

let eve={
    //创建事件对象,所有调用on的事件名都封装在这里
    events:{

    },
    on:function(eventname,fun){
        if(this.events[eventname])//判断是否有同名事件
        {
            this.events[eventname].push(fun);//将函数添加到同名事件数组中
        }
        else
        {
            //创建事件数组
            this.events[eventname]=[];
            this.events[eventname].push(fun);
        }
    },
    //创建事件的触发
    emit:function (eventname,eventdata) {
        if(this.events[eventname])
        {
            //遍历事件数组
            this.events[eventname].forEach(element => {
                //执行每一个事件
                element(eventdata);
            });
        }
      }
}


//创建事件
eve.on('click',function(){
    console.log('---')
})