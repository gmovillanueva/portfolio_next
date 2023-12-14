import React from 'react';
import type { NextApiRequest, NextApiResponse } from 'next';
import { groq } from 'next-sanity';
import { sanityClient } from '@root/sanity/lib/client';
import { Project } from '@root/typings';

const query = groq`
*[_type == "project"]{
  ...,
  technologies[]->
}
`;

type Data = {
  projects: Project[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const projects: Project[] = await sanityClient.fetch(query);
  res.status(200).json({ projects });
}
