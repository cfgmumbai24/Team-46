def calculate_efficiency(actual_text, transcribed_text):
    """
    Calculate efficiency based on the similarity between actual and transcribed texts.
    
    :param actual_text: str, the actual text (ground truth)
    :param transcribed_text: str, the transcribed text (from speech-to-text)
    :return: float, efficiency percentage (0 to 100)
    """
    # Convert both texts to lowercase for case-insensitive comparison
    actual_text = actual_text.lower()
    transcribed_text = transcribed_text.lower()
    
    # Split texts into words for comparison
    actual_words = actual_text.split()
    transcribed_words = transcribed_text.split()
    
    # Calculate the number of matching words
    match_count = sum(a == t for a, t in zip(actual_words, transcribed_words))
    
    # Calculate efficiency percentage based on the length of actual_words
    efficiency = (match_count / len(actual_words)) * 100 if actual_words else 0
    
    return efficiency

def get_final_grade(class_level, efficiencies):
    """
    Determine the final grade of a student based on their efficiencies in sub-levels.

    :param class_level: str, the class level (e.g., "Class 1", "Class 2", "Class 3")
    :param efficiencies: dict, the efficiencies in each sub-level (keys are sub-levels like "Letters", "Words", etc.)
    :return: tuple, (highest level passed, detailed grades for each sub-level)
    """
    # Define the order of sub-levels
    sub_levels = ["Letters", "Words", "Sentences", "Paragraphs", "Story"]

    # Define the passing efficiency criterion (80%)
    passing_efficiency = 80

    # Define unified grade ranges for all class levels and sub-levels
    grade_ranges = {
        "Letters": [(90, "A+"), (80, "A"), (70, "B+"), (60, "B"), (50, "C"), (40, "D"), (0, "F")],
        "Words": [(90, "A+"), (80, "A"), (70, "B+"), (60, "B"), (50, "C"), (40, "D"), (0, "F")],
        "Sentences": [(90, "A+"), (80, "A"), (70, "B+"), (60, "B"), (50, "C"), (40, "D"), (0, "F")],
        "Paragraphs": [(90, "A+"), (80, "A"), (70, "B+"), (60, "B"), (50, "C"), (40, "D"), (0, "F")],
        "Story": [(90, "A+"), (80, "A"), (70, "B+"), (60, "B"), (50, "C"), (40, "D"), (0, "F")]
    }

    # Prepare a list to store results
    results = []
    highest_level_passed = "Beginner"

    # Check each sub-level to see if the student passes
    for sub_level in sub_levels:
        efficiency = efficiencies.get(sub_level)
        if efficiency is None:
            results.append(f"No data for {sub_level}")
            continue

        # Retrieve the ranges for the specific sub-level
        ranges = grade_ranges.get(sub_level, [])

        # Determine the grade based on efficiency
        for lower_bound, grade in ranges:
            if efficiency >= lower_bound:
                results.append(f"{sub_level} - {grade}")
                if efficiency >= passing_efficiency:
                    highest_level_passed = sub_level
                break

    if highest_level_passed == "Beginner":
        return highest_level_passed, ""  # Do not include grades if Beginner
    else:
        return highest_level_passed, "\n".join(results)

# Example usage:

# Example efficiencies data for each class level
efficiencies_class_1 = {
    "Letters": 85,
    "Words": 88,
    "Sentences": 75,
    "Paragraphs": 65,
    "Story": 0
}

efficiencies_class_2 = {
    "Letters": 78,
    "Words": 82,
    "Sentences": 70,
    "Paragraphs": 60,
    "Story": 55
}

efficiencies_class_3 = {
    "Letters": 92,
    "Words": 84,
    "Sentences": 88,
    "Paragraphs": 95,
    "Story": 90
}

# # Function to print grades for each class level
# def print_grades(class_level, efficiencies):
#     highest_level_passed, grades = get_final_grade(class_level, efficiencies)
#     print(f"Highest level passed for {class_level}: {highest_level_passed}\n\nGrades:\n{grades}\n\n")

# # Print grades for each class level
# print_grades("Class 1", efficiencies_class_1)

