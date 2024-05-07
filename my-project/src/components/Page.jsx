// import React from "react";
// import Contacts from './Contacts';
// import OnlineOrders from './OnlineOrders';
// import MyOrders from './MyOrders';
// import Search from './Search';
// import Filter from './Filter';
// class Page extends React.Component {
//   constructor(){
//     super()
//     this.state = {
//       allFoods: [],
//       selectFood: undefined,
//       query: '',
//       filter: 'All'
//     }
//   }

//   componentDidMount(){
//     fetch('http://localhost:3000/foods')
//     .then(response => response.json())
//     .then(foods => this.setFoods(foods))
//       .then(foods => this.setState({
//         allFood: foods
//       }))
//   }

//   setFoods = (foods) => {
//     return foods.map(food => {
//       food.owned = false
//       return food
//     })
//   }

//   clickFood = (food) => {
//     this.setState({
//       selectFood: food
//     })
//   }

//   addFood = (selectFood) => {
//     let x = this.state.allFoods.map(food => {
//       if(food.id === selectFood.id){
//         food.owned = !food.owned
//         return food
//       }else {
//         return food
//       }
//     })
//     this.setState({
//       allFood: clear
//     })
//   }

//   filterFreeFoods = () => {
//     let freeFoods = []
//     this.state.allFoods.map(food => {
//       if(food.owned === false){
//         freeFoods.push(food)
//       }
//     })
//     if(this.state.filter !== 'All'){
//       freeFoods = freeFoods.filter(food => 
//         food.food_class == this.state.filter
//       )
//     }
//     if(this.state.query){
//       freeFoods = freeFoods.filter(food=> 
//         food.name.toLowerCase().includes(this.state.query.toLowerCase())
//       )
//     }
//     return freeFoods
//   }

//   filterOwnedFoods= () => {
//     let ownedFoods = []
//     this.state.allFoods.map(food => {
//       if(food.owned === true){
//         ownedFoods.push(food)
//       }
//     })
//     let filtered = ownedFoods.filter(food=> {
//       return food.name.toLowerCase().includes(this.state.query.toLowerCase())
//     })
//     return filtered
//   }

//   handleClear = () => {
//     this.setState({
//       query: ''
//     })
//   }

//   handleChange = (query) => {
//     this.setState({
//       query: query
//     })
//   }

//   clearFood = () => {
//     this.setState({
//       selectFood: undefined
//     })
//   }

//   filterChange = (value) => {
//     this.setState({
//       filter: value
//     })
//   }

  
//   render() {
//     console.log(this.state)
//     return (
//       <div>
//         <Search handleClear={this.handleClear} handleChange={this.handleChange}/>
//         <br></br>
//         <Filter filterChange={this.filterChange}/>
//         <MyOrders foods={this.filterOwnedFoods()} addFood={this.clickFood}/>
//         <br></br>
//         {this.state.selectFood ? <Layout food={this.state.selectFood} clearLayout={this.clearLayout} addFood={this.addFood} />: 
//           <Layout foods={this.filterFreeFoods()} addFood={this.clickFood}/>}
//       </div>
//     );
//   }

// }

// export default Page;