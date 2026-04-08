# Java-Assignment
4th assignment
Question 1: Digit Gatekeeper
The program iterates through the range L to R inclusive. For each number, it verifies divisibility by K, ensures no digit is '0', and checks if the sum of digits is a prime number. The complexity is O((R - L) * log10(R)) where R can be up to 10^6.

Question 2: Roll-Seed Lock
The script takes an integer N and a seed value, then repeats a transformation exactly 3 times. If the current number is even, it is replaced with current / 2 + seed. Otherwise, it uses current * 3 - seed. It validates if the final result is a 3-digit number and if the middle digit matches the student's seed. The complexity is O(1).

Question 3: Mirror Corridor
The program searches for the smallest non-negative integer X within the specified range. It identifies the first X that makes N+X both a palindrome and divisible by K. The complexity is O(X_limit * log10(N+X)) where N can be up to 10^6.

Question 4: Fare Calculator
The fare starts with a base price plus 7 times distance. It adds 20 for lateness if minutesLate > 15 and a 10% surcharge if the distance exceeds 10. After applying seed-based adjustments, it rounds the final result up to the nearest multiple of 5. The complexity is O(1).

Question 5: Skipping Numbers
The program finds the smallest positive integer m such that the sum of all numbers from 1 to m (excluding those divisible by seed+2) is at least N. The complexity is O(m) where N can be up to 10^6.

Question 6: Contest Score Judge
The program computes a score using the formula 3a + b - 2c. It subtracts 10 if total submissions exceed 50 and ensures the score does not drop below zero. A status of PASS is granted if the final score is 60 or higher. The complexity is O(1).
