import {test} from '@playwright/test';

test.describe.configure({mode:'serial'})
//test.describe.configure({mode:'parallel'})

test.describe('group1', ()=>{

        test('Test1', async ()=> {
            console.log("this is Test1....."
            )});

        test('Test2', async ()=> {
            console.log("this is Test2....."
            )});

        test('Test3', async ()=> {
            console.log("this is Test3....."
            )});

        test('Test4', async ()=> {
            console.log("this is Test4....."
            )});

        test('Test5', async ()=> {
            console.log("this is Test5....."
            )});

});