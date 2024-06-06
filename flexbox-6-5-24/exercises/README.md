# **5.11 Flexbox Exercise**

1. Create a flexbox layout with the given HTML code (`<div class='parent'>...</div>`) and set the child elements (`<div class='child'>...</div>`) to have a fixed height of 120px and a variable width of 80px. Use appropriate flexbox property to ensure that the child elements are displayed in a row, with an equal amount of space around each item.

   1. [X] Create HTML structure
   2. [X] Establish height & width
   3. [X] Display in flex box row with equal space between them

       ```
       <!DOCTYPE html>
       <html lang="en">
         <head>
           <meta charset="UTF-8" />
           <meta name="viewport" content="width=device-width, initial-scale=1.0" />
           <title>Document</title>
           <style>
             .parent {
               display: flex;
               flex-direction: row;
               justify-content: space-between;
               border: 1px solid black;
             }
             .child {
               height: 120px;
               width: 80px;
             }
           </style>
         </head>
         <body>
           <div class="parent">
             <div class="child battleship" style="background-color: #838e83"></div>
             <div class="child rose-ebnoy" style="background-color: #64403e"></div>
             <div class="child flour-cyan" style="background-color: #80ffec"></div>
             <div class="child citrine" style="background-color: #dacc3e"></div>
             <div class="child bittersweet" style="background-color: #ff715b"></div>
             <div class="child southwest" style="background-color: #468b44"></div>
           </div>
         </body>
       </html>

       ```
2. Modify the existing flexbox layout to make it display the child elements in a column-reverse direction. Adjust the height of the child elements to 150px while keeping the width at 80px. Implement the nessasary flexbox property to ensure the items are evenly spaced along the main axis.

   1. [X] Modify to reverse column the flexbox
   2. [X] adjust the height of the children to 150px
   3. [X] align them on them along the main axis

       ```
       <!DOCTYPE html>
       <html lang="en">
         <head>
           <meta charset="UTF-8" />
           <meta name="viewport" content="width=device-width, initial-scale=1.0" />
           <title>Document</title>
           <style>
             .parent {
               display: flex;
               flex-direction: column-reverse;
               justify-content: space-between;
               border: 1px solid black;
               align-items: center;
             }
             .child {
               height: 150px;
               width: 80px;
             }
           </style>
         </head>
         <body>
           <div class="parent">
             <div class="child battleship" style="background-color: #838e83"></div>
             <div class="child rose-ebnoy" style="background-color: #64403e"></div>
             <div class="child flour-cyan" style="background-color: #80ffec"></div>
             <div class="child citrine" style="background-color: #dacc3e"></div>
             <div class="child bittersweet" style="background-color: #ff715b"></div>
             <div class="child southwest" style="background-color: #468b44"></div>
           </div>
         </body>
       </html>

       ```
3. Enhance the currentl flexbox layout by introducing a gap of 16px betwen each child element. Utilize the gap property to achive this spacing while keeping the children at a height of 120px and a width of 80px.

   1. [X] introduce a 16px gap
   2. [X] change height to 120px and width of 80px

       ```
       <!DOCTYPE html>
       <html lang="en">
         <head>
           <meta charset="UTF-8" />
           <meta name="viewport" content="width=device-width, initial-scale=1.0" />
           <title>Document</title>
           <style>
             .parent {
               display: flex;
               flex-direction: column-reverse;
               justify-content: space-between;
               border: 1px solid black;
               align-items: center;
               gap: 16px;
             }
             .child {
               height: 120px;
               width: 80px;
             }
           </style>
         </head>
         <body>
           <div class="parent">
             <div class="child battleship" style="background-color: #838e83"></div>
             <div class="child rose-ebnoy" style="background-color: #64403e"></div>
             <div class="child flour-cyan" style="background-color: #80ffec"></div>
             <div class="child citrine" style="background-color: #dacc3e"></div>
             <div class="child bittersweet" style="background-color: #ff715b"></div>
             <div class="child southwest" style="background-color: #468b44"></div>
           </div>
         </body>
       </html>

       ```
4. Create a new flexbox layout with the ability to wrap the child elements onto multiple lines. Set the child element to have a height of 80px and a variable width of 100px. Use the flex-wrap property to enable wrapping to ensure that the items are evenly spaced along the main axis.

  * [X] Set the flexbox to wrap the children
  * [X] adjust the height of the children to 80px and width of 100px
  * [X] align them to space evenly on them along the main axis
    ```
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
        <style>
          .parent {
            display: flex;
            flex-direction: column-reverse;
            flex-wrap: wrap;
            justify-content: space-between;
            border: 1px solid black;
            align-items: center;
          }
          .child {
            height: 80px;
            width: 100px;
          }
        </style>
      </head>
      <body>
        <div class="parent">
          <div class="child battleship" style="background-color: #838e83"></div>
          <div class="child rose-ebnoy" style="background-color: #64403e"></div>
          <div class="child flour-cyan" style="background-color: #80ffec"></div>
          <div class="child citrine" style="background-color: #dacc3e"></div>
          <div class="child bittersweet" style="background-color: #ff715b"></div>
          <div class="child southwest" style="background-color: #468b44"></div>
        </div>
      </body>
    </html>
    ```
