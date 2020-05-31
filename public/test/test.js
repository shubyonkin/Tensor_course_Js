import {Fabric,School} from "../js/PersonLib.js";

describe("Test block", function() {
   'use strict';
    it('Test name and description', function() {
        // arrange
        let variable = 1;

        // act
        variable += 1;

        //assert
        assert.equal(variable, 2);
    })

it('проверка работы фабрики', function(){
    let fab = new Fabric();
    let stud = fab.createStudent("Anton");
    assert.equal(stud.type,"Student");
 })
 
it('проверка работы добавления студентов в классе School', function(){
    let fab = new Fabric();
    let school = new School(fab);
    school.addStudent("anton");
    school.addStudent("anton1");
    school.addStudent("anton3");
    let check = false;
    if(school.studArr.lenght === 3)
        check = true;
    assert(check);
})
});
mocha.run();
