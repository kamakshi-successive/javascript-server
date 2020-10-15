let i;
function createDimondShape(size){
   for(i=1;i<=size;i++){
      for(let s=size-1;s>=i;s--){
         process.stdout.write(" ");
      }
      for(j=1;j<=i;j++){
         process.stdout.write("* ")
      }
      console.log();
   }
   for(let c=1;c<=size;c++){
       process.stdout.write("* ");
   }
   process.stdout.write("\n");
   if(i==size+1){
      for(let i=1;i<=size-1;i++){
         for(let s=1;s<=i;s++){
            process.stdout.write(" ");
         }
         for(j=i;j<=size-1;j++){
            process.stdout.write("* ");
         }
         console.log();
      }
   }
}
createDimondShape(5);
