import React, { Component } from 'react';

export default class Explanation extends Component {
    render() {
        // constructor(props){
        //     super(props);
        //     this.state = {
        //         kitchen: '',
        //         recipe: ''

        //     }
        // }

        function handleSubmit(event) {
            event.preventDefault();

            const result = {
                recipe: this.recipe
            }
        }
        return (
            <>
                <div className="explanation">
                    <h1>INSPIRE ME TO COOK</h1>
                    <p>You've just realized you will have to make plans for your own dinner every day for the rest of your life. You have a few things in your kitchen and you're headed to the grocery store. But you need inspiration for what to make. </p>
                    <p>Enter the items you have right now (maybe garlic, and bell peppers, and eggs?) and hit submit to get inspiration for what else you need from the grocery store for a delicious meal.</p>
                </div>
                <div class="food-form">
                    <form class="food">
                        What's in my kitchen:<input type="text" placeholder="garlic, bell peppers, eggs"></input>
                        <button type="submit">submit</button>
                    </form>
                </div>
            </>
        )
    }

}