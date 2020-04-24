//全局事件总线对象模块


const eventbus={}
eventbus.eventobj={};

/*
绑定自定义事件监听的方法 : on(eventname,listing)

*/
eventbus.on=function(eventname,listing){
    if(!this.eventobj[eventname])
    {
        this.eventobj[eventname]=[];
    }
    this.eventobj[eventname].push(listing);
}


/*
自定义分发事件的方法
*/
eventbus.emit=function(eventname,data={}){
    if(this.eventobj[eventname])
    {
        this.eventobj[eventname].forEach(e => {
            e(data)
        });
    }
}


/*
解绑事件监听
*/
eventbus.off=function(eventname){
    //解绑所有监听
    if(!eventname)
    {
        this.eventobj={};
    }
    else
    {
        this.eventobj[eventname]=[]
    }
}


export default eventbus