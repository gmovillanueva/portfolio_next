import { ImageLoader } from "next/image";
import { StringRule } from "sanity";

interface SanityBody {
  _createAt: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
}

interface Image {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference"
  }
}

export interface PageInfo extends SanityBody{
  _type: "pageInfo";
  name: string;
  role: string;
  heroImage: Image
  backgroundInformation: string;
  profileImage: string;
  phoneNumber: string;
  email: string;
  address: string;
}

export interface Technology extends SanityBody {
  _type: "skill";
  image: Image;
  title: string;
}

export interface Skill extends SanityBody {
  _type: "skill";
  image: Image;
  title: string;
}

export interface Experience extends SanityBody {
  _type: "experience";
  jobTitle: string;
  companyImage: Image;
  company: string;
  dateStarted: date;
  dateEnded: date;
  isCurrentlyWorkingHere: boolean;
  points: string;
  technologies: Technology[];
}

export interface Project extends SanityBody {
  _type: "project"
  title: string;
  image: Image;
  linkToBuild: string;
  summary: string;
  technologies: Technology[];
}

export interface Social extends SanityBody {
  _type: "social";
  title: string;
  url: string;
}
