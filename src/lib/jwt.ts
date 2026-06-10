import jwt from 'jsonwebtoken'

export function signJwt(payload: object) {
  return jwt.sign(payload, process.env.NEXTAUTH_SECRET as string, {
    expiresIn: '7d'
  })
}

export function verifyJwt(token: string) {
  try {
    const data = jwt.verify(token, process.env.NEXTAUTH_SECRET as string)

    const user = {
      id: (data as any).id,
      name: (data as any).name,
      image: (data as any).image,
      email: (data as any).email,
    }

    return user
  } catch (error) {
    return null
  }
}
