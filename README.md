# Unexpected 0 Return with Null Inputs in JavaScript Addition Function

This repository demonstrates a subtle bug in a JavaScript addition function that returns 0 when either input is null, regardless of the value of the other input.  This unexpected behavior might lead to errors if not carefully considered.

## Bug Description
The `foo` function adds two numbers.  If either input is `null`, it returns 0. While this handles `null` values, the behavior might not be what's expected in all cases.  A more robust solution might be to throw an error, return `null`, or use a default value based on context.

## Bug Solution
The solution demonstrates alternative approaches to handle `null` inputs more explicitly, resulting in more predictable behavior.