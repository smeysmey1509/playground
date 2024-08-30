import React from "react";
import "./ProfileCard.css";

export interface ProfileCardProps {
  name: string;
  title: string;
  imageUrl: string;
  posts: number;
  followers: number;
  following: number;
}

interface ProfileCardStatic extends React.FC<ProfileCardProps> {
  getDefaultAttributes: () => ProfileCardProps;
}

export const ProfileCard: ProfileCardStatic = ({
  name,
  title,
  imageUrl,
  posts,
  followers,
  following,
}) => {
  return (
    <div className="profile-card">
      <div className="profile-card-header">
        <img
          src={imageUrl}
          alt={`${name}'s profile picture`}
          className="profile-card-image"
        />
      </div>
      <div className="profile-card-body">
        <h2>{name}</h2>
        <h3>{title}</h3>
        <div className="profile-card-stats">
          <div>
            <span className="stat-number">{posts}</span>
            <span className="stat-label">Posts</span>
          </div>
          <div>
            <span className="stat-number">{followers}k</span>
            <span className="stat-label">Followers</span>
          </div>
          <div>
            <span className="stat-number">{following}</span>
            <span className="stat-label">Following</span>
          </div>
        </div>
      </div>
      <div className="profile-card-footer">
        <button className="btn follow-btn">Follow</button>
        <button className="btn message-btn">Message</button>
      </div>
    </div>
  );
};

// Static method to get default attributes
ProfileCard.getDefaultAttributes = (): ProfileCardProps => ({
  name: "",
  title: "",
  imageUrl: "",
  posts: 0,
  followers: 1,
  following: 1,
});

export default ProfileCard;
