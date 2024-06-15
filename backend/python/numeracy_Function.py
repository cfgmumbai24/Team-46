from PIL import Image
import random

class MathQuiz:
    def __init__(self, class_level):
        self.class_level = class_level
        self.levels = {
            "Class 1": ["Number Recognition", "Addition", "Subtraction", "Multiplication", "Division"],
            "Class 2": ["Number Recognition", "Addition", "Subtraction", "Multiplication", "Division"],
            "Class 3": ["Number Recognition", "Addition", "Subtraction", "Multiplication", "Division"]
        }
        self.current_level_index = 0
        self.questions = {
            "Number Recognition": self.ask_number_recognition_question,
            "Addition": self.ask_addition_question,
            "Subtraction": self.ask_subtraction_question,
            "Multiplication": self.ask_multiplication_question,
            "Division": self.ask_division_question
        }
        
    def ask_number_recognition_question(self):
        number = random.randint(0, 9)
        self.display_number_image(number)
        user_answer = self.ask_question(f"What is the number shown? ")
        return user_answer == number

    def display_number_image(self, number):
        image_path = f"number_{number}.png"  # Adjust path as per your image filenames and locations
        try:
            img = Image.open(image_path)
            img.show()
        except Exception as e:
            print(f"Error displaying image: {e}")

    def ask_addition_question(self):
        num1 = random.randint(1, 20)
        num2 = random.randint(1, 20)
        correct_answer = num1 + num2
        user_answer = self.ask_question(f"What is {num1} + {num2}? ")
        return user_answer == correct_answer

    def ask_subtraction_question(self):
        num1 = random.randint(1, 20)
        num2 = random.randint(1, num1)
        correct_answer = num1 - num2
        user_answer = self.ask_question(f"What is {num1} - {num2}? ")
        return user_answer == correct_answer

    def ask_multiplication_question(self):
        num1 = random.randint(1, 12)
        num2 = random.randint(1, 12)
        correct_answer = num1 * num2
        user_answer = self.ask_question(f"What is {num1} * {num2}? ")
        return user_answer == correct_answer

    def ask_division_question(self):
        num1 = random.randint(1, 100)
        num2 = random.randint(1, 10)
        correct_answer = num1 // num2
        user_answer = self.ask_question(f"What is {num1} / {num2} (integer quotient)? ")
        return user_answer == correct_answer

    def ask_question(self, question):
        try:
            return int(input(question))
        except ValueError:
            print("Invalid input. Please enter a number.")
            return None

    def run_level(self, level_name):
        if level_name not in self.questions:
            print(f"Invalid level: {level_name}")
            return False
        
        print(f"\nStarting {level_name} level...")
        if self.questions[level_name]():
            print("Correct! Proceeding to the next level.")
            return True
        else:
            print("Incorrect. Quiz ends.")
            return False

    def run_quiz(self):
        print(f"Welcome to Math Quiz - {self.class_level}\n")
        for level in self.levels[self.class_level]:
            if not self.run_level(level):
                break
        print(f"\nQuiz for {self.class_level} finished. Goodbye!")

# Function to ask for class selection
def ask_class_selection():
    while True:
        class_level = input("Which class do you belong to (Class 1, Class 2, Class 3)? ").strip().title()
        if class_level in ["Class 1", "Class 2", "Class 3"]:
            return class_level
        else:
            print("Invalid input. Please enter Class 1, Class 2, or Class 3.")

# Main program execution
if __name__ == "__main__":
    selected_class = ask_class_selection()
    quiz = MathQuiz(selected_class)
    quiz.run_quiz()
