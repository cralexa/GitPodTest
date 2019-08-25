print('Docker Fib Gen!!')

a = 0
b = 1
for i in range(10):
    c = a+b
    a = b
    b = c
    print(str(i)+':' + str(c))

    pass
