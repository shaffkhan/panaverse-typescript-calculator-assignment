#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import ChalkAnimation from "chalk-animation";

const sleep = () => new Promise((resolve, reject) => {
    setTimeout(resolve,2000);
});


async function welcome(){
    let rainbow  = await ChalkAnimation.rainbow("welcome to my calculator");
    await sleep();
    rainbow.stop()
}




do {

    async function myCal (){
        await welcome();
    
        let que =await inquirer.prompt([{
            type:"number",
            name:"first_num",
            message:"enter the first number !!!"
        }])
    
        let que2 =await inquirer.prompt([{
            type:"number",
            name:"second_num",
            message:"enter the second number !!!"
        }])
    
        let que3 =await inquirer.prompt([{
            type:"string",
            name:"op",
            message:"enter the operator !!!"
        }])
    
        if (que3.op === "+") {
            console.log(chalk.red(`your answer is ${que.first_num+que2.second_num}`))
        } else if(que3.op === "-"){
            console.log(chalk.red(`your answer is ${que.first_num-que2.second_num}`))
        }else if (que3.op === "*"){
            console.log(chalk.red(`your answer is ${que.first_num*que2.second_num}`))
        }else if (que3.op === "/"){
            console.log(chalk.red(`your answer is ${que.first_num/que2.second_num}`))
        }
    }
    await myCal();
     var que4 =await inquirer.prompt([{
            type:"string",
            name:"ask",
            message:"do u want to calculate again??? press 'y' to start the calculator again!!!"
        }])
   
} while (que4.ask === "y");
