import React from 'react'
import { UserInfo } from '../@types/user'
import Image from 'next/image'
import styles from '../scss/userInfoImage.module.scss'
type UserProps = {
  user: UserInfo
}

export const DiscordAvatar: React.FC<UserProps> = ({ user }) => {
  return (
    <>
      <div className="ml-auto mr-auto mt-4">
        <Image
          className="avatar"
          src={user.discordAvatarUrl}
          width={60}
          height={60}
        />
      </div>
      {/* workaround because next/image doesn't support styles */}
      {/* https://github.com/vercel/next.js/discussions/18312 */}
      <style jsx global>{`
        .avatar {
          border-radius: 50%;
        }
      `}</style>
    </>
  )
}

const UserInfoImage: React.FC<UserProps> = ({ user }) => {
  return (
    <>
      {user.discordUserId ? (
        <DiscordAvatar user={user} />
      ) : (
        <div
          className={`text-uppercase bg-primary rounded-circle text-light ${styles['user_info_image']}`}
        >
          {user.firstName[0] + user.lastName[0]}
        </div>
      )}
    </>
  )
}

export default UserInfoImage
