
let image=["bird.jpg","cat.jpg","lion.jpg"]

let one=document.getElementById("col1")
let two=document.getElementById("col2")
let three=document.getElementById("col3")
let four=document.getElementById("col4")
let five=document.getElementById("col5")
let six=document.getElementById("col6")

let allImg=[]
console.log(allImg)

let randomNo=1
let randomNo2=0
let myArray=[]



    randomNo=Math.floor(Math.random()*3)
    randomNo2=Math.floor(Math.random()*3)
   assign()
   assign2()


  
function assign()
{
    let selectedImg=image[randomNo2]
    console.log(selectedImg)
    
    allImg.push(selectedImg)
    one.src=allImg[0]
    myArray.push(randomNo2)
    
    while(true)
    {   let random2=Math.floor(Math.random()*3)
        if(myArray.includes(random2))
        {
            continue
        }
        else{
            
            let selectedImg=image[random2]
    
            allImg.push(selectedImg)
            two.src=allImg[1]
              myArray.push(random2)
              break
        }
    }
    while(true)
    {   let random2=Math.floor(Math.random()*3)
        if(myArray.includes(random2))
        {
            continue
        }
        else{
            
            let selectedImg=image[random2]
            
            allImg.push(selectedImg)
            three.src=allImg[2]
              myArray=[]
              
              break
        }
    }

}


function assign2()
{
    let selectedImg=image[randomNo]
    allImg.push(selectedImg)
    four.src=allImg[3]
    myArray.push(randomNo)
    
    while(true)
    {   let random2=Math.floor(Math.random()*3)
        if(myArray.includes(random2))
        {
            continue
        }
        else{
        
            let selectedImg=image[random2]
            
            allImg.push(selectedImg)
            five.src=allImg[4]
           
              myArray.push(random2)
              break
        }
    }
    while(true)
    {   let random2=Math.floor(Math.random()*3)
        if(myArray.includes(random2))
        {
            continue
        }
        else{
            
            let selectedImg=image[random2]
            
            allImg.push(selectedImg)
            six.src=allImg[5]
              myArray=[]
              
              break
        }
    }

}












let points=0
let clickArray=[] 
let count=0
let cnt1=0; let cnt2=0; let cnt3=0; let cnt4=0; let cnt5=0; let cnt6=0;
function oneF()
{
    if(cnt1==0)
    {
        one.src=allImg[0]
        clickArray.push(allImg[0])
        count++
        cnt1++
        checking()
    }

   
}
function twoF()
{
    if(cnt2==0)
    {
        two.src=allImg[1]
    clickArray.push(allImg[1])
    count++
    cnt2++
    checking()
    }

}
function threeF()
{
    if(cnt3==0)
    {
        three.src=allImg[2]
    clickArray.push(allImg[2])
    count++
    cnt3++
    checking()
    }
}
function fourF()
{
    if(cnt4==0)
    {
        four.src=allImg[3]
    clickArray.push(allImg[3])
    count++
    cnt4++
    checking()
    }
}
function fiveF()
{
    if(cnt5==0)
    {
        five.src=allImg[4]
    clickArray.push(allImg[4])
    count++
    cnt5++
    checking()
    }
}
function sixF()
{
   if(cnt6==0)
   {
    six.src=allImg[5]
    clickArray.push(allImg[5])
    count++
    cnt6++
    checking()
    
   }
}
console.log(count)

  setTimeout(() => {

    one.src="dog.jpg"
    two.src="dog.jpg"
    three.src="dog.jpg"
    four.src="dog.jpg"
    five.src="dog.jpg"
    six.src="dog.jpg"  
  }, 4000);


  function checking()
  {
      if(count==2)
      {
            if(clickArray[0]==clickArray[1])
            {
                console.log("same")
                document.getElementById("comment").innerHTML="Wow! it's same"
                points++;
                document.getElementById("result").innerHTML=" Your Points Are : "+points
                console.log(points)
                count=0;
                clickArray=[]
            }
            else
            {
                console.log("not Same")
                document.getElementById("comment").innerHTML="Opps! it's Not same"
                document.getElementById("result").innerHTML=" Your Points Are : "+points
                count=0;
                clickArray=[]
            }
      }
      else if(count>2)
      {
        console.log("Overflow")
      }
      else
      {
          console.log("Less than 2")
      }
  }




















//new

// const myImages = ["cat.jpg","bird.jpg","lion.jpg","cat.jpg","bird.jpg","lion.jpg"]
// const imgContainer = document.getElementById("flex-container")
// let index=[]
// window.addEventListener("load", function() {
//     let counter=1
//     let imgs = ''
//     let arr = []
    
//     for (let i = 0; i < 6; i++) {
//         let imgNo = Math.floor(Math.random() * myImages.length)
//         if (arr.includes(imgNo)) {
//             i--;
//         }
//         else {
//             arr.push(imgNo)
//             imgs += `
//             <div class="col"><img id="col1" src="${myImages[imgNo]}"  class="img-thumbnail column${counter}" onClick="f${counter}()" alt="..."></div>
//             `
//             counter++
//         }
//     }
//     console.log(imgs)
//     index=arr
//     console.log(index)
    
//     imgContainer.innerHTML=imgs

// //
//     // let elemntConst
//     //     let array=[]
//     //     let imgId= []
//     //     setTimeout(function() {
//     //         /* console.log(document.querySelectorAll("img")) */
//     //         array = document.querySelectorAll("img")
//     //         for(let i = 0; i < array.length; i++) {
//     //             imgId[i] = array[i].id
//     //             /* console.log(array[i].id) */
//     //             elemntConst= document.getElementById(imgId[i]).src
//     //             elemntConst.setAttribute("src","dog.jpg")
//     //         }
//     //     }, 4*1000);

// })
    
// //     setTimeout(function() {
// //         document.getElementById('img-container').style.display='none'
// //     }, 1*1000);
// // })


// let one=document.getElementById("col1")
// let two=document.getElementsByClassName("column2")
// let three=document.getElementsByClassName("column3")
// let four=document.getElementsByClassName("column4")
// let five=document.getElementsByClassName("column5")
// let six=document.getElementsByClassName("column6")





// // setTimeout(() => {
//     console.log(typeof one.src)
//     // one.src="dog.jpg"
    
// //     two.src="dog.jpg"
// //     three.src="dog.jpg"setAttribute
// //     four.src="dog.jpg"
// //     five.src="dog.jpg"
// //     six.src="dog.jpg"  
// //     console.log("imin")
// //   }, 4000);




// // 

// let points=0
// let clickArray=[] 
// let count=0
// let cnt1=0; let cnt2=0; let cnt3=0; let cnt4=0; let cnt5=0; let cnt6=0;
// function f1()
// {
//     if(cnt1==0)
//     {
//         console.log("in" + myImages[index[0]] )

//         one.src=myImages[index[0]]
//         clickArray.push(myImages[index[0]])
//         count++
//         cnt1++
//         checking()
//     }

   
// }
// function f2()
// {
//     if(cnt2==0)
//     {
//         two.src=myImages[index[1]]
//     clickArray.push(myImages[index[1]])
//     count++
//     cnt2++
//     checking()
//     }

// }
// function f3()
// {
//     if(cnt3==0)
//     {
//         three.src=myImages[index[2]]
//     clickArray.push(myImages[index[2]])
//     count++
//     cnt3++
//     checking()
//     }
// }
// function f4()
// {
//     if(cnt4==0)
//     {
//         four.src=myImages[index[3]]
//     clickArray.push(myImages[index[3]])
//     count++
//     cnt4++
//     checking()
//     }
// }
// function f5()
// {
//     if(cnt5==0)
//     {
//         five.src=myImages[index[4]]
//     clickArray.push(myImages[index[4]])
//     count++
//     cnt5++
//     checking()
//     }
// }
// function f6()
// {
//    if(cnt6==0)
//    {
//     six.src=myImages[index[5]]
//     clickArray.push(myImages[index[5]])
//     count++
//     cnt6++
//     checking()
    
//    }
// }
// console.log(count)

  

//   function checking()
//   {
//       if(count==2)
//       {
//             if(clickArray[0]==clickArray[1])
//             {
//                 console.log("same")
//                 document.getElementById("comment").innerHTML="Wow! it's same"
//                 points++;
//                 document.getElementById("result").innerHTML=" Your Points Are : "+points
//                 console.log(points)
//                 count=0;
//                 clickArray=[]
//             }
//             else
//             {
//                 console.log("not Same")
//                 document.getElementById("comment").innerHTML="Opps! it's Not same"
//                 document.getElementById("result").innerHTML=" Your Points Are : "+points
//                 count=0;
//                 clickArray=[]
//             }
//       }
//       else if(count>2)
//       {
//         console.log("Overflow")
//       }
//       else
//       {
//           console.log("Less than 2")
//       }
//   }
