{
  //

  function formatString(input: string, toUpper: boolean = true): string {

    return toUpper ? input.toUpperCase() : input.toLowerCase();

  }

 const test1= formatString("Hello");
 const test2= formatString("Hello", false)
 const test3= formatString("Hello", false);
 const test4= formatString("Raihan", true);
 const test5= formatString("hi");
  
console.log(test1)
console.log(test2)
console.log(test3)
console.log(test4)
console.log(test5)




function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[]{
     return items.filter(items=>items.rating>=4.5)
}

const books = [
     { title: "Book A", rating: 4.5 },
     { title: "Book B", rating: 3.2 },
     { title: "Book C", rating: 5.0 },
     { title: "Book D", rating: 4.3 },
     { title: "Book E", rating: 5.0 },
   ];

   filterByRating(books)

   const filterRate=filterByRating(books)
   console.log(filterRate)



   function concatenateArrays<T>(...arrays: T[][]): T[] {
     return arrays.flat();
   }
   const concate1 =concatenateArrays(["a", "b"], ["c"]);
   const concate2 =concatenateArrays([12,34,23],[234,43,24],[3,3])
   console.log(concate1)
   console.log(concate2)



   class Vehicle {
     private make: string;
     private year: number;
   
     constructor(make: string, year: number) {
       this.make = make;
       this.year = year;
     }
   
      getInfo(): string {
       return `Make: ${this.make}, Year: ${this.year}`;
     }
   }
   
   class Car extends Vehicle {
     private model: string;
   
     constructor(make: string, year: number, model: string) {
       super(make, year);
       this.model = model;
     }
   
      getModel(): string {
       return `Model: ${this.model}`;
     }
   }
   const myCar = new Car("Toyota", 2020, "Corolla");
  const caInfor= myCar.getInfo();
   const carModel= myCar.getModel();   
   console.log(caInfor)
   console.log(carModel)


 
   function processValue(value: string | number): number {
     if (typeof value === "string") {
       return value.length;
     } else {
       return value * 2;
     }
   }
   const value1=processValue("hello")
   const value2=processValue(5)
   const value3=processValue(50)
   console.log(value1)
   console.log(value2)
   console.log(value3)



   interface Product {
     name: string;
     price: number;
   }
   
   function getMostExpensiveProduct(products: Product[]): Product | null {
     if (products.length === 0) {
       return null;
     }
     return products.reduce((highestPrice, currentPrice) =>
          currentPrice.price > highestPrice.price ? currentPrice : highestPrice
     );
   }
   
   const products = [
     { name: "Pen", price: 10 },
     { name: "Notebook", price: 25 },
     { name: "Bag", price: 50 }
   ];
   
  const highest= getMostExpensiveProduct(products);
  console.log(highest)  


   enum Day {
     Monday,
     Tuesday,
     Wednesday,
     Thursday,
     Friday,
     Saturday,
     Sunday
   }
   
   function getDayType(day: Day): string {
     switch (day) {
       case Day.Saturday:
       case Day.Sunday:
         return "Weekend";
       default:
         return "Weekday";
     }
   }


  const DayType1= getDayType(Day.Monday);
  const DayType2= getDayType(Day.Sunday); 
  console.log(DayType1)
  console.log(DayType2)



async function squareAsync(n: number): Promise<number> {
     return new Promise((resolve, reject) => {
       setTimeout(() => {
         if (n < 0) {
           reject(new Error("Negative number not allowed"));
         } else {
           resolve(n * n);
         }
       }, 1000);
     });
   }
   squareAsync(4).then(console.log);
   squareAsync(-3).catch(console.error);


  //
}
