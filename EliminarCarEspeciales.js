const dummyString = '241 ,gjyn   79 + fsdfh -0087% 4 Science Fiction**$#ddfSTRING87t';
let finalString = dummyString.replace(/[^a-zA-Z0-9]/g, '');

console.log('Original: ' + dummyString);
console.log('Final: ' + finalString);