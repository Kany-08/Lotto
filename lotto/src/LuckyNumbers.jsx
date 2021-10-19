import React, { Component } from 'react';
import Number from './Number';

export default class LuckyNumbers extends Component {

    state = {
        arrayNumber: [18,6,94,8,45,68],
        specialNumber:8
    };

    generateLuckyNumber = () =>{
        let luckyNumbers = [];
        for(let i = 0; i < 6; i++){
            let randomNumber = Math.floor(Math.random() * 49+ 1);

            while (luckyNumbers.includes(randomNumber)) {
                randomNumber = Math.floor(Math.random() * 49+ 1);
            }
            luckyNumbers.push(randomNumber)
        }
        this.setState({
            arrayNumber: luckyNumbers,
            specialNumber: Math.floor(Math.random() * 10 + 1)
        });
    };

    // setLastNumColor = () => {
    //     for (let i = 0; i > 6; i--){
    //         let lastNum = {backgroundColor:'purple'}
    //         this.setState({lastNum})
    //     }

       
    // }

    resetNumbers = () =>{

        this.setState({
            arrayNumber: [],
            specialNumber: ''
        });
    };

    render() {
        return (
            <div>
                <div className='numbers'>
                    {this.state.arrayNumber.map((currentValue) => {
                    return <Number number={currentValue}/>;
                })}
                {this.state.specialNumber && <Number number={this.state.specialNumber} />}

                
                </div>
                
                <div className='btn'>
                   <button className='btn-1' onClick={this.resetNumbers} >Reset</button>
                   <button className='btn-2' onClick={this.generateLuckyNumber}>Show me lucky numbers</button> 
                </div>
                
            </div>
        )
    }
}
