import { getUserInfoFromRefreshToken } from './discordAuth'

const updateUserRefreshToken = jest.spyOn(
  require('./discordAuth'),
  'updateUserRefreshToken'
)

const mockTokenResponse = {
  access_token: '6qrZcUqja7812RVdnEKjpzOL4CvHBFG',
  token_type: 'Bearer',
  expires_in: 604800,
  refresh_token: 'D43f5y0ahjqew82jZ4NViEr2YafMKhue',
  scope: 'email guilds.join gdm.join identify'
}

const mockUserInfoResponse = {
  id: '756944741073027119',
  username: 'charolastra',
  avatar: 'ea8f5f59aff14450e892321ba128745d',
  discriminator: '3886',
  public_flags: 0,
  flags: 0,
  locale: 'en-US',
  mfa_enabled: true,
  email: 'charlieworkhd@gmail.com',
  verified: true
}

const mockUserInfo = {
  userId: 1,
  username: 'charolastra',
  avatarUrl: `https://cdn.discordapp.com/avatars/756944741073027119/ea8f5f59aff14450e892321ba128745d.png`,
  refreshToken: 'D43f5y0ahjqew82jZ4NViEr2YafMKhue'
}

describe('getUserInfoFromRefreshToken function', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should update refresh token in database if refresh token invalid', async () => {
    expect(
      await getUserInfoFromRefreshToken(1, 'mockRefreshToken')
    ).rejects.toThrow('refresh token invalid')
    expect(updateUserRefreshToken).toBeCalledWith(1, '')
  })

  it('should return user info if refresh token valid', async () => {
    getTokenFromRefreshToken.mockResolvedValue(mockUserInfoResponse)
    expect(
      await getUserInfoFromRefreshToken(1, 'mockRefreshToken')
    ).resolves.toEqual(mockUserInfo)
    expect(updateUserRefreshToken).toBeCalledWith(
      1,
      mockTokenResponse.refresh_token
    )
  })
})
