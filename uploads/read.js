// Requiring the module 
const reader = require('xlsx') 

// Reading our test file 
const file = reader.readFile('./test.xlsx') 
// Reading our test file 

let data = [] 

const sheets = file.SheetNames 

for(let i = 0; i < sheets.length; i++) 
{ 
const temp = reader.utils.sheet_to_json( 
		file.Sheets[file.SheetNames[i]]) 
temp.forEach((res) => { 
	data.push(res) 
}) 
} 

// Printing data 
console.log(data)
// Requiring module 
const content="HII";
reader.writeFileSync('./test2.xlsx',content);

// Sample data set 
const file1 = reader.readFile('./test2.xlsx') 

const ws = reader.utils.json_to_sheet(data) 
console.log(ws);

reader.utils.book_append_sheet(file1,ws,"Sheet4") 

// Writing to our file 
reader.writeFile(file1,'./test1.xlsx') 

