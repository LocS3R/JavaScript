class SuperMemo2 {
  constructor() {
    this.repetitions = 0;
    this.interval = 1;
    this.ease = 2.5;
  }

  gradeResponse(grade) {
    if (grade >= 3) {
      if (this.repetitions === 0) {
        this.interval = 1;
      } else if (this.repetitions === 1) {
        this.interval = 6;
      } else {
        this.interval *= this.ease;
      }

      this.repetitions++;
    } else {
      this.repetitions = 0;
      this.interval = 1;
    }

    this.ease = this.ease + 0.1 - (5 - grade) * (0.08 + (5 - grade) * 0.02);

    if (this.ease < 1.3) {
      this.ease = 1.3;
    }
  }
}

// Example usage:
const superMemo = new SuperMemo2();

// User grades the response on a scale of 0 to 5 (0 being completely forgotten, 5 being perfect recall)
const userGrade = 4;

// Update the SuperMemo2 parameters based on user's grade
superMemo.gradeResponse(userGrade);

// Print the updated parameters
console.log(`Repetitions: ${superMemo.repetitions}`);
console.log(`Interval: ${superMemo.interval}`);
console.log(`Ease: ${superMemo.ease}`);
