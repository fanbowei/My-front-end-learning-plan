var onmessage=function (e) {
    // console.log(e.data)
    // postMessage(e.data+'aaa')


    function febb(i){
        return i>2?febb(i-1)+febb(i-2):1;
        }
        postMessage(febb(e.data))
  }

b