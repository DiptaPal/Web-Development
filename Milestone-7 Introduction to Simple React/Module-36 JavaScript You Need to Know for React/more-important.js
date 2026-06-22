/* 
?. =>Safely access properties/methods without errors
?? Provide a default value when value is null or undefined
*/

const city = user?.address?.city ?? "Unknown City";

// This safely checks for address and city, and returns "Unknown City" if either is null or undefined.
