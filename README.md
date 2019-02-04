# projet3
This project is about making a web app for a CoffeeShop, in wich customers can easily customize and order all types of cakes.
The front part is made with React, Redux for managing global states, in this case all of the ingredients, 
compatibility between them, customers info... 

Currently there is an almost finished version released at (the cake recipe works great)

https://www.pimpmycake.fr

Multiple reducers fetches the DBB in MySql, with our backend made with Node.
I worked more specifically on :

//front/src/Containers/Public/IngredientsChoice/CakeInProgress.jsx // where i made the view where the cake is being prepared.
The component display the ingredients that are being clicked, and place them accordingly (ex: 'Base chocolat, creme chocolat, fraise...')
the data comes from an array(recipe being made) in a reducer.

//front/src/Containers/Admin/DatabaseIngredient/ModifyIngredient.jsx // it's a form that is being displayed after a button click, shown in
the admin ingredient database. the component receives the ingredient property via props. The submit is made with axios call at the
Node corresponding route (//back/routes/ingredients.js), wich make an update of the database with a MySql request.






