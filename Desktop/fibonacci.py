fib = [0,1]
num = int(input("Enter a number: "))
while fib[-2] + fib[-1] <= num:
    fib.append(fib[-2] + fib[-1])
print(fib)
def pal(palindrome):
    return palindrome == palindrome[::-1]
palindrome = input("Input: ")
print(pal(palindrome))
