//自定义函数模块 IFEE

((window)=>{
    function promise(excutor){//执行器函数同步执行
        this.status='pendding';
        this.data;
        this.callbacks=[]
        reslove=function(value){ 
            //如果当前状态不是pendding直接结束
            if(!this.status=='pendding')
            {return;}     
            this.status='resolved'
            this.data=value
            if(this.callbacks.length>0)
            {
               setTimeout(() => {//不使用微任务直接执行的话会导致resolve()在执行的时候.then还未执行导致成功队列没有执行.push所以成功队列长度为0
                let pro
                this.callbacks.forEach(element => {
                    
                    if(element.onresolved)
                    {
                        pro=element.onresolved(value)
                        
                    }
                });
                let that=this
                try {                             
                    if(pro instanceof promise)
                    {
                        if(pro.status==='pendding')
                        {
                            pro.then(
                                value=>{
                                    if(that.callbacks.reslove)
                                        {
                                            thats.callbacks.reslove(value) 
                                        }
                                },
                                reason=>{ 
                                    if(that.callbacks.reject)
                                        {
                                            that.callbacks.reject(reason)
                                        }
                                }
                            )
                        }
                        else if(pro.status==='rejected')
                        {
                            
                            if(this.callbacks.reject)
                                {
                                    this.callbacks.reject(pro)
                                }
                        }
                        else
                        {
                            if(this.callbacks.reject)
                                {
                                    this.callbacks.reject(pro)
                                }
                        }
                    }
                    else
                    {
                        if(this.callbacks.reslove)
                {
                    this.callbacks.reslove() 
                }
                    }
                }
                catch (error) {
                    if(this.callbacks.reject)
                        {
                            this.callbacks.reject()
                        }
                }
               });
            }
        }
    
        reject=function(reason){
            if(this.status!=='pendding')
            return;
            this.status='rejected'
            this.data=reason
            setTimeout(() => {
                let pro
                this.callbacks.forEach(element => {
                    if(element.onrejected)
                    {
                        pro=element.onrejected(reason)
                    }
                }); 
                let that=this
                try {                             
                    if(pro instanceof promise)
                    {
                        if(pro.status==='pendding')
                        {
                            pro.then(
                                value=>{
                                    if(that.callbacks.reslove)
                                        {
                                            thats.callbacks.reslove(value) 
                                        }
                                },
                                reason=>{ 
                                    if(that.callbacks.reject)
                                        {
                                            that.callbacks.reject(reason)
                                        }
                                }
                            )
                        }
                        else if(pro.status==='rejected')
                        {
                            
                            if(this.callbacks.reject)
                                {
                                    this.callbacks.reject(pro)
                                }
                        }
                        else
                        {
                            if(this.callbacks.reject)
                                {
                                    this.callbacks.reject(pro)
                                }
                        }
                    }
                    else
                    {
                        if(this.callbacks.reslove)
                {
                    this.callbacks.reslove() 
                }
                    }
                }
                catch (error) {
                    if(this.callbacks.reject)
                        {
                            this.callbacks.reject()
                        }
                }
               });
        }
        try {//捕获执行器的异常,直接变成reject状态
            excutor(reslove.bind(this),reject.bind(this))//如果使用箭头函数则无法使用this
            return this
        } catch (error) {
            reject(error)
        }
    }


    //promsie的then()方法
    promise.prototype.then=function(onresolved,onrejected=function(r){throw r}){
       let that=this
        return new promise((resolve,reject)=>{
            if(that.status=='pendding')
            {
                that.callbacks.push({onresolved,onrejected})
                that.callbacks.reject=reject
                that.callbacks.reslove=resolve
                //peomise将当前回调事件存储到上一个promise的回调数组中,并且存储当前的调用事件到上一个promise中,当上一个peomise的回调事件执行完成就会触发当前的回调事件
            }
            else if(that.status==='resolved')
            {
                setTimeout(function(){              //如果抛出异常 return的promise就会失败,reason就是error
                    try {                       //如果回调函数返回值不是promise,return的就是成功的promise,value就是返回结果
                        let pro=onresolved()    //如果回调函数返回值是promise,就返回promsie
                        if(pro instanceof promise)
                        {
                            pro.then(
                                value=>{
                                    resolve(value)
                                },
                                reason=>{
                                    reject(reason)
                                }
                            )
                        }
                        else
                        {
                            resolve(pro)
                        }
                    }
                    catch (error) {
                        reject(error)
                    }      
                });  
            }
            else
            {
                setTimeout(function(){
                    try {                            
                        let pro=onrejected()    
                        if(pro instanceof promise)
                        {
                            pro.then(
                                value=>{
                                    resolve(value)
                                },
                                reason=>{
                                    reject(reason)
                                }
                            )
                        }
                        else
                        {
                            resolve(pro)
                        }
                    }
                    catch (error) {
                        reject(error)
                    }
                });
            }
            })

    }


    //promise的catch()方法
    promise.prototype.catch = function(onRejected) {
        return this.then(null, onRejected)
    }



    //函数对象的方法
    promise.resolve=function(value){
        return new promise((resovle,reject)=>{
            if(value instanceof promise)
            value.then(resolve,reject)
            else
            resovle(value)
        })
    }

    promise.reject=function(reason){
    
    }

    promise.all=function(promises){

    }


    promise.race=function(promises){

    }

    //向外暴露promise函数
    window.promise=promise
})(window)