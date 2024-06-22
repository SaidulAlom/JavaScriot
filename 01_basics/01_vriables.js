// Declare a constant variable for account ID (cannot be changed later)
const accountId = 1232321;

// Declare a variable for account email (can be changed later)
let accountEmail = "saidul@gmail.com";

// Declare a variable for account password (can be changed later, consider using a secure storage mechanism for passwords)
var accountPassword = "12345";  // **Note:** Storing passwords in plain text is not secure!

// Declare a variable for account city (can be changed later)
accountCity = "Assam";

// Declare accountState with an initial empty string value
let accountState;

// Update account email address
accountEmail = "alom@gmail.com";

// Update account password
accountPassword = "54321";

// Update account city
accountCity = "Dhubri";

// Print the account ID (unchanged since it's a constant)
console.log("Account ID:", accountId);

// Print all account information in a table format
console.table({
  "Account ID": accountId,
  "Email": accountEmail,
  "Password": accountPassword,  // **Note:** Password displayed here for demonstration, avoid this in practice
  "City": accountCity,
  "State": accountState
});


/*
Prefer not to use var because of issues in block scope and functional scope 
*/ 
