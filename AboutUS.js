import React from 'react';
import './AboutUS.css'; // Create a separate CSS file for your custom styles


const TeamMember = ({ name, role, bio , image }) => (
  <div className="col-md-4 mb-4">
    <div className="card">
    <img src={image} className="card-img-top" alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{role}</h6>
        <p className="card-text">{bio}</p>
      </div>
    </div>
  </div>
);

const AboutUs = () => {
  const teamMembers = [
    {
      name: 'Afzal',
      role: 'Founder',
      bio: 'Afzal is the founder of our company and has over 10 years of experience in the industry.',
      image : 'ban.jpg',
    },
    {
      name: 'Sumit',
      role: 'Designer',
      bio: 'Sumit is a talented designer with a passion for creating beautiful and functional user interfaces.',
      image : 'ban.jpg',    
    },
    {
      name: 'Abhay',
      role: 'Developer',
      bio: 'Abhay is an experienced developer who loves to code and solve complex problems.',
      image : 'ban.jpg',
    },
  ];

  return (
    <div className="container">
      <h1 className="text-center mt-5 custom-heading" >Our Team</h1>
      <hr></hr>
      <div className="row">
        {teamMembers.map((member, index) => (
          <TeamMember key={index} name={member.name} role={member.role} bio={member.bio} image={member.image} />
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
