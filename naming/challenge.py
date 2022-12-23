class Point:
    def __init__(self, x_coordinate, y_coordinate):
        self.x_coordinate = x_coordinate
        self.y_coordinate = y_coordinate


class Rectangle:
    def __init__(self, starting_point, width, height):
        self.starting_point = starting_point 
        self.width = width
        self.height = height
        
    @property
    def area(self):
        return self.width * self.height
    
    @property
    def beginning_coordinate(self):
        return self.starting_point.x_coordinate + self.width
    
    @property
    def ending_coordinate(self):
        return self.starting_point.y_coordinate + self.height
    
    def print_coordinates(self):
        print('Starting Point (X)): ' + str(self.starting_point.x_coordinate))
        print('Starting Point (Y)): ' + str(self.starting_point.y_coordinate))
        print('End Point X-Axis (Top Right): ' + str(self.beginning_coordinate))
        print('End Point Y-Axis (Bottom Left): ' + str(self.ending_coordinate))


def create_recatangle():
    rectangle_origin = Point(50, 100)
    rectangle = Rectangle(rectangle_origin, 90, 10)

    return rectangle

rectangle = create_recatangle()
print(rectangle.area)
rectangle.print_coordinates()

# original
# class Point:
#     def __init__(self, coordX, coordY):
#         self.coordX = coordX
#         self.coordY = coordY

# class Rectangle:
#     def __init__(self, starting_point, broad, high):
#         self.starting_point = starting_point
#         self.broad = broad
#         self.high = high

#     def area(self):
#         return self.broad * self.high

#     def end_points(self):
#         top_right = self.starting_point.coordX + self.broad
#         bottom_left = self.starting_point.coordY + self.high
#         print('Starting Point (X)): ' + str(self.starting_point.coordX))
#         print('Starting Point (Y)): ' + str(self.starting_point.coordY))
#         print('End Point X-Axis (Top Right): ' + str(top_right))
#         print('End Point Y-Axis (Bottom Left): ' + str(bottom_left))


# def build_stuff():
#     main_point = Point(50, 100)
#     rect = Rectangle(main_point, 90, 10)

#     return rect


# my_rect = build_stuff()

# print(my_rect.area())
# my_rect.end_points()