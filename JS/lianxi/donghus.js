function getstyle(obj,name){
    return getComputedStyle(obj,null)[name];
  
}


function move(obj,speed,target,fun ){
    clearInterval(obj.time);

    if(parseInt(getstyle(obj,"left"))>=target)
    speed*=-1;
    obj.time=setInterval(function(){
        obj.style.left=parseInt(getstyle(obj,"left"))+speed+"px";

        if(parseInt(getstyle(obj,"left"))<=target&&speed<=0)
        {
            obj.style.left=target;
            clearInterval(obj.time);
            fun(); 
        }
        if(parseInt(getstyle(obj,"left"))>=target&&speed>=0)
        {
            obj.style.left=target;
            clearInterval(obj.time); 
            fun(); 
        }
       
    },10.7)   
    
    
}



  //定义一个函数向元素中添加指定的class属性值
  function addclass(obj,name){
    // 参数： 1 要添加class属性的对象 2要添加的class值
    obj.className+=" "+name;
}
//判断一个函数中是否有指定的class
function hasclass(obj,name)
{//\b单词边界
    // var reg=/\bname\b/ig;  字面量不能传递变量
    var reg=new RegExp("\\b"+name+"\\b");
    return reg.test(obj.className);
}



//定义一个函数删除class属性
function removeclass(obj,name){
    var reg=new RegExp("\\b"+name+"\\b");
    obj.className=obj.className.replace(reg,"");
}

//定义以后函数切换类
function toggleclass(obj,name)
{
    if(hasclass(obj,name))
    {
        removeclass(obj,name);
    }
    else{
        addclass(obj,name);
    }
}