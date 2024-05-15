import React from 'react';

interface CardProps {
  title: string;
  description: string;
  imgUrl: string;
  demoLink: string;
}

const Card_principal: React.FC<CardProps> = ({ title, description, imgUrl, demoLink }) => {
  return (
    <div className="cartao">
      <div className="texto">
        <h2>{title}</h2>
        <h3>{description}</h3>
        <a className='assistirdmo' href={demoLink}>Assistir a demo</a>
      </div>
      <img className='sfimg' src={imgUrl} alt={title} />
    </div>
  );
};

export default Card_principal;
