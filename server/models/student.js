import mongoose from "mongoose";

const studentSchema = mongoose.Schema({
  registratioNumber: Number,
  studentName: String,
  grade: String,
  section: {
    type: String,
    default: "A",
  },
  subject: [String],
});

const student = mongoose.model("student", studentSchema);

export default student;
