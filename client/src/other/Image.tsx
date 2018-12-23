import React, { FunctionComponent } from 'react';

export interface IProps {
  alt?: string;
  src: string;
}

export const Image: FunctionComponent<IProps> = ({ alt, src }) => {
  return (
    <div className="card mb-3">
      <img className="img-fluid" src={src} alt={alt} />
      <div className="card-body bg-dark text-light py-3">
        <p className="card-text">{alt ? alt : 'Caption needed'}</p>
      </div>
    </div>
  );
};