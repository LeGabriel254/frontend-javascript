// task_3/js/crud.d.ts

import { RowID, RowElement } from "../js/interface";

// Declare the types for the functions in crud.js
export function insertRow(row: RowElement): RowID;
export function deleteRow(rowId: RowID): void;
export function updateRow(rowId: RowID, row: RowElement): RowID;
