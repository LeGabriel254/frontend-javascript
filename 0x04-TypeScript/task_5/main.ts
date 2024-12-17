// Defines the MajorCredits interface
interface MajorCredits {
  credits: number;
  brand: string; 
}

// Define the MinorCredits interface
interface MinorCredits {
  credits: number;
  brand: string;
}

// Function to sum the credits of two MajorCredits subjects
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  const totalCredits = subject1.credits + subject2.credits;
  return {
    credits: totalCredits,
    brand: `${subject1.brand} & ${subject2.brand}`, 
  };
}

// Function to sum the credits of two MinorCredits subjects
function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  const totalCredits = subject1.credits + subject2.credits;
  return {
    credits: totalCredits,
    brand: `${subject1.brand} & ${subject2.brand}`,
  };
}
