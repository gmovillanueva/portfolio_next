import React from 'react';
import type { NextApiRequest, NextApiResponse } from 'next';
import { groq } from 'next-sanity';
import { sanityClient } from '@root/sanity/lib/client';
import { Skill } from '@root/typings';

const query = groq`
*[_type == "skill"]
`;

type Data = {
  skills: Skill[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const skills: Skill[] = await sanityClient.fetch(query);
  res.status(200).json({ skills });
}
