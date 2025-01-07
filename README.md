# JavaScript NaN Handling Bug

This repository demonstrates a common JavaScript bug involving the handling of `NaN` (Not a Number). The `foo` function attempts to differentiate between `null`, `undefined`, and other values. However, it fails to properly account for `NaN`, treating it as a regular value instead of a special case that should ideally be handled separately.

## Bug Description

The core issue lies in the way the function compares values.  `NaN` is unique in that it's not equal to itself (`NaN === NaN` evaluates to `false`).  Therefore, the function's conditional checks (`===`) do not correctly identify `NaN` as a distinct case, leading to unexpected output.

## Solution

The provided solution addresses the problem by explicitly checking for `NaN` using the `isNaN()` function. This ensures that `NaN` is handled correctly, providing a more robust and predictable function.