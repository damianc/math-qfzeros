# math-qfzeros

Method returns the roots (or zeros) of the univariate quadratic function $f(x)=ax^2+bx+c$: `null`, $[x_0]$ or $[x_1,x_2]$.
  
```
Math.qfZeros(a,b,c)
```
  
We can get the intersection points of a parabola and horizontal line $y=0x+n$, what may be interpreted as if x-axis were translated by $n$ units towards the top (or towards the bottom for $-n$). To do so, pass 4th parametr:  
  
```
Math.qfZeros(a,b,c,y)
```

```
const a = -2;
const b = 3;
const c = 4;

Math.qfZeros(a,b,c)
// [-0.851, 2.351]

Math.qfZeros(a,b,c,4)
// [0, 1.5]

Math.qfZeros(a,b,c,-4)
// [-1.386, 2.886]
```
