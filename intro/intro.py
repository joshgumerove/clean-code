# example of non-clean code: very confusing

def create(m, n):
    if m == "Max":
        return lambda v: v < n
    if m == "Minx":
        return lambda v: v > n

max = create("Max", 31)
print(max)
print(max(10))

# example of same function but clean
def create_validator(mode, number):
    if mode == "Max":
        return lambda value: value < number
    elif mode == "Min":
        return lambda value: value > number

print(create_validator("Min", 10))
min = create_validator("Min", 10)
print(min(5)) # false
