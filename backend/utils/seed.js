// backend/utils/seed.js

import Voter from "../models/Voter.js";
import Candidate from "../models/Candidate.js";
import Admin from "../models/Admin.js";

const seedData = async () => {
  try {
    // Clear collections
    await Voter.deleteMany();
    await Candidate.deleteMany();
    await Admin.deleteMany();

    // Create admin
    const admin = await Admin.create({
      name: "Super Admin",
      email: "admin@example.com",
      password: "admin123",
    });

    // Create voters
    const voter1 = await Voter.create({
      studentId: "S123456",
      name: "John Doe",
      department: "Computer Science",
      email: "john@example.com",
      password: "password123",
    });

    const voter2 = await Voter.create({
      studentId: "S789012",
      name: "Jane Smith",
      department: "Electrical Engineering",
      email: "jane@example.com",
      password: "password123",
    });

    // Create candidates
    await Candidate.create({
      name: "Alice Johnson",
      department: "Computer Science",
      bio: "CS Student Council President Candidate",
      image: "https://example.com/alice.jpg",
      createdBy: admin._id,
    });

    await Candidate.create({
      name: "Bob Martin",
      department: "Electrical Engineering",
      bio: "EE Student Leader",
      image: "https://example.com/bob.jpg",
      createdBy: admin._id,
    });

    console.log("✅ Database seeded successfully");
  } catch (err) {
    console.error("❌ Error seeding database:", err.message);
  }
};

export default seedData;
