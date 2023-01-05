# // objects and data structures are made-up terms
# // real objects contain your bussiness
# // data containers: store and transport data

# data container example below

class UserCredentials():
    def __init__(self, email, password):
        self.email = email
        self.password = password

josh = UserCredentials("jgumerove", "password")

print(josh)
print(josh.email)

# nothing is hidden internally -- everything is exposed
