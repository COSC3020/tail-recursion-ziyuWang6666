function fibTail(fib, b=0, e=1) {
    return fib===0?b:fib===1?e:fibTail(fib-1, e, b+e)
    // if(fib==0) return b;
    // if(fib == 1) return e;
    // return fibTail(fib-1, e, b+e);
}
