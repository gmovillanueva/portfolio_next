import { Experience } from "@root/typings";

export const fetchExperiences = async() => {
  const resp = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getExperience`);

  const data = await resp.json()
  const experiences: Experience[] = data.experiences;

  return experiences;
}