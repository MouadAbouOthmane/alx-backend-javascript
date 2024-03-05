import { uploadPhoto, createUser } from "./utils";

export default function handleProfileSignup() {
  uploadPhoto().then((res) => {
    createUser().then((res1) => {
      console.log(`${res.body} ${res1.firstName} ${res1.lastName}`);
    });
  });
}
