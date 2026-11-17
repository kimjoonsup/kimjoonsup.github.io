---
layout: page
title: "Solving a 3×3 Nonogram with Grover’s Algorithm"
permalink: /projects/grover-nonogram/
---

![Solved Nonogram and results after 17 Grover iterations: 99.94% theoretical success probability and 1,024 correct shots out of 1,024 on an ideal simulator]({{ "/assets/images/projects/grover-nonogram-solution.png" | relative_url }})

**Quantum Computing Project · Grover Search · Reversible Circuits**

This project uses Grover’s algorithm to solve a 3×3 Nonogram, translating a small logic puzzle into a quantum search problem. A 12-qubit circuit checks the puzzle’s constraints, marks the valid board, and amplifies its probability through repeated Grover iterations.

[View the project presentation (PDF)]({{ "/assets/files/grover-nonogram.pdf" | relative_url }})

## Problem

A Nonogram’s row and column clues specify the lengths of consecutive runs of filled cells. Separate runs must have at least one empty cell between them. This puzzle has row clues **[1], [2], [2]** and column clues **[1], [2], [1, 1]**. Its nine binary cells define 512 possible boards, with a single board satisfying all six clues.

## Approach

### Encoding the Board and Constraints

Nine data qubits represent the board, one per cell, while three counter qubits store how many clues a candidate board satisfies. Hadamard gates prepare an equal superposition over all 512 boards, with the counter initialized to zero.

Each line is checked against the patterns allowed by its clue. For example, a three-cell line with clue [2] accepts 110 or 011. X gates temporarily map a matching pattern to all-one controls, and controlled increment gates add one to the counter. The X gates are then undone to restore the original cell values.

### A Reversible Counting Oracle

The oracle counts matches across all three rows and all three columns. Only the solution reaches a count of six, encoded as 110 in the counter. A conditional phase flip marks that branch, after which the counting gates run in reverse. This uncomputation returns the counter to 000 while preserving the phase change on the solution board.

### Amplitude Amplification

Each Grover iteration applies the oracle followed by diffusion on the nine data qubits. For a single solution among 512 boards, the theoretical success probability after **r** iterations is **sin²((2r + 1)θ)**, where **sin θ = 1/√512**. The first peak occurs near 17.27 iterations, making **17 iterations** the nearest whole-number choice.

## Results

![Theoretical and measured success probability across 0 to 35 Grover iterations, peaking near iteration 17]({{ "/assets/images/projects/grover-nonogram-probability.png" | relative_url }})

The presentation compares the theoretical curve with ideal-simulator measurements using 1,024 shots per iteration count. At 17 iterations, the theoretical probability of measuring the solution is **99.9448%**, and the reported simulation returned the correct board in **1,024 out of 1,024 shots**. These are ideal-simulator results; the finite sample’s 100% success rate is distinct from the theoretical probability.

The experiment demonstrates how reversible constraint checking and uncomputation can support amplitude amplification. The probability falls again beyond the first peak, illustrating why choosing the iteration count matters.

[View the full presentation (PDF)]({{ "/assets/files/grover-nonogram.pdf" | relative_url }})

[← Back to Projects]({{ "/projects/" | relative_url }})
