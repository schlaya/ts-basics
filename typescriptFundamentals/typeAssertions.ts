let message;
message = "abc";
// Returns a Boolean

// This just helps us access the intelli sense
let endsWithC = (<string>message).endsWith("c");
let alternativeWay = (message as string).endsWith("c");
