import { NextApiRequest, NextApiResponse } from 'next'

export default async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  // const {
  //   query: { slug },
  // } = req
  res.status(200).json({ hi: 'hi' })
}
