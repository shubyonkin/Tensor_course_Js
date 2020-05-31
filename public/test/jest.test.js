import {Fabric} from "./PersonLib.js";
import {Student} from './School.js';
describe("Test block", function() {
   'use strict';

   test('Test name and description', function() {
      // arrange
      let variable = 1;

      // act
      variable += 1;

      //assert
      expect(variable).toBe(2);
   });
   test('проверка работы фабрики', function(){
      let fab = new Fabric();
      let stud = fab.createStudent("jora");
      expect(stud.type).toBe("Student");
   });
});
