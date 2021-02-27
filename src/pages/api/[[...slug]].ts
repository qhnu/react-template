import { NextApiRequest, NextApiResponse } from 'next'

export default async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  const { query } = req
  const { slug } = query
  const union = slug[0]

  switch (union) {
    case '':
      break
  }

  res.status(200).json(union)
}
