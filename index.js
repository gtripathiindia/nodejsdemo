var rect = {
 perimeter: (x,y) => (2*(x+y)),
 area: (x,y) => x*y
};
function solverect(l,b)
{
  console.log("solving with rectable l" + l + "and b" + b);
  console.log(rect.perimeter(l,b));
  console.log(rect.area(l,b));
}
solverect(2,4);
