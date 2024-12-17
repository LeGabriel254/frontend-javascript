/// <reference path="../js/crud.d.ts" />

import { RowID, RowElement } from "../js/interface";
import * as CRUD from "../js/crud";

// Example usage:

const row: RowElement = {
  firstName: "Guillaume",
  lastName: "Salva",
  age: 25,
};

// Insert a new row
const newRowID: RowID = CRUD.insertRow(row);
console.log(`New row ID: ${newRowID}`);

// Update the row
CRUD.updateRow(newRowID, { firstName: "Jane", lastName: "Smith" });
console.log(`Row ${newRowID} updated.`);

// Delete the row
CRUD.deleteRow(newRowID);
console.log(`Row ${newRowID} deleted.`);

const obj = {firstName: "Guillaume", lastName: "Salva"};
CRUD.insertRow(obj)
// Insert row {firstName: "Guillaume", lastName: "Salva"}

const updatedRow: RowElement = { firstName: "Guillaume", lastName: "Salva", age: 23 };
CRUD.updateRow(newRowID, updatedRow);
// Update row 125 {firstName: "Guillaume", lastName: "Salva", age: 23}

CRUD.deleteRow(125);
